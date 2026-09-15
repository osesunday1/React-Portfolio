import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import styles from './RightContentEducation.module.css';
import { FaCertificate } from 'react-icons/fa';

const certifications = [
  {
    name: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services (AWS)",
    date: "Issued Jun 2026",
    expires: "Expires Jun 2029",
  },
  {
    name: "Jenkins: Jobs, Pipelines, CI/CD and DevOps for Beginners",
    issuer: "Udemy",
    date: "Issued Jan 2026",
  },
  {
    name: "Git & GitHub - The Practical Guide",
    issuer: "Udemy",
    date: "Issued Jan 2025",
  },
  {
    name: "Learn and Understand D3.js for Data Visualization",
    issuer: "Udemy",
    date: "Issued Dec 2024",
  },
  {
    name: "React - The Complete Guide (incl. Next.js, Redux)",
    issuer: "Udemy",
    date: "Issued Jul 2024",
  },
  {
    name: "Node.js, Express, MongoDB & More: The Complete Bootcamp",
    issuer: "Udemy",
    date: "Issued Jun 2024",
  },
  {
    name: "The Complete JavaScript Course: From Zero to Expert!",
    issuer: "Udemy",
    date: "Issued May 2024",
  },
];

const RightContentCertifications = () => {
  return (
    <section className='sideContent'>
      <div className={styles.content}>
        <VerticalTimeline lineColor='var(--darkGreen-color)' Height='100%'>
          {certifications.map((cert) => (
            <VerticalTimelineElement
              className='vertical-timeline-element--education'
              iconStyle={{ background: 'var(--darkGreen-color)', color: '#fff' }}
              icon={<FaCertificate />}
              date={cert.expires ? `${cert.date} | ${cert.expires}` : cert.date}
              key={cert.name}
            >
              <h4>{cert.name}</h4>
              <p>{cert.issuer}</p>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    </section>
  );
};

export default RightContentCertifications;
