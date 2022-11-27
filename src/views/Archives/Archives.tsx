import './Archives.css';
import { ProjectData } from '../../types';
import LinkIcon from '../../components/LinkIcon';
import projectData from '../../assets/projectData';

const ArchiveItem: React.FC<{ projectData: ProjectData }> = ({
  projectData: project,
  ...rest
}) => {
  const { title, desc, date, tech, links } = project;

  const projectTechListItems = tech.map((item) => (
    <li key={item} className={'project-tech-element'}>
      {item}
    </li>
  ));

  return (
    <article className="archive-item" {...rest}>
      <h2>{title}</h2>
      <span>{date}</span>
      <p>{desc}</p>
      <div>{projectTechListItems}</div>
      <div>
        {links.map(([icon, link]) => (
          <LinkIcon icon={icon} link={link} key={link} />
        ))}
      </div>
    </article>
  );
};

const Archives: React.FC = () => {
  const archiveItems = projectData.map((project) => (
    <ArchiveItem projectData={project} key={project.title} />
  ));
  return (
    <main>
      <h1>Archives</h1>
      <div className="archive-list">{archiveItems}</div>
    </main>
  );
};

export default Archives;
