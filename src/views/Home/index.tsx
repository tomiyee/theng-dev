import './Home.css';
import { Experience } from '../../components/Experience';
import { Projects } from '../../components/Projects';
import HeaderUnderline from '../../components/HeaderUnderline';
import profile from '../../assets/profile.jpg';
import { styled, useTheme } from '@mui/material/styles';
import { Box, Stack, Typography, useMediaQuery } from '@mui/material';

const Home: React.FC = () => (
  <main className="home-content">
    <AboutMe />
    <Experience />
    <Projects />
  </main>
);

const AboutMe: React.FC = () => {
  const theme = useTheme();
  const matchDownSm = useMediaQuery(theme.breakpoints.down('sm'));
  return (
    <Stack component={'section'} alignItems="center" maxWidth={'var(--max-content-width)'}>
      <h1>About Me</h1>
      <HeaderUnderline/>
      <AboutMeStack direction={matchDownSm ? 'column' : 'row'} spacing={4}>
        <Stack textAlign={'justify'} spacing={2}>
          <Typography>
            Hello! My name is Tommy Heng and I enjoy designing software with a
            positive community impact. My interest in web development started in
            2011, where I made a Khan Academy knock-off tailored for my middle
            school.
          </Typography>
          <Typography>
            Most recently, my projects have ranged from full-stack development on
            a visual programming platform, to designing web applications for
            start-ups, to even leading workshops on Conversational AI for local
            high school students.
          </Typography>
        </Stack>
        <Box display="flex" justifyContent="center">
          <ProfilePicContainer>
            <ProfilePic src={profile} alt="it be me" />
            <ProfilePicInner />
          </ProfilePicContainer>
        </Box>
      </AboutMeStack>
    </Stack>
  );
};

export default Home;

/** The styled Profile Picture component */
const ProfilePic = styled('img')({
  zIndex: '0',
  borderRadius: '5px',
  width: '100%',
});

const ProfilePicInner = styled('div')({
  width: '100%',
  height: '100%',
  position: 'absolute',
  border: '4px solid var(--teal)',
  borderRadius: '5px',
  top: '20px',
  left: '20px',
  zIndex: -1,
  boxSizing: 'border-box',
});

const ProfilePicContainer = styled('div')({
  height: '250px',
  width: '250px',
  position: 'relative',
  boxSizing: 'border-box',
  zIndex: '0',
});

const AboutMeStack = styled(Stack)({
  maxWidth: 'var(--max-content-width)',
  padding: '0px 40px',
})