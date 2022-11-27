import React, { useState } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { HeaderUnderline } from '../HeaderUnderline';
import './Experience.css';
import { Box, styled } from '@mui/system';

import experiences from '../../assets/experienceData';
import { Typography } from '@mui/material';

interface TabPanelProps<T> {
  children?: React.ReactNode | React.ReactNode[];
  /** The value of the panel to display */
  index: T;
  /** The value of this panel */
  value: T;
}

const Experience: React.FC = ({ ...rest }) => {
  const [currentTab, setCurrentTab] = useState(0);
  return (
    <section id="experience" className="experience-section" {...rest}>
      <div className="experience-content">
        <h1>Where I&apos;ve Been</h1>
        <HeaderUnderline />
        {/* The Experience Table */}
        <div className="experience-viewer">
          {/* The List of Tabs on the Left */}
          <Tabs
            value={currentTab}
            onChange={(_, newTab) => setCurrentTab(newTab)}
            orientation="vertical"
            style={{ width: '100%' }}
          >
            <Tab className="experience-tab" label="MIT App Inventor" />
            <Tab className="experience-tab" label="BBot Inc." />
            <Tab className="experience-tab" label="Stanford ASL" />
            <Tab className="experience-tab" label="Breakthrough SV" />
          </Tabs>

          {/* The Description of the Experience on the right */}
          {experiences.map((experience, i) => (
            <TabPanel value={currentTab} index={i} key={i}>
              <ExperienceTab {...experience} />
            </TabPanel>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;

const ExperienceTab: React.FC<{
  /** The position held at the role */
  position: string;
  /** The location of the experience */
  location: string;
  /** The period of time for the experience */
  time: string;
  /** A list of each bullet point */
  desc: string[];
}> = ({ position, location, time, desc, ...rest }) => {
  return (
    <Box {...rest}>
      <Typography variant='h5'>
        <span className="color-navy">{position}</span>
      </Typography>
        <span className="color-teal">{` @ ${location}`}</span>
      <p className="experience-range">{time}</p>
      <ExpDesc>
        {desc.map((line, i) => (
          <li key={`exp-line-${i}`}><Typography>{line}</Typography></li>
        ))}
      </ExpDesc>
    </Box>
  );
};

/**
 * A Helper Component for rendering pages of a MUI Tab
 *
 * @see https://mui.com/material-ui/react-tabs/
 */
const TabPanel = <T extends unknown>({
  children,
  value,
  index,
  ...other
}: TabPanelProps<T>) => (
  <StyledTabContainer
    role="tabpanel"
    hidden={value !== index}
    className="tabpanel"
    {...other}
  >
    {value === index && children}
  </StyledTabContainer>
);

const StyledTabContainer = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  padding: '0 20px',
});

const ExpDesc = styled('ul')({
  color: 'rgb(107, 107, 107)',
  fontSize: '14px',
  textAlign: 'left',
});