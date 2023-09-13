import './Footer.css';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import { Tooltip } from '@mui/material';
import { FC } from 'react';

interface SocialIconProps {
  icon: React.ReactNode;
  link: string;
}

const SocialIcon: React.FC<SocialIconProps> = ({ icon, link, ...other }) => {
  return (
    <a
      href={link}
      style={{ color: 'inherit' }}
      target="_blank"
      rel="noreferrer"
    >
      <div className={'social-icon'} {...other}>
        {icon}
      </div>
    </a>
  );
};

const Footer: FC = ({ ...other }) => {
  return (
    <footer {...other}>
      <div className="icons">
        <SocialIcon
          icon={<LinkedInIcon className={'footer-icon'} />}
          link={'https://www.linkedin.com/in/tommy-seng-heng/'}
        />
        <SocialIcon
          icon={<GitHubIcon className={'footer-icon'} />}
          link={'https://www.github.com/tomiyee'}
        />
      </div>
      <Tooltip title="Now with Vite.js">
        <div className="footnote">
          TOMMY HENG <span style={{ color: 'var(--orange)' }}>©2023</span>
        </div>
      </Tooltip>
    </footer>
  );
};

export default Footer;