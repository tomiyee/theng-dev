import AboutMeSection from './AboutMeSection';
import ContactMeSection from './ContactMeSection';
import ProjectsSection from './ProjectsSection';

const Home: React.FC = () => {
  return (
    <main>
      <AboutMeSection />
      <ProjectsSection />
      <ContactMeSection />
    </main>
  );
};

export default Home;
