import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCode,
  faServer,
  faDatabase,
  faCloud,
  faCogs,
  faShieldHalved,
} from '@fortawesome/free-solid-svg-icons';

const skillCategories = [
  {
    title: "Frontend",
    icon: faCode,
    skills: ["React.js", "JavaScript", "HTML5", "CSS3", "Redux", "Responsive Design"],
  },
  {
    title: "Backend",
    icon: faServer,
    skills: ["Node.js", "Express.js", "Python", "Django", "REST APIs", "Microservices"],
  },
  {
    title: "Databases",
    icon: faDatabase,
    skills: ["MongoDB", "MySQL", "PostgreSQL", "Firestore", "Redis"],
  },
  {
    title: "Cloud / AWS",
    icon: faCloud,
    skills: ["AWS", "EC2", "Auto Scaling Groups", "Application Load Balancer", "S3", "CloudFront", "Lambda", "CloudWatch", "IAM"],
  },
  {
    title: "DevOps",
    icon: faCogs,
    skills: ["Jenkins", "CI/CD", "Docker", "Kubernetes", "Git", "GitHub", "GitLab"],
  },
  {
    title: "Authentication & Security",
    icon: faShieldHalved,
    skills: ["Microsoft Entra ID / Azure AD", "Single Sign-On (SSO)", "JWT", "RBAC", "Firebase Authentication"],
  },
];

const Section = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 18px;
  width: 95%;
  margin: 0 auto;
  margin-top: 20px;
  margin-bottom: 20px;
`;

const Heading = styled.div`
  grid-column: 1 / -1;
  border-bottom: solid 1px var(--green-color);
  margin-bottom: 4px;
  display: flex;
  justify-content: space-between;

  h1 {
    font-size: var(--h1-font);
    font-weight: bold;
  }
`;

const Card = styled.div`
  background-color: #d9f7f1;
  padding: 18px 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s;
  border: 1px solid var(--darkGreen-color);

  &:hover {
    transform: scale(1.02);
  }
`;

const CategoryTitle = styled.h3`
  display: flex;
  align-items: center;
  gap: 8px;
  margin: 0 0 12px 0;
  font-size: 1em;
  color: var(--darkGreen-color);
  border-bottom: 1px solid var(--green-color);
  padding-bottom: 8px;
`;

const TagList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

const Tag = styled.span`
  background: var(--white-color);
  border: 1px solid var(--darkGreen-color);
  color: #333;
  font-size: 0.78em;
  font-weight: 600;
  padding: 5px 10px;
  border-radius: 20px;
`;

const RightContentSkills = () => {
  return (
    <section className='sideContent'>
      <Section>
        <Heading>
          <h1><span>Skills</span> &amp; TECHNOLOGIES</h1>
        </Heading>

        {skillCategories.map((category) => (
          <Card key={category.title}>
            <CategoryTitle>
              <FontAwesomeIcon icon={category.icon} />
              {category.title}
            </CategoryTitle>
            <TagList>
              {category.skills.map((skill) => (
                <Tag key={skill}>{skill}</Tag>
              ))}
            </TagList>
          </Card>
        ))}
      </Section>
    </section>
  );
};

export default RightContentSkills;
