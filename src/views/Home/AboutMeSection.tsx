import { Box, Stack, Typography, styled } from '@mui/material';
import profile from '../../assets/profile.jpg';
import { FC } from 'react';

const AboutMeSection: FC = () => {
  return (
    <Stack component="section" alignItems="center" maxWidth="lg" p={6}>
      <Typography variant="h2">About Me</Typography>
      <Stack
        alignItems="center"
        direction={{ xs: 'column-reverse', md: 'row' }}
        spacing={2}
      >
        <Box>
          <Typography variant="body1">
            Hello! My name is Tommy Heng and I enjoy designing software with a
            positive community impact. My interest in web development started in
            2011, where I made a Khan Academy knock-off tailored for my middle
            school.
          </Typography>
          <Typography variant="body1">
            Most recently, my projects have ranged from full-stack development
            on a visual programming platform, to designing web applications for
            start-ups, to even leading workshops on Conversational AI for local
            high school students.
          </Typography>
        </Box>
        <Portrait />
      </Stack>
    </Stack>
  );
};
export default AboutMeSection;

const Portrait: FC = () => {
  return (
    <div className="profile-pic-section">
      <PortraitContainer>
        <PortraitImage src={profile} alt="it be me" />
        <PortraitRing />
      </PortraitContainer>
    </div>
  );
};

const PortraitContainer = styled('div')({
  height: '250px',
  width: '250px',
  position: 'relative',
  boxSizing: 'border-box',
  zIndex: '0',
});

const PortraitRing = styled('div')({
  width: '100%',
  height: '100%',
  position: 'absolute',
  border: '4px solid var(--teal)',
  borderRadius: '5px',
  top: '20px',
  left: '20px',
  zIndex: '-1',
  boxSizing: 'border-box',
});

const PortraitImage = styled('img')({
  zIndex: '0',
  borderRadius: '5px',
  width: '100%',
});
