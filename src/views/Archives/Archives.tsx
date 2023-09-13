import GitHubIcon from '@mui/icons-material/GitHub';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LaunchIcon from '@mui/icons-material/Launch';

import projects from '../../assets/project-data.json';
import {
  Card,
  CardActions,
  CardContent,
  CardHeader,
  IconButton,
  Link,
  Typography,
} from '@mui/material';
import DynamicGrid from '../../components/DynamicGrid';

type ProjectData = (typeof projects)[0];

const linkIcons = new Map([
  ['external', <LaunchIcon />],
  ['github', <GitHubIcon />],
  ['youtube', <YouTubeIcon />],
]);

interface ArchiveItemProps {
  projectData: ProjectData;
}

const ArchiveItem: React.FC<ArchiveItemProps> = ({ projectData }) => {
  const { title, desc, date, tech, links } = projectData;

  return (
    <Card sx={{ flex: 1, minWidth: 300 }}>
      <CardHeader title={<Typography>{title}</Typography>} />
      <CardContent>
        <Typography>{desc}</Typography>
      </CardContent>
      <CardActions disableSpacing>
        {links.map((linkData, i) => (
          <Link href={linkData[1]}>
            <IconButton key={`${title}-link-${i}`}>
              {linkIcons.get(linkData[0])}
            </IconButton>
          </Link>
        ))}
      </CardActions>
    </Card>
  );
};

const Archives = () => {
  return (
    <main>
      <h1>Archives</h1>
      <DynamicGrid spacing={2} elementWidth={300}>
        {projects.map((projectData, i) => (
          <ArchiveItem projectData={projectData} key={i} />
        ))}
      </DynamicGrid>
    </main>
  );
};

export default Archives;
