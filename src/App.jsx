import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import Homepage from "./pages/Homepage";

const App = () => {
  const[personalInfo, setPersonalInfo] = useState({});
  const [isLoading, setIsLoading] = useState(false);



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
              
                    <Route path="/" element= {<Homepage personalInfo= {personalInfo} isLoading={isLoading} />} >
                    <Route path="*" element={<Navigate to="/" />} />
              </Route>
        </Routes>
    </BrowserRouter>

    </>
    );
}


export default App;

