import ReactProjects from "./subComponents/ReactProjects";




const RightContentProjects = ({personalInfo}) => {
    

    return (  
        <>
        <section className='sideContent'> 
        <ReactProjects personalInfo={personalInfo}/>
        </section>
        </>
    );
}






 
export default RightContentProjects;