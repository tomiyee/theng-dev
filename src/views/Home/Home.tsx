import './Home.css';
import { Experience } from '../../components/Experience';
import { Projects } from '../../components/Projects';
import { HeaderUnderline } from '../../components/HeaderUnderline';
import profile from '../../assets/profile.jpg';

const Home: React.FC = () => {
  return (
    <main className="home-content">
      <AboutMe />
      <Experience />
      <Projects />
    </main>
  );
};

const AboutMe: React.FC = () => {
  return (
    <section id="about" className="about-me-section flex col">
      <h1>About Me</h1>
      <HeaderUnderline />
      <div className="about-me-content">
        <div className="about-me-description">
          <p>
            Hello! My name is Tommy Heng and I enjoy designing software with a
            positive community impact. My interest in web development started in
            2011, where I made a Khan Academy knock-off tailored for my middle
            school.
          </p>
          <p>
            Most recently, my projects have ranged from full-stack development
            on a visual programming platform, to designing web applications for
            start-ups, to even leading workshops on Conversational AI for local
            high school students.
          </p>
        </div>
        <div className="profile-pic-section">
          <div className="about-me-profile-container">
            <img src={profile} className="profile-pic" alt="it be me" />
            <div className="about-me-profile-inner"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
