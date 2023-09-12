import GitHubIcon from '@mui/icons-material/GitHub';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LaunchIcon from '@mui/icons-material/Launch';

export enum LinkType {
  EXTERNAL = 'external',
  GITHUB = 'github',
  YOUTUBE = 'youtube',
}

export const linkToIcon: Record<LinkType, React.ReactNode> = {
  [LinkType.EXTERNAL]: <LaunchIcon />,
  [LinkType.GITHUB]: <GitHubIcon />,
  [LinkType.YOUTUBE]: <YouTubeIcon />,
};
