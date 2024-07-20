import React from 'react';
import styles from './RightContent.module.css'
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ProgressBar from 'react-bootstrap/ProgressBar';

import styled from 'styled-components';


const Heading1 = styled.div`
display: none; /* Hide by default */
@media (max-width: 1024px) {
display: block; /* Show on small screens}`

const Heading2 = styled.div`
display: none; /* Hide by default */
@media (min-width: 1024px) {
display: block; /* Show on small screens}`



function RightContent({personalInfo, isLoading}) {
    

        // First, check if it's loading
        if (isLoading) {
            return <div>Loading...</div>;
        }
    
        // Then, check if personalInfo is not null before trying to access its properties
        if (!personalInfo) {
            return <div>No personal information available.</div>;
        }
    return(
        <>
        {isLoading ? (
            <div>Loading...</div>
        ) :(<>
       <section className='sideContent'>
      <MyStory personalInfo={personalInfo}/>
      <ProgrammingSkills personalInfo={personalInfo}/>
      <Stack personalInfo={personalInfo}/>
      </section> 
      </>
      
) }
</>
)

}



const MyStory = ({personalInfo})=>{

    return(
        <>
         <div className={styles.content}>
           
            <div className={styles.heading}>
                <h1><span>About</span> ME </h1>
            </div>
        
            <div className={styles.info}>
                <p>
                {personalInfo.myStory}  
                </p>
            </div>

            <Heading1>
        <div className={styles.heading}>
                        <h1><span>Bio</span> </h1>
        </div>
        </Heading1>

            <div className={styles.info}>
            <div className={styles.residence}>
                    <h4>Number...</h4>
                    <div className={styles.paragraph}>{personalInfo.phone}</div>
                </div>
                <div className={styles.residence}>
                    <h4>Email...</h4>
                    <div className={styles.paragraph}>{personalInfo.email}</div>
                </div>
                <div className={styles.residence}>
                    <h4>Residence...</h4>
                    <div className={styles.paragraph}>{personalInfo.residence}</div>
                </div>
                <div className={styles.residence}>
                    <h4>City...</h4>
                    <div className={styles.paragraph}>{personalInfo.city}</div>
                </div>
                
            </div>
    </div>
        </>
    )
}






const ProgrammingSkills = ({personalInfo}) => {
    
    const skills= personalInfo.codingSkills
    return ( 
        <>
        <div className={styles.heading2}>
                <h1><span>Programming</span> LANGUAGES</h1>
            </div>
         <div className={styles.content2}>

           <div className={styles.info2}>

            {skills && skills.map((skill)=>(
                <React.Fragment key={skill.name}>
           <LanguageChart percent={skill.value}  language={skill.name}/>
            </React.Fragment>
            ))}

            </div>
        </div>
        </>
    );
}


const customStyles = {
    
    path: {
      // Path color
      stroke: '#0a7560',
      // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
      transition: 'stroke-dashoffset 0.5s ease 0s',
    },
    // Customize the trail, i.e. the "unfilled" portion
    trail: {
      stroke: '#d6d6d6',
    },
   
  };


const LanguageChart = ({percent=90, language='Javascript'})=> {

    const percentage = percent;
    return(
        <>
        <div className={styles.chart}>
                    <div style={{ position: 'relative', width: '200px', height: '200px' }}> {/* Adjust size as needed */}
                        <CircularProgressbar styles= {customStyles}
                            value={percentage}
                            // Add other styles if needed
                        />
                        <div className={styles.chartInfo}>
                            {language}
                        </div>
                        <div className={styles.chartInfoPercentage}>
                            {`${percentage}%`}
                        </div>
                    </div>
                </div>
        </>
    )
}





const Stack = ({personalInfo})=>{
    const frontEnd= personalInfo.frontendSkills
    const backEnd= personalInfo.backendSkills


     
    return(
        <>
        
         <div className={styles.content}>
           
                <div className={styles.heading}>
                        <h1><span>Front</span> End </h1>
                        <Heading2>    <h1 ><span>Back</span> End </h1></Heading2> 
                </div>
        
               
        <div className={styles.info} >
        { frontEnd && frontEnd.map((front)=>(
            <React.Fragment key={front.name}>
            <div className={styles.stack} >
                    <h5>{front.name}</h5>
                    <h5> <span>{front.value} %</span> </h5>
                    
            </div>
            <ProgressBar now={front.value} style={{ height: "5px", backgroundColor: '#d6d6d6'}} variant="success" />
            </React.Fragment>
        ))}
            
           

        </div>
        
        <Heading1>
        <div className={styles.heading}>
                        <h1><span>Back</span> End </h1>
        </div>
        </Heading1>
        <div className={styles.info} >
        { backEnd && backEnd.map((back)=>(
            <React.Fragment key={back.name}>
            <div className={styles.stack} >
                    <h5>{back.name}</h5>
                    <h5> <span>{back.value} %</span> </h5>
                    
            </div>
            <ProgressBar now={back.value} style={{ height: "5px", backgroundColor: '#d6d6d6'}} variant="success"   />
            </React.Fragment>
        ))}
            
           

        </div>
    </div> <br />
        </>
    )
}






export default RightContent;