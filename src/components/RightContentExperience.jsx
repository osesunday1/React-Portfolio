import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faCloud, faLaptopCode } from '@fortawesome/free-solid-svg-icons';

const workExperience = [
  {
    company: "Mission Perform",
    location: "Mississauga, Ontario, Canada",
    position: "Software Developer",
    duration: "May 2025 - Present",
    metrics: ["10,000+ users supported", "70% lower deployment costs"],
    sections: [
      {
        title: "Software Development",
        icon: faCode,
        items: [
          "Designed and developed enterprise-grade SaaS applications using React.js, Node.js, Express, MongoDB, and MySQL, supporting 10,000+ users.",
          "Designed, developed, and maintained Node.js microservices and RESTful APIs for internal platforms and customer-facing applications.",
          "Implemented secure authentication with JWT and Microsoft Entra ID (Azure AD), enabling SSO and reducing auth-related support requests.",
          "Built reusable backend middleware for authentication, validation, logging, and error handling.",
        ],
      },
      {
        title: "Cloud & Deployment",
        icon: faCloud,
        items: [
          "Designed scalable AWS architecture (EC2, Auto Scaling Groups, ALB, S3, CloudFront) with automated CI/CD, cutting operational costs by 70%.",
          "Built Jenkins CI/CD pipelines with Role-Based Access Control (RBAC), improving deployment reliability and delivery speed.",
          "Used Amazon CloudWatch to monitor application and infrastructure health, analyze logs, configure alarms, and troubleshoot production issues.",
        ],
      },
    ],
    technologies: ["React.js", "JavaScript", "Node.js", "Express.js", "MongoDB", "MySQL", "AWS", "EC2", "ASG", "ALB", "S3", "CloudFront", "CloudWatch", "Jenkins", "CI/CD", "Microsoft Entra ID", "JWT", "REST APIs", "Microservices"],
  },
  {
    company: "MDL Systems",
    location: "London, Ontario, Canada",
    position: "Software Developer",
    duration: "May 2024 - April 2025",
    metrics: ["45% faster API responses", "60% more throughput", "50% fewer incidents", "65% lower MTTR"],
    sections: [
      {
        title: "Software Development",
        icon: faCode,
        items: [
          "Designed, developed, and maintained enterprise-grade MERN stack applications delivering scalable, secure, high-performance solutions.",
          "Built and optimized RESTful APIs and microservices (queries, caching, async processing), cutting API response times by 45% and raising throughput 60%.",
          "Translated business requirements into technical solutions with product managers, designers, and stakeholders.",
          "Conducted code reviews and mentored junior developers and interns on clean-code practices and design principles.",
        ],
      },
      {
        title: "Cloud & Deployment",
        icon: faCloud,
        items: [
          "Designed and maintained AWS infrastructure using EC2, Auto Scaling Groups, ALB, CloudFront, and S3.",
          "Built event-driven AWS Lambda functions for background processing, scheduled tasks, and API integrations.",
          "Implemented monitoring, centralized logging, and automated alerting with CloudWatch, reducing incidents by 50% and MTTR by 65%.",
          "Containerized applications with Docker and deployed to Kubernetes for consistent, highly available releases.",
        ],
      },
    ],
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "JavaScript", "REST APIs", "Microservices", "AWS", "EC2", "ASG", "ALB", "Lambda", "S3", "CloudFront", "CloudWatch", "Docker", "Kubernetes", "Git", "GitHub", "CI/CD"],
  },
  {
    company: "Soniwave Tech Inc",
    location: "Saskatoon, Saskatchewan, Canada",
    position: "Full Stack Developer",
    duration: "March 2023 - April 2024",
    metrics: ["10,000+ concurrent users"],
    sections: [
      {
        title: "Software Development",
        icon: faCode,
        items: [
          "Designed and developed enterprise-grade MERN stack applications supporting 10,000+ concurrent users.",
          "Built microservices-based backend applications with Node.js and Express.js for scalable, independently deployable services.",
          "Used Firebase Authentication, Firestore, and Cloud Functions for secure, real-time application features.",
          "Developed reusable, responsive, mobile-first React UI components.",
        ],
      },
      {
        title: "Cloud & Deployment",
        icon: faCloud,
        items: [
          "Integrated AWS S3, EC2, CloudWatch, and IAM for file storage, hosting, monitoring, and secure access management.",
          "Deployed and maintained microservices on EC2 with CloudWatch monitoring and IAM-secured access control.",
          "Collaborated cross-functionally via Git and GitHub, using branching strategies, pull requests, code reviews, and CI/CD workflows.",
        ],
      },
    ],
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "JavaScript", "Firebase", "Firestore", "Cloud Functions", "AWS EC2", "S3", "CloudWatch", "IAM", "Git", "GitHub", "REST APIs", "Microservices", "CI/CD"],
  },
  {
    company: "Andjemz Tech Inc",
    location: "Abuja, Nigeria",
    position: "Python Developer",
    duration: "February 2022 - February 2024",
    metrics: [],
    sections: [
      {
        title: "Key Contributions",
        icon: faLaptopCode,
        items: [
          "Developed and maintained scalable web applications using Python and Django.",
          "Designed and implemented RESTful APIs for efficient data exchange between frontend and backend systems.",
          "Used PostgreSQL for database management and optimized queries for application performance.",
          "Assisted with packaged application integrations, data-conversion planning, and technical support for vendor applications.",
          "Collaborated with cross-functional teams using GitHub and GitLab for version control and Agile development.",
        ],
      },
    ],
    technologies: ["Python", "Django", "PostgreSQL", "REST APIs", "Git", "GitHub", "GitLab", "Agile Development"],
  },
];

const Section = styled.section`
  display: flex;
  flex-direction: column;
  gap: 18px;
  width: 95%;
  margin: 0 auto;
  margin-top: 20px;
  margin-bottom: 20px;
`;

const Card = styled.div`
  background-color: #d9f7f1;
  padding: 18px 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s;
  border: 1px solid var(--darkGreen-color);

  &:hover {
    transform: scale(1.01);
  }
`;

const CardHeader = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: baseline;
  gap: 8px;
`;

const Company = styled.h2`
  margin: 0;
  font-size: 1.3em;
  color: #222;
  font-weight: bold;
`;

const Duration = styled.p`
  margin: 0;
  color: var(--darkGreen-color);
  font-size: 0.85em;
  font-weight: bold;
  white-space: nowrap;
`;

const Comb = styled.p`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin: 2px 0 0 0;
  align-items: baseline;
`;

const Position = styled.span`
  font-size: 1em;
  font-weight: 600;
  color: var(--darkGreen-color);
`;

const Location = styled.span`
  font-size: 0.85em;
  color: #444;

  &::before {
    content: '\\2022';
    margin-right: 6px;
    color: var(--darkGreen-color);
  }
`;

const MetricsRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 10px;
`;

const StatBadge = styled.span`
  background: var(--darkGreen-color);
  color: var(--white-color);
  font-size: 0.72em;
  font-weight: 700;
  padding: 4px 10px;
  border-radius: 20px;
  white-space: nowrap;
`;

const SectionsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
  gap: 8px 20px;
  margin-top: 12px;
`;

const SectionBlock = styled.div`
  h4 {
    display: flex;
    align-items: center;
    gap: 6px;
    font-size: 0.8em;
    letter-spacing: 0.3px;
    text-transform: uppercase;
    color: var(--darkGreen-color);
    border-bottom: 1px solid var(--green-color);
    padding-bottom: 4px;
    margin: 0 0 6px 0;
  }

  ul {
    margin: 0;
    padding-left: 16px;
  }

  li {
    margin-bottom: 4px;
    color: #333;
    font-size: 0.82em;
    line-height: 1.4;
  }
`;

const TechTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-top: 12px;
  padding-top: 10px;
  border-top: 1px dashed var(--green-color);
`;

const TechTag = styled.span`
  background: var(--white-color);
  border: 1px solid var(--darkGreen-color);
  color: var(--darkGreen-color);
  font-size: 0.7em;
  font-weight: 600;
  padding: 3px 8px;
  border-radius: 4px;
`;

const RightContentExperience = () => {
  return (
    <section className='sideContent'>
      <Section>
        {workExperience.map((job) => (
          <Card key={job.company}>
            <CardHeader>
              <Company>{job.company}</Company>
              <Duration>{job.duration}</Duration>
            </CardHeader>

            <Comb>
              <Position>{job.position}</Position>
              <Location>{job.location}</Location>
            </Comb>

            {job.metrics.length > 0 && (
              <MetricsRow>
                {job.metrics.map((metric) => (
                  <StatBadge key={metric}>{metric}</StatBadge>
                ))}
              </MetricsRow>
            )}

            <SectionsGrid>
              {job.sections.map((section) => (
                <SectionBlock key={section.title}>
                  <h4>
                    <FontAwesomeIcon icon={section.icon} />
                    {section.title}
                  </h4>
                  <ul>
                    {section.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </SectionBlock>
              ))}
            </SectionsGrid>

            <TechTags>
              {job.technologies.map((tech) => (
                <TechTag key={tech}>{tech}</TechTag>
              ))}
            </TechTags>
          </Card>
        ))}
      </Section>
    </section>
  );
};

export default RightContentExperience;
