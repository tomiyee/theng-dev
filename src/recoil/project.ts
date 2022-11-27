import { atom } from 'recoil';
import { ProjectData } from '../types';

import projectData from '../assets/projectData';

const projectsAtom = atom({
  key: 'projects',
  default: projectData as ProjectData[],
});
export default projectsAtom;
