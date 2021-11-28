// import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
// import 'react-vertical-timeline-component/style.min.css';
// import FolderOutlinedIcon from '@mui/icons-material/FolderOutlined';
import { HeaderUnderline } from '../HeaderUnderline';
import './Projects.css';

/**
 * @typedef {Object} FeaturedProjectData
 * @property {string} title - The title of the card
 * @property {string} desc  - The brief project description
 * @property {string} image - The relative path to the background image
 * @property {string[]} tech - The list of tech involved
 * @property {string[][]} links - A list of [icon source, external link]
 */

/** @type {FeaturedProjectData[]} */
const featuredProjectsData = [
  {
    title: 'Conversational AI Interface',
    desc: 'A visual programming interace for conversational agents like Amazon Alexa.',
    image: '',
    tech: ['GWT', 'AWS', 'Node.js'],
    links: [
      ['github', 'github.com']
    ]
  },
  {
    title: 'Project Veritas',
    desc: 'An application for public accountability of police brutality.',
    image: '',
    tech: ['Vue.js', 'Node.js', 'MongoDB'],
    links: [
      ['github', 'github.com']
    ]
  },
  {
    title: 'Conversational AI Interface',
    desc: 'I developed and designed a visual programming interace for conversational agents like Amazon Alexa.',
    image: '',
    tech: ['GWT', 'AWS', 'Node.js'],
    links: [
      ['github', 'github.com']
    ]
  }
]

const icons = new Map();

/**
 * 
 * @param {Object} props 
 * @param {string[]} props.projectTechList
 * @param {Map<string, string>} props.links - Maps the icon name to the link it directs to
 * @param {string} props.title 
 * @returns 
 */
const ProjectCard = (props) => {
  const { links, projectTechList, title} = props;

  /** @type {JSX.Element[]} Converts the list of project tech into an itemised list*/
  const projectTechListItems = projectTechList.map((item) => (<li>{item}</li>));

  return (
    <article className='project-card'>
      <div className='project-card-top'>
        <div className='folder-icon'>Folder</div>
        <div className='project-links'>
          <div className='project-link'>External</div>
          <div className='project-link'>Github</div>
        </div>
          
      </div>
      <div className='project-card-tite'>
        <h2>{title}</h2>
      </div>
      <div className='project-card-description'>
        <p>
          A brief description of the code goes here
        </p>
      </div>
      <div className='project-card-bottom'>
        <ul className='project-card-tech-list'>
          {projectTechListItems}
        </ul>
      </div>
    </article>
  )
}

const Projects = (props) => {

  /** @type {ProjectCard[]} */
  const featuredProjects = featuredProjectsData.map((data, i) => {
    return (
      <ProjectCard
        key={i}
        title={data.title}
        desc={data.desc}
        projectTechList={data.tech}
        image={data.image}
        links={data.links}
      />
    )
  });

  return (
    <section>
      <br />
      <h1>Previous Projects</h1>
      <HeaderUnderline />
      <div className='projects-content'>
        <div className='projects-container'>
          {featuredProjects}
        </div>
      </div>
    </section>
  );
}

export default Projects;