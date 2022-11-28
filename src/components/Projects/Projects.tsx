import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import FolderOutlinedIcon from '@mui/icons-material/FolderOutlined';
import StarIcon from '@mui/icons-material/Star';
import HeaderUnderline from '../HeaderUnderline';

import './Projects.css';
import projectData from '../../assets/projectData';
import { ProjectData } from '../../types';
import LinkIcon from '../LinkIcon';
import { Stack } from '@mui/material';

const ProjectCard: React.FC<{
  projectData: ProjectData;
}> = ({ projectData: project }) => {
  const { title, desc, date, tech, links } = project;

  const iconStyle: React.CSSProperties = {
    background: 'var(--white)',
    boxShadow:
      '0 0 0 4px var(--teal), inset 0 2px 0 rgb(0 0 0 / 8%), 0 3px 0 4px rgb(0 0 0 / 5%)',
  };

  const timelineElemStyle: React.CSSProperties = {
    textAlign: 'left',
    borderTop: '4px solid var(--teal)',
  };

  /** @type {JSX.Element[]} Converts the list of project tech into an itemised list*/
  const projectTechListItems = tech.map((item, i) => (
    <li key={i} className={'project-tech-element'}>
      {item}
    </li>
  ));

  return (
    <VerticalTimelineElement
      className="vertical-timeline-element--work"
      date={date}
      contentStyle={timelineElemStyle}
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
                <div className="project-link">
                  <LinkIcon icon={linkData[0]} link={linkData[1]} />
                </div>
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
          <ul className="project-card-tech-list">{projectTechListItems}</ul>
        </div>
      </article>
    </VerticalTimelineElement>
  );
};

const Projects: React.FC = () => {
  const starElement = (
    <VerticalTimelineElement
      icon={<StarIcon style={{ fill: 'var(--navy)' }} />}
      iconStyle={{
        background: 'var(--teal)',
        boxShadow:
          '0 0 0 4px var(--navy), inset 0 2px 0 rgb(0 0 0 / 8%), 0 3px 0 4px rgb(0 0 0 / 5%)',
      }}
    />
  );

  const featuredProjects = projectData
    .filter((project) => project.featured)
    .map((data) => <ProjectCard projectData={data} key={data.title} />);

  return (
    <Stack component={'section'} alignItems='center' id="projects">
      <h1>Previous Projects</h1>
      <HeaderUnderline />
      <VerticalTimeline lineColor={'var(--navy)'}>
        {featuredProjects}
        {starElement}
      </VerticalTimeline>
    </Stack>
  );
};

export default Projects;
