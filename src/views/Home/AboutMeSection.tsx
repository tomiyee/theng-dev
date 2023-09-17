import { Box, Chip, Grid, Typography, styled } from '@mui/material';
import profile from '../../assets/profile.jpg';
import { FC } from 'react';
import HomePageSection from './HomePageSection';

const AboutMeSection: FC = () => {
  return (
    <HomePageSection title="About Me">
      <Grid container>
        <Grid item xs={12} md={6}>
          <Typography variant="h3" pb={2}>
            Get to know me!
          </Typography>
          <Typography variant="body1">
            I am a <strong>UX Designer</strong> and{' '}
            <strong>Full-Stack Engineer</strong> with a backgrond in crafting
            user-centric digital experiences and a passion for accessible
            design. My mission is to make technology accessible, and I thrive on
            the challenge of blending cutting-edge technology with intuitive
            design.
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box m="auto">
            <Portrait />
          </Box>
          <Typography variant="h3" pb={2}>
            My Skills
          </Typography>

          <Box display="flex" flexWrap="wrap" gap={1}>
            <StyledChip label="HTML" />
            <StyledChip label="CSS" />
            <StyledChip label="Javascript" />
            <StyledChip label="React.js" />
            <StyledChip label="GitHub" />
            <StyledChip label="Terminal" />
            <StyledChip label="Python" />
          </Box>
        </Grid>
      </Grid>
    </HomePageSection>
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
  marginBottom: '20px',
  marginRight: '20px',
  position: 'relative',
  boxSizing: 'border-box',
  zIndex: '0',
});

const PortraitRing = styled('div')(({ theme }) => ({
  width: '100%',
  height: '100%',
  position: 'absolute',
  border: `4px solid ${theme.palette.secondary.main}`,
  borderRadius: '5px',
  top: '20px',
  left: '20px',
  zIndex: '-1',
  boxSizing: 'border-box',
}));

const PortraitImage = styled('img')({
  zIndex: '0',
  borderRadius: '5px',
  width: '100%',
});

const StyledChip = styled(Chip)({
  borderRadius: '4px',
  padding: '0.7rem',
  height: 'unset',
});
