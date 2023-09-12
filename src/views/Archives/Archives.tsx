import './Archives.css';
import GitHubIcon from '@mui/icons-material/GitHub';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LaunchIcon from '@mui/icons-material/Launch';

import projects from '../../assets/project-data.json';
import React from 'react';

type ProjectData = (typeof projects)[0];

enum LinkType {
  EXTERNAL = 'external',
  GITHUB = 'github',
  YOUTUBE = 'youtube',
}

const linkToIcon: Record<LinkType, React.ReactNode> = {
  [LinkType.EXTERNAL]: <LaunchIcon />,
  [LinkType.GITHUB]: <GitHubIcon />,
  [LinkType.YOUTUBE]: <YouTubeIcon />,
};

interface ArchiveItemProps {
  projectData: ProjectData;
}

const ArchiveItem: React.FC<ArchiveItemProps> = ({ projectData }) => {
  const { title, desc, date, tech, links } = projectData;

  return (
    <article className="archive-item">
      <h2>{title}</h2>
      <span>{date}</span>
      <p>{desc}</p>
      <div>
        {tech.map((item, i) => (
          <li key={i} className={'project-tech-element'}>
            {item}
          </li>
        ))}
      </div>
      <div>
        {links.map(([linkType, linkUrl], i) => (
          <a
            key={i}
            href={linkUrl}
            style={{ color: 'inherit' }}
            target="_blank"
            rel="noreferrer"
          >
            <div className="project-link">
              {linkToIcon[linkType as LinkType]}
            </div>
          </a>
        ))}
      </div>
    </article>
  );
};

const Archives = () => {
  return (
    <main>
      <h1>Archives</h1>
      <div className="archive-list">
        {projects.map((projectData, i) => (
          <ArchiveItem projectData={projectData} key={i} />
        ))}
      </div>
    </main>
  );
};

export default Archives;
