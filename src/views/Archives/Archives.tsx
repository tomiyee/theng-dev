import './Archives.css';
import FolderOutlinedIcon from '@mui/icons-material/FolderOutlined';
import GitHubIcon from '@mui/icons-material/GitHub';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LaunchIcon from '@mui/icons-material/Launch';

import projects from '../../assets/project-data.json';

type ProjectData = (typeof projects)[0];

const linkIcons = new Map([
  ['external', <LaunchIcon />],
  ['github', <GitHubIcon />],
  ['youtube', <YouTubeIcon />],
]);

interface ArchiveItemProps {
  projectData: ProjectData;
}

const ArchiveItem: React.FC<ArchiveItemProps> = ({ projectData }) => {
  const { title, desc, date, tech, links } = projectData;

  const projectTechListItems = tech.map((item, i) => (
    <li key={i} className={'project-tech-element'}>
      {item}
    </li>
  ));

  const displayedLinks = links
    .filter((linkData) => linkIcons.has(linkData[0]))
    .map((linkData, i) => (
      <a
        key={i}
        href={linkData[1]}
        style={{ color: 'inherit' }}
        target="_blank"
        rel="noreferrer"
      >
        <div className="project-link">{linkIcons.get(linkData[0])}</div>
      </a>
    ));

  return (
    <article className="archive-item">
      <h2>{title}</h2>
      <span>{date}</span>
      <p>{desc}</p>
      <div>{projectTechListItems}</div>
      <div>{displayedLinks}</div>
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
