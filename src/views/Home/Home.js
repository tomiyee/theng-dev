import './Home.css';
import { Experience } from '../../components/Experience';
import { Projects } from '../../components/Projects';
import profile from '../../assets/profile.jpg'



const Home = (props) => {
  return (
    <div>
      <main className='home-content'>
        <h1>Home</h1>
        <AboutMe/>
        <Experience/>
        <Projects/>
      </main>
    </div>
    
  );
};

const AboutMe = (props) => {
  return (
    <section className='about-me-section'>
      <div className='about-me-content'>
        <div className='about-me-description'>
          <p>
            Hello! My name is Tommy Heng and I enjoy developing solutions to challenges faced by members of my 
            community. My interest in web development started in 2011, where my mission was to develop a 
            Khan Academy knock-off tailored to my middle school. This sparked my interest in problem-solving
            and designing software with an impact.
          </p>
          <p>
            Most recently, my projects have ranged from full-stack development on a visual programming platform, to
            designing web applications for start-ups, to even leading workshops on Conversational AI for local 
            high school students. Whether its delivering quality work behind the desk or speaking with clients 
            directly, I guarantee you will get nothing but my best. 
          </p>
        </div>
        <div className='about-me-profile-container'>
            <img src={profile} className='profile-pic' alt='it be me'/>
          <div className='about-me-profile-inner'>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home;