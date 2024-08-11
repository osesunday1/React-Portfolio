import styled from 'styled-components';

const workExperience = [
  {
    company: "Soniwave Tech Inc",
    location: "Canada",
    position: "Fullstack Developer",
    duration: "Current",
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
    duration: "Current",
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
    duration: "Previous",
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
    duration: "Previous",
    responsibilities: [
      "Supervised students, providing proofreading and feedback on their assignments, projects, and theses.",
      "Conducted lectures on Information Technology topics, including web development.",
      "Developed course materials and assessments for students.",
      "Provided mentorship and career guidance to students.",
    ],
  },
];

const RightContentExperience = () => {
  return (
    <section className='sideContent'>
    <Section>
      {workExperience.map((job, index) => (
        <Card key={index}>
          <Company>{job.company}</Company>
          <Location>{job.location}</Location>
          <Position>{job.position} ({job.duration})</Position>
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

const Section = styled.section`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Card = styled.div`
  background-color: #f9f9f9;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.02);
  }
`;

const Company = styled.h2`
  margin: 0;
  font-size: 1.5em;
  color: #333;
`;

const Location = styled.h4`
  margin: 5px 0;
  font-size: 1em;
  color: #666;
`;

const Position = styled.p`
  margin: 10px 0;
  font-size: 1.2em;
  color: #555;
`;

const Responsibilities = styled.div`
  margin-top: 10px;

  h4 {
    margin-bottom: 5px;
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