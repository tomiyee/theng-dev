import { Projects } from '../../components/Projects';
import AboutMeSection from './AboutMeSection';
import ExperienceSection from './ExperienceSection';
import { styled } from '@mui/material';

const Home: React.FC = () => {
  return (
    <Main>
      <AboutMeSection />
      <ExperienceSection />
      <Projects />
    </Main>
  );
};

export default Home;

const Main = styled('main')(({ theme }) => ({
  '&>*:nth-child(even)': {
    backgroundColor: theme.palette.grey[200],
  },
}));
