import { ExperienceData } from '../types';

const experiences: ExperienceData[] = [
  {
    position: 'Engineering Researcher',
    location: 'MIT App Inventor',
    time: 'September 2018 - Present',
    desc: [
      'Design a Conversational AI Interface for the visual programming platform MIT App Inventor',
      'Lead week-long workshops teaching 20+ local high school students computational thinking and conversational AI',

      'Trained and hosted a text-generating LSTM neural network with Tensorflow on a node.js web server',

      'Developed and pioneered a new curriculum for an abroad education initiative in Brazil',
    ],
  },
  {
    position: 'Software Engineer Intern',
    location: 'BBot Inc.',
    time: 'June - August 2021',
    desc: [
      'Redesigned web pages facilitating customer financial transactions in a React Native framework for an in-venue ordering start-up; successfully pushed to production',
      'Developed a comprehensive front-end test suite with Cypress.io for performance-critical web pages',
      'Incorporated customer feedback into product features to improve user experience',
    ],
  },
  {
    position: 'Engineering Researcher',
    location: 'Stanford Autonomous Systems Lab',
    time: 'June - July 2017',
    desc: [
      'Developed a time series forecasting model using an LSTM neural network for autonomous mobility simulations',
      'Defined a custom loss function which heavily penalized over-estimation to optimize model performance',
      "Implemented Dropout as a method of determining a probability distribution of the model's predictions",
    ],
  },
  {
    position: 'Computer Science Teaching Assistant',
    location: 'Breakthrough SV',
    time: 'June 2018',
    desc: [
      'Coached high school students on video game development in Unity',
      'Tracked student outcome data and compiled reports for the on-site administrative team',
    ],
  },
  // {
  //     position: "",
  //     location: "",
  //     time: "",
  //     desc: [
  //         "",
  //         "",
  //         "",
  //       ]
  // },
];

export default experiences;
