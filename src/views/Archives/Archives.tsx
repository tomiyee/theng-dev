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
        {links
          .filter((linkData) => linkIcons.has(linkData[0]))
          .map((linkData, i) => (
            <a
              key={i}
              href={linkData[1]}
              style={{ color: 'inherit' }}
              target="_blank"
              rel="noreferrer"
            >
              <div
                className="project-link"
                style={{
                  width: '360px',
                  height: '360px',
                  padding: '5px',
                  border: '1px solid gray',
                }}
              >
                {linkIcons.get(linkData[0])}
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
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: '20px 20px',
        }}
      >
        {projects.map((projectData, i) => (
          <ArchiveItem projectData={projectData} key={i} />
        ))}
      </div>
    </main>
  );
};

export default Archives;
