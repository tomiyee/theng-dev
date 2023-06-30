import './Archives.css';
import FolderOutlinedIcon from '@mui/icons-material/FolderOutlined';
import GitHubIcon from '@mui/icons-material/GitHub';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LaunchIcon from '@mui/icons-material/Launch';

/** @type {import("../../components/Projects/Projects.js").FeaturedProjectData[]} */
const projects = require('../../assets/project-data.json');

const linkIcons = new Map([
  ['external', <LaunchIcon/>],
  ['github',   <GitHubIcon/>],
  ['youtube', <YouTubeIcon/>],
]);

/**
 * 
 * @param {Object} props The Archive properties
 * @param {import("../../components/Projects/Projects.js").FeaturedProjectData} props.projectData - The data for the project this represents
 * @returns {JSX.Element}
 */
const ArchiveItem = (props) => {
  
  const {title, desc, date, tech, links} = props.projectData;
  
  const projectTechListItems = tech
    .map((item, i) => (
      <li key={i} className={'project-tech-element'}>{item}</li>
    ));

  const displayedLinks = links
    .filter(linkData => linkIcons.has(linkData[0]))
    .map((linkData, i) => (
      <a key={i} href={linkData[1]} style={{color: 'inherit'}} target="_blank" rel="noreferrer">
        <div className='project-link'>
          {linkIcons.get(linkData[0])}
        </div>
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
  )
}

const Archives = (props) => {
  
  const archiveItems = projects.map((projectData, i) => (
    <ArchiveItem 
      projectData={projectData}
      key={i}
    />
  ));
  return (
    <main>
      <h1>Archives</h1>
      <div className="archive-list">
        {archiveItems}
      </div>
    </main>
  );
};

export default Archives;