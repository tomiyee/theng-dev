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

enum LinkType {
  EXTERNAL = 'external',
  GITHUB = 'github',
  YOUTUBE = 'youtube',
}

const linkToIcon: Record<LinkType, React.ReactNode> = {
  [LinkType.EXTERNAL]: <LaunchIcon />,
  [LinkType.GITHUB]: <GitHubIcon />,
  [LinkType.YOUTUBE]: <YouTubeIcon />,
};

interface ArchiveItemProps {
  projectData: ProjectData;
}

const ArchiveItem: React.FC<ArchiveItemProps> = ({ projectData }) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { title, desc, date, tech, links } = projectData;

  return (
    <Card sx={{ flex: 1, minWidth: 300 }}>
      <CardHeader title={<Typography>{title}</Typography>} />
      <CardContent>
        <Typography>{desc}</Typography>
      </CardContent>
      <CardActions disableSpacing>
        {links.map((linkData, i) => (
          <Link href={linkData[1]} key={`${title}-link-${i}`}>
            <IconButton>{linkToIcon[linkData[0] as LinkType]}</IconButton>
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
