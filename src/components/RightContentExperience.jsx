import styled from 'styled-components';

const workExperience = [
  {
    company: "MDL Door Systems",
    location: "Canada",
    position: "Software Developer",
    duration: "08-2024 - Current",
    responsibilities: [
      "Participate in the development and implementation of the in-house web application using React.js , Node.js and Express.js.",
      "Work with HTML, CSS, Tailwind CSS, Styled Components, JavaScript and React.js for the frontend.",
      "Use Figma to create UI for different views of the system.",
      "Assisted with managing data using Mongoose as an ORM and MongoDB as the database.",
      "Use Git and GitHub for version control, collaboration.",
      "Use EC2 in AWS for deployment of the web application."
    ],
  },
  {
    company: "Soniwave Tech Inc",
    location: "Canada",
    position: "Fullstack Developer",
    duration: "04-2024 - 07-2024",
    responsibilities: [
      "Development of web applications using React.js and Next.js.",
      "Collaborating with the team on various frontend development tasks.",
      "Managing databases using MongoDB and MySQL, optimizing performance and writing efficient queries.",
      "Deployment and management web applications on AWS, enhancing scalability and reliability.",
    ],
  },

  {
    company: "Freelance",
    location: "Canada",
    position: "Frontend Web Developer",
    duration: "02-2023 - 08-2023",
    responsibilities: [
      "Building full-stack applications with Node.js, Express.js, MongoDB, and React js, creating efficient and scalable solutions.",
      "Converted designs from Figma into fully functional websites.",
      "Collaborated with clients to understand their needs and deliver tailored solutions.",
      "Provided ongoing support and maintenance for client websites.",
    ],
  },
  {
    company: "Andjemz Tech",
    location: "Nigeria",
    position: "Python Developer",
    duration: "02-2022 - 02-2023",
    responsibilities: [
      "Developed and maintained web applications using Django.",
      "Worked with a team to implement backend services and REST APIs.",
      "Integrated front-end components with server-side logic.",
      "Conducted code reviews and provided technical guidance to junior developers.",
    ],
  },
  
  {
    company: "Cyprus International University",
    location: "Cyprus",
    position: "Lecturer",
    duration: "06-2018 - 02-2022",
    responsibilities: [
      "Supervised students, providing proofreading and feedback on their assignments, projects, and theses.",
      "Conducted lectures on Information Technology topics, including web development.",
      "Developed course materials and assessments for students.",
      "Provided mentorship and career guidance to students.",
    ],
  },
];



const Section = styled.section`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 95%;
  margin: 0 auto;
  margin-top: 20px;
  margin-bottom: 20px;
`;

const Card = styled.div`
  background-color: #d9f7f1;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s;
  border: 1px solid var(--darkGreen-color);

  &:hover {
    transform: scale(1.02);
  }
`;

const Company = styled.h2`
  margin: 0;
  font-size: 1.5em;
  color: #333;
  font-weight: bold;
`;

const Location = styled.h4`
  margin: 5px 0;
  font-size: 1em;
  font-weight: bold;
  color: #444;
`;


const Responsibilities = styled.div`
  h4 {
    font-size: 1em;
    color: #444;
  }

  ul {
    margin: 0;
    padding-left: 20px;
  }

  li {
    margin-bottom: 5px;
    color: #333;
  }
`;

const Comb = styled.p`
  display: flex;
  gap:5px;
  margin-bottom:0px;
`;

const Position = styled.p`
  font-size: 1.2em;
  color: var(--darkGreen-color);
`;

const Duration = styled.p`
  margin: 3px 0;
  color: var(--darkGreen-color);
  font-size: 1em;
  font-weight: bold;
  color: #444;
  
`;



const RightContentExperience = () => {
  return (
    <section className='sideContent'>
    <Section>
      {workExperience.map((job, index) => (
        <Card key={index}>
          <Company>{job.company}</Company>
          <Location>{job.location}</Location>
          <Comb>
          <Position className=''>{job.position} </Position>
          <Duration>{job.duration}</Duration>
          </Comb>
          <Responsibilities>
            <h4>Responsibilities:</h4>
            <ul>
              {job.responsibilities.map((responsibility, index) => (
                <li key={index}>{responsibility}</li>
              ))}
            </ul>
          </Responsibilities>
        </Card>
      ))}
    </Section>
    </section>
  );
};

export default RightContentExperience;

