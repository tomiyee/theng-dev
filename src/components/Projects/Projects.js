import './Projects.js';

const ProjectCard = (props) => {
  const projectTechList = ['Vue.js', 'MongoDB'];
  /** @type {JSX.Element[]} Converts the list of project tech into an itemised list*/
  const projectTechListItems = projectTechList.map((item) => (<li>{item}</li>));

  return (
    <article className='project-card'>
      <div className='project-card-top'>
        Insert Icon and external links here
      </div>
      <div className='project-card-tite'>
        <h2>Project Card</h2>
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
  const featuredProjects = [
    <ProjectCard key='1'/>,
    <ProjectCard key='2'/>,
    <ProjectCard key='3'/>
  ];
  return (
    <section>
      <h1>Previous Projects</h1>
      {featuredProjects}
    </section>
  );
}

export default Projects;