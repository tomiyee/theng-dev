import { IconType } from '../components/LinkIcon';
import { ProjectData } from '../types';

const projectData: ProjectData[] = [
  {
    featured: false,
    title: 'Dynamic Infrared QR Display',
    desc: 'A compact, dynamic infrared LED array display integrated with sensors to display information while minimizing impact on aesthetic and form factor.',
    date: 'Fall 2021',
    image: '',
    tech: ['Electrical Engineering', 'Computer Vision', 'Sensor'],
    links: [[IconType.YOUTUBE, 'https://youtu.be/ckIjf2aLymU']],
  },
  {
    featured: true,
    title: 'MIT Conversational AI Interface',
    desc: 'A visual programming interace for conversational agents like Amazon Alexa. A video demonstration is linked above.',
    date: 'Fall 2018 - Fall 2021',
    image: '',
    tech: ['GWT', 'AWS', 'Node.js'],
    links: [[IconType.YOUTUBE, 'https://youtu.be/_D8v3H71074']],
  },
  {
    featured: true,
    title: 'Project Veritas',
    desc: 'An web-application for public accountability of police brutality. Users submit reports and provide details on a map UI.',
    date: 'Fall 2021',
    image: '',
    tech: ['Vue.js', 'Node.js', 'MongoDB', 'RESTful API', 'Vuetify'],
    links: [[IconType.YOUTUBE, 'https://youtu.be/-L5ccHFRU3s']],
  },
  {
    featured: true,
    title: 'Tetris AI Interface',
    desc: 'A platform for testing and comparing the performance between different Tetris AI.',
    date: 'Summer 2021',
    image: '',
    tech: ['Python3', 'Tensorflow'],
    links: [[IconType.GITHUB, 'https://github.com/tomiyee/tetris-python']],
  },
  {
    featured: true,
    title: 'Composer Similarity Ranker',
    desc: "A computational music theory project. Compares the chord progression in a song to the patterns of a known composer. A larger number is given if the song closely matches the composer's music style.",
    date: 'Spring 2020',
    image: '',
    tech: ['Python', 'Computational Music Theory', 'Data Science'],
    links: [
      [
        IconType.GITHUB,
        'https://github.com/tomiyee/music21-conventional-progressions',
      ],
    ],
  },
  {
    featured: false,
    title: 'Minecraft Beeps in Pain',
    desc: 'An integration between a Minecraft Server and ESP32 - Speaker device that alerts the user whenever their character is taking damage.',
    date: 'Summer 2020',
    image: '',
    tech: ['Java', 'Node.js', 'Minecraft', 'Raspberry Pi', 'ESP32'],
    links: [[IconType.YOUTUBE, 'https://youtu.be/gWROjQkrfDo']],
  },
  {
    featured: true,
    title: 'Author AI',
    desc: 'A text-generation AI hosted on a web server, which generates text in the style of different authors or book series like Dr. Seuss or Harry Potter.',
    date: 'Fall 2018',
    image: '',
    tech: ['Python3', 'Tensorflow', 'NLP', 'AI'],
    links: [],
  },
];
export default projectData;
