'use client';

import './Footer.css';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import { FC } from 'react';

const SocialIcon: FC<{
  icon: JSX.Element;
  link: string;
}> = ({ icon, link, ...other }) => {
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

const Footer = ({ ...other }) => {
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
      <div className="footnote">
        TOMMY HENG<span style={{ color: 'var(--orange)' }}>©2021</span>
      </div>
    </footer>
  );
};

export default Footer;
