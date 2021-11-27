
import { useState } from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import './Experience.css';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      style={{display: value !== index ? 'none': 'block'}}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      className='tabpanel'
      {...other}
    >
      {value === index && (
        <Typography style={{'text-align': 'left'}}>{children}</Typography>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

const Experience = (props) => {

  const { ...other } = props;

  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <section className='experience-section' {...other}>
      <div className='experience-content'>
        <h1>Where I've worked</h1>
        {/* The Experience Table */}
        <div className='experience-viewer'>
          {/* The List of Tabs on the Left */}
          <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" orientation='vertical' style={{'width':'100%'}}>
            <Tab className='experience-tab' label='MIT App Inventor' />
            <Tab className='experience-tab' label='BBot Inc.' />
            <Tab className='experience-tab' label='Stanford ASL' />
          </Tabs>
          {/* The Description of the Experience on the right */}

          <TabPanel value={value} index={0}>
            <h3>
              <span className='color-navy'>Engineering Researcher</span> 
              <span className='color-teal'> @ MIT App Inventor</span>
            </h3>
            <p className='experience-range'>September 2018 - Present</p>
            <ul className='color-navy'>
              <li>Design a Conversational AI Interface for the visual programming platform MIT App Inventor</li>
              <li>Lead week-long workshops teaching 20+ local high school students computational
thinking and conversational AI</li>
              <li>Trained and hosted a text-generating LSTM neural network with Tensorflow on a node.js web server</li>
              <li>Developed and pioneered a new curriculum for an abroad education initiative in Brazil</li>
            </ul>
          </TabPanel>
          
          <TabPanel value={value} index={1}>
            <h3>
                <span className='color-navy'>Software Engineer Intern</span> 
                <span className='color-teal'> @ BBot Inc.</span>
            </h3>
            <p className='experience-range'>June 2021 - August 2021</p>
            <ul>
              <li>Redesigned web pages facilitating customer financial transactions in a React Native framework for a
fast-paced in-venue ordering start-up; successfully pushed to production</li>
              <li>Developed a comprehensive front-end test suite with Cypress.io for performance-critical web pages</li>
              <li>Incorporated customer feedback into product features to improve user experience</li>
            </ul>
          </TabPanel>
          
          <TabPanel value={value} index={2}>
            <h3>
                <span className='color-navy'>Engineering Researcher</span> 
                <span className='color-teal'> @ Stanford Autonomous Systems Lab</span>
            </h3>
            <p className='experience-range'>June 2017 - July 2017</p>
            <ul>
              <li>Developed a time series forecasting model using an LSTM neural network for use in autonomous mobility
simulations</li>
              <li>Defined a custom loss function which heavily penalized over-estimation to optimize model performance</li>
              <li>Implemented Dropout as a method of determining a probability distribution of the model’s predictions</li>
            </ul>
          </TabPanel>
        </div>
      </div>
    </section>
  )
}

export default Experience;