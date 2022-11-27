import { IconType } from './components/LinkIcon';

/** Information for a single project */
export type ProjectData = {
  /** If true, shown on the vertical timeline on the dashboard */
  featured: boolean;
  /** The rendered title of the card */
  title: string;
  /** A few sentences describing the project */
  desc: string;
  /** The date of the project data */
  date: string;
  /** The src for the image to show for the project */
  image: string;
  /** A list of the technical or skills demonstrated in this project */
  tech: string[];
  /** A list of icons and the link to redirect to */
  links: [IconType, string][];
};

/** Information for a work experience */
export type ExperienceData = {
  /** The position held at the experience */
  position: string;
  /** The location of the experience */
  location: string;
  /** The period of time for the experience in text */
  time: string;
  /** A list of bullet point lines in the description */
  desc: string[];
};
