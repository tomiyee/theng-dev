import { PropsWithChildren, useState } from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import { HeaderUnderline } from '../HeaderUnderline';
import './Experience.css';

interface TabPanelProps {
  /** The value of this panel */
  index: number;
  /** The value of the active panel */
  value: number;
}

const TabPanel: React.FC<PropsWithChildren<TabPanelProps>> = ({
  children,
  value,
  index,
  ...other
}) => {
  return (
    <div
      role="tabpanel"
      style={{ display: value !== index ? 'none' : 'block' }}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      className="tabpanel"
      {...other}
    >
      {value === index && (
        <Typography style={{ textAlign: 'left' }}>{children}</Typography>
      )}
    </div>
  );
};

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

const Experience: React.FC = () => {
  const [currentTab, setCurrentTab] = useState(0);
  return (
    <section id="experience" className="experience-section">
      <div className="experience-content">
        <h1>Where I&apos;ve Been</h1>
        <HeaderUnderline />
        {/* The Experience Table */}
        <div className="experience-viewer">
          {/* The List of Tabs on the Left */}
          <Tabs
            value={currentTab}
            onChange={(_, newTab) => setCurrentTab(newTab)}
            aria-label="basic tabs example"
            orientation="vertical"
            style={{ width: '100%' }}
          >
            <Tab className="experience-tab" label="MIT App Inventor" />
            <Tab className="experience-tab" label="BBot Inc." />
            <Tab className="experience-tab" label="Stanford ASL" />
            <Tab className="experience-tab" label="Breakthrough SV" />
          </Tabs>
          {/* The Description of the Experience on the right */}

          <TabPanel value={currentTab} index={0}>
            <h3 className="experience-title">
              <span className="color-navy">Engineering Researcher</span>
              <span className="color-teal"> @ MIT App Inventor</span>
            </h3>
            <p className="experience-range">September 2018 - Present</p>
            <ul className="experience-description">
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
          </TabPanel>

          <TabPanel value={currentTab} index={1}>
            <h3 className="experience-title">
              <span className="color-navy">Software Engineer Intern</span>
              <span className="color-teal"> @ BBot Inc.</span>
            </h3>
            <p className="experience-range">June - August 2021</p>
            <ul className="experience-description">
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
          </TabPanel>

          <TabPanel value={currentTab} index={2}>
            <h3 className="experience-title">
              <span className="color-navy">Engineering Researcher</span>
              <span className="color-teal">
                {' '}
                @ Stanford Autonomous Systems Lab
              </span>
            </h3>
            <p className="experience-range">June - July 2017</p>
            <ul className="experience-description">
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
          </TabPanel>

          <TabPanel value={currentTab} index={3}>
            <h3 className="experience-title">
              <span className="color-navy">
                Computer Science Teaching Assistant
              </span>
              <span className="color-teal"> @ Breakthrough SV</span>
            </h3>
            <p className="experience-range">June 2018</p>
            <ul className="experience-description">
              <li>
                Coached high school students on video game development in Unity
              </li>
              <li>
                Tracked student outcome data and compiled reports for the
                on-site administrative team
              </li>
            </ul>
          </TabPanel>
        </div>
      </div>
    </section>
  );
};

export default Experience;
