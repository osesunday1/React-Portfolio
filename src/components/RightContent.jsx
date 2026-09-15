import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPhone,
  faEnvelope,
  faLocationDot,
  faCity,
  faBolt,
} from '@fortawesome/free-solid-svg-icons';

const strengths = ["React.js", "Node.js", "Python", "AWS", "Microservices", "Cloud Architecture", "CI/CD", "DevOps"];

const highlights = [
  "10,000+ users supported",
  "70% lower deployment costs",
  "45% faster API responses",
  "60% more throughput",
  "50% fewer incidents",
  "65% lower MTTR",
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

const Heading = styled.h1`
  margin: 0 0 12px 0;
  font-size: var(--h1-font);
  font-weight: bold;
  border-bottom: solid 1px var(--green-color);
  padding-bottom: 6px;

  span {
    color: var(--darkGreen-color);
  }
`;

const Title = styled.p`
  margin: 0 0 12px 0;
  font-weight: 600;
  color: var(--darkGreen-color);
  font-size: 1em;
`;

const Story = styled.p`
  font-size: 16px;
  line-height: 1.6;
  text-align: justify;
  margin: 0;
  color: #333;
`;

const TagList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

const StrengthTag = styled.span`
  background: var(--white-color);
  border: 1px solid var(--darkGreen-color);
  color: #333;
  font-size: 0.82em;
  font-weight: 600;
  padding: 6px 12px;
  border-radius: 20px;
`;

const HighlightBadge = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  background: var(--darkGreen-color);
  color: var(--white-color);
  font-size: 0.75em;
  font-weight: 700;
  padding: 5px 12px;
  border-radius: 20px;
  white-space: nowrap;
`;

const BioGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 14px;

  @media (max-width: 576px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const BioItem = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  svg {
    color: var(--darkGreen-color);
    min-width: 16px;
  }

  div {
    overflow: hidden;
  }

  h4 {
    margin: 0;
    font-size: 12px;
    text-transform: uppercase;
    letter-spacing: 0.3px;
    color: #666;
  }

  p {
    margin: 2px 0 0 0;
    font-size: 15px;
    color: #333;
    font-weight: 600;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }
`;

function RightContent({ personalInfo, isLoading }) {
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!personalInfo) {
    return <div>No personal information available.</div>;
  }

  return (
    <section className='sideContent'>
      <Section>
        <Card>
          <Heading><span>About</span> ME</Heading>
          <Title>Senior Full-Stack Software Developer</Title>
          <Story>{personalInfo.myStory}</Story>
        </Card>

        <Card>
          <Heading><span>Core</span> STRENGTHS</Heading>
          <TagList>
            {strengths.map((strength) => (
              <StrengthTag key={strength}>{strength}</StrengthTag>
            ))}
          </TagList>
        </Card>

        <Card>
          <Heading><span>Impact</span> HIGHLIGHTS</Heading>
          <TagList>
            {highlights.map((highlight) => (
              <HighlightBadge key={highlight}>
                <FontAwesomeIcon icon={faBolt} />
                {highlight}
              </HighlightBadge>
            ))}
          </TagList>
        </Card>

        <Card>
          <Heading><span>Bio</span> &amp; CONTACT</Heading>
          <BioGrid>
            <BioItem>
              <FontAwesomeIcon icon={faPhone} />
              <div>
                <h4>Phone</h4>
                <p>{personalInfo.phone}</p>
              </div>
            </BioItem>
            <BioItem>
              <FontAwesomeIcon icon={faEnvelope} />
              <div>
                <h4>Email</h4>
                <p>{personalInfo.email}</p>
              </div>
            </BioItem>
            <BioItem>
              <FontAwesomeIcon icon={faLocationDot} />
              <div>
                <h4>Residence</h4>
                <p>{personalInfo.residence}</p>
              </div>
            </BioItem>
            <BioItem>
              <FontAwesomeIcon icon={faCity} />
              <div>
                <h4>City</h4>
                <p>{personalInfo.city}</p>
              </div>
            </BioItem>
          </BioGrid>
        </Card>
      </Section>
    </section>
  );
}

export default RightContent;
