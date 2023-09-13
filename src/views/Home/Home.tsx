import './Home.css';
import { Experience } from '../../components/Experience';
import { Projects } from '../../components/Projects';
import AboutMeSection from './AboutMeSection';

const Home: React.FC = () => {
  return (
    <main className="home-content">
      <AboutMeSection />
      <Experience />
      <Projects />
    </main>
  );
};

export default Home;
