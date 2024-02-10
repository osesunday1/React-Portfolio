import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Homepage from "./pages/Homepage";
import RightContent from "./components/RightContent";
import RightContentEducation from "./components/RightContentEducation";
import RightContentProjects from "./components/RightContentProjects";
import ReactProjects from "./components/subComponents/ReactProjects";
import DjangoProjects from "./components/subComponents/DjangoProjects";


const App = () => {
  const[personalInfo, setPersonalInfo] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const [isNavVisible, setIsNavVisible] = useState(false);

  const toggleNav = () => {
    setIsNavVisible(!isNavVisible);
  };

  useEffect(function(){
    
    async function fetchPersonalInfo(){

      try{
        setIsLoading(true);
        const res = await fetch ('/db.json');
        const data = await res.json();
        
        setPersonalInfo(data.about);
      }catch{
        alert('there was an error loading data');
      }finally{
        setIsLoading(false)
      }
    }
    fetchPersonalInfo()
  },[])

  return (
    <>
    <BrowserRouter>
        <Routes>
              
              <Route path="/" element= {<Homepage personalInfo= {personalInfo} isLoading={isLoading} isNavVisible={isNavVisible} toggleNav={toggleNav} />} >
                    <Route path="/" element= {<RightContent personalInfo= {personalInfo} isLoading={isLoading}/>} />
                    <Route path="about" element= {<RightContent personalInfo= {personalInfo} isLoading={isLoading}/>} />
                    <Route path="education" element= {<RightContentEducation />} />
                        <Route path="projects" element= {<RightContentProjects personalInfo= {personalInfo} isLoading={isLoading} />}>
                            <Route index element= {<ReactProjects personalInfo={personalInfo}/>} />
                            <Route path="react" element= {<ReactProjects personalInfo={personalInfo}/>} />      
                            <Route path="django" element= {<DjangoProjects personalInfo={personalInfo}/>} />
                        </Route>

              </Route>
        </Routes>
    </BrowserRouter>

    </>
    );
}


export default App;

