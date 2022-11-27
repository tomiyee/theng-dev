import { Link, styled } from '@mui/material';
import sx from '@mui/system/sx';

// assets
import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from '@mui/icons-material/Launch';
import YouTubeIcon from '@mui/icons-material/YouTube';

/** The icon to render */
export enum IconType {
  GITHUB,
  YOUTUBE,
  EXTERNAL,
}

/**
 * Renders the given icon that redirects to the given link when clicked
 */
const LinkIcon: React.FC<{
  icon: IconType;
  link: string;
}> = ({ icon, link, ...rest }) => (
  <Link underline="none" href={link} {...rest}>
    <IconWrapper>
      {icon === IconType.GITHUB && <GitHubIcon />}
      {icon === IconType.YOUTUBE && <YouTubeIcon />}
      {icon === IconType.EXTERNAL && <LaunchIcon />}
    </IconWrapper>
  </Link>
);

export default LinkIcon;

/** Makes the curser a pointer when hovered over */
const IconWrapper = styled('div')(
  sx({
    '&:hover': {
      cursor: 'pointer',
    },
  })
);
