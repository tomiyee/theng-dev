import { Box, Button, IconButton, Stack, Typography } from '@mui/material';
import HomePageSection from './HomePageSection';
import { PropsWithChildren } from 'react';
import appInventorImage from '../../assets/projects/app-inventor.png';
import tutorIntelligenceImage from '../../assets/projects/tutor-intelligence.png';
import conservationXLabsImage from '../../assets/projects/conservation-x-labs.png';
import { YouTube } from '@mui/icons-material';

const ProjectsSection: React.FC = () => {
  return (
    <HomePageSection
      title="Projects"
      subtitle="Here are some different projects I've worked on."
      id="projects"
    >
      <Stack spacing={3}>
        <ProjectSummary imageSrc={tutorIntelligenceImage}>
          <Typography variant="h5">Tutor Intelligence Inc.</Typography>
          <Typography variant="body1" py={2}>
            At Tutor Intelligence, I led the conceptual redesign to improve the
            accessibility of modern robotics technology for small and
            medium-sized businesses. By leveraging computer vision technology,
            we can maximize flexibility and improve the availability of
            automation technologies.
          </Typography>
        </ProjectSummary>

        <ProjectSummary imageSrc={appInventorImage}>
          <Typography variant="h5">
            MIT App Inventor
            <IconButton
              target="_blank"
              href="https://youtu.be/iXBDavQc29s?si=gLO9awtCWngQL1gq"
            >
              <YouTube />
            </IconButton>
          </Typography>
          <Typography variant="body1" py={2}>
            With MIT App Inventor, I designed and engineered a visual
            programming interface for building custom apps on conversational
            agents like Amazon Alexa. I also led workshops on AI and early
            language models for local middle and high-school students!
          </Typography>
        </ProjectSummary>

        <ProjectSummary imageSrc={conservationXLabsImage}>
          <Typography variant="h5">Conservation X. Labs</Typography>
          <Typography variant="body1" py={2}>
            At Conservation X. Labs, I developed and implemented the user
            interface for training and utilizing computer vision models for use
            in tracking the population of endangered species.
          </Typography>
        </ProjectSummary>
      </Stack>
    </HomePageSection>
  );
};
export default ProjectsSection;

type ProjectSummaryProps = PropsWithChildren<{
  /** Link to the case study for this project. */
  caseStudy?: string;
  imageSrc: string;
}>;

const ProjectSummary: React.FC<ProjectSummaryProps> = ({
  caseStudy,
  imageSrc,
  children,
}) => {
  return (
    <Stack direction={{ md: 'row' }} spacing={2} alignItems="center">
      <Box flex={1}>
        <img
          src={imageSrc}
          width="100%"
          style={{
            maxWidth: '500px',
            border: '1px solid black',
            borderRadius: '6px',
          }}
        />
      </Box>
      <Stack flex={1}>
        <Box>{children}</Box>
        {caseStudy !== undefined && (
          <Button variant="contained" href={caseStudy}>
            Case Study
          </Button>
        )}
      </Stack>
    </Stack>
  );
};
