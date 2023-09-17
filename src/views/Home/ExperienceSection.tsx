import { FC, useState } from 'react';
import HomePageSection from './HomePageSection';
import { Box, Tab, Tabs, Typography } from '@mui/material';
import TabPanel from '../../components/TabPanel';

enum ExperienceTabs {
  TUTOR,
  APP_INV,
  BBOT,
  STANFORD,
}

const ExperienceSection: FC = () => {
  const [activeTab, setActiveTab] = useState(ExperienceTabs.TUTOR);
  return (
    <HomePageSection title="Where I've Been">
      <Box display="flex" flexGrow={1} width="100%">
        <Tabs
          value={activeTab}
          onChange={(_, newTab) => setActiveTab(newTab)}
          orientation="vertical"
          sx={{ borderRight: 1, borderColor: 'divider' }}
        >
          <Tab value={ExperienceTabs.TUTOR} label="Tutor Intelligence Inc." />
          <Tab value={ExperienceTabs.APP_INV} label="MIT App Inventor" />
          <Tab value={ExperienceTabs.BBOT} label="BBot Inc." />
          <Tab value={ExperienceTabs.STANFORD} label="Stanford A.S.L." />
        </Tabs>
        <TabPanel value={activeTab} index={ExperienceTabs.TUTOR}>
          <Box>
            <Typography variant="h3">Lead UX Designer / Engineer</Typography>
            <Typography variant="subtitle1">
              @ Tutor Intelligence Inc.
            </Typography>
            <Typography variant="caption">June 2022 - Present</Typography>
            <ul>
              <li>Example 1</li>
              <li>Example 1</li>
              <li>Example 1</li>
            </ul>
          </Box>
        </TabPanel>
        <TabPanel value={activeTab} index={ExperienceTabs.APP_INV}>
          <Box>
            <Typography variant="h3">Engineering Researcher</Typography>
            <Typography variant="subtitle1">@ MIT App Inventor</Typography>
            <Typography variant="caption">September 2018 - May 2022</Typography>
            <ul>
              <li>
                Design a Conversational AI Interface for the visual programming
                platform MIT App Inventor
              </li>
              <li>
                Lead week-long workshops teaching 20+ local high school students
                computational thinking and conversational AI
              </li>
              <li>
                Trained and hosted a text-generating LSTM neural network with
                Tensorflow on a node.js web server
              </li>
              <li>
                Developed and pioneered a new curriculum for an abroad education
                initiative in Brazil
              </li>
            </ul>
          </Box>
        </TabPanel>
        <TabPanel value={activeTab} index={ExperienceTabs.BBOT}>
          <Box>
            <Typography variant="h3">Software Engineer Intern</Typography>
            <Typography variant="subtitle1">@ BBot Inc.</Typography>
            <Typography variant="caption">June - August 2021</Typography>
            <ul>
              <li>
                Redesigned web pages facilitating customer financial
                transactions in a React Native framework for a fast-paced
                in-venue ordering start-up; successfully pushed to production
              </li>
              <li>
                Developed a comprehensive front-end test suite with Cypress.io
                for performance-critical web pages
              </li>
              <li>
                Incorporated customer feedback into product features to improve
                user experience
              </li>
            </ul>
          </Box>
        </TabPanel>
        <TabPanel value={activeTab} index={ExperienceTabs.STANFORD}>
          <Box>
            <Typography variant="h3">Engineering Researcher</Typography>
            <Typography variant="subtitle1">
              @ Stanford Autonomous Systems Lab
            </Typography>
            <Typography variant="caption">June - July 2017</Typography>
            <ul>
              <li>
                Developed a time series forecasting model using an LSTM neural
                network for use in autonomous mobility simulations
              </li>
              <li>
                Defined a custom loss function which heavily penalized
                over-estimation to optimize model performance
              </li>
              <li>
                Implemented Dropout as a method of determining a probability
                distribution of the model’s predictions
              </li>
            </ul>
          </Box>
        </TabPanel>
      </Box>
    </HomePageSection>
  );
};

export default ExperienceSection;
