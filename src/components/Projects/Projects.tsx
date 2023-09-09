import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import FolderOutlinedIcon from '@mui/icons-material/FolderOutlined';
import LaunchIcon from '@mui/icons-material/Launch';
import StarIcon from '@mui/icons-material/Star';
import YouTubeIcon from '@mui/icons-material/YouTube';
import githubIconSrc from '../../assets/github.svg';
import { HeaderUnderline } from '../HeaderUnderline';

import './Projects.css';
import { FC } from 'react';

import projectData from '../../assets/project-data.json';

const featuredProjectsData = projectData.filter(
  (projectData) => projectData.featured,
);

const linkIcons = new Map([
  ['external', <LaunchIcon />],
  ['github', <img src={githubIconSrc} alt="git" />],
  ['youtube', <YouTubeIcon />],
]);

type FeaturedProjectData = (typeof featuredProjectsData)[0];

interface ProjectCardProps {
  projectData: FeaturedProjectData;
}
const ProjectCard: FC<ProjectCardProps> = ({ projectData }) => {
  const { title, desc, date, tech, links } = projectData;

  return (
    <VerticalTimelineElement
      className="vertical-timeline-element--work"
      date={date}
      contentStyle={{
        textAlign: 'left',
        borderTop: '4px solid var(--teal)',
      }}
      iconStyle={iconStyle}
      icon={<FolderOutlinedIcon />}
    >
      <article className="project-card">
        {/* The top of the project card */}
        <div className="project-card-top">
          <div className="folder-icon">
            <FolderOutlinedIcon />
          </div>

          {/* The links in the top right of the flexbox */}
          <div className="project-links">
            {links.map((linkData, i) => (
              <a
                key={i}
                href={linkData[1]}
                style={{ color: 'inherit' }}
                target="_blank"
                rel="noreferrer"
              >
                <div className="project-link">{linkIcons.get(linkData[0])}</div>
              </a>
            ))}
          </div>
        </div>

        {/* The title of the card */}
        <div className="project-card-title">
          <h2>{title}</h2>
        </div>

        {/* The brief description for the project below */}
        <div className="project-card-description">
          <p>{desc}</p>
        </div>

        {/* The list of different technology */}
        <div className="project-card-bottom">
          <ul className="project-card-tech-list">
            {tech.map((item, i) => (
              <li key={i} className={'project-tech-element'}>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </article>
    </VerticalTimelineElement>
  );
};

const iconStyle = {
  background: 'var(--white)',
  boxShadow:
    '0 0 0 4px var(--teal), inset 0 2px 0 rgb(0 0 0 / 8%), 0 3px 0 4px rgb(0 0 0 / 5%)',
};

const Projects: FC = () => {
  return (
    <section id="projects">
      <br />
      <h1>Previous Projects</h1>
      <HeaderUnderline />
      <div className="projects-content">
        <VerticalTimeline lineColor={'var(--navy)'}>
          {featuredProjectsData.map((data, i) => (
            <ProjectCard key={i} projectData={data} />
          ))}
          {
            <VerticalTimelineElement
              icon={<StarIcon style={{ fill: 'var(--navy)' }} />}
              iconStyle={{
                background: 'var(--teal)',
                boxShadow:
                  '0 0 0 4px var(--navy), inset 0 2px 0 rgb(0 0 0 / 8%), 0 3px 0 4px rgb(0 0 0 / 5%)',
              }}
            />
          }
        </VerticalTimeline>
      </div>
    </section>
  );
};

export default Projects;
