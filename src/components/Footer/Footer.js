import './Footer.css';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

/**
 *
 * @param {Object} props
 * @param {JSX.Element} props.icon - The icon
 * @param {string} props.link
 * @returns
 */
const SocialIcon = (props) => {
  const { icon, link, ...other } = props;

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

const Footer = (props) => {
  const { ...other } = props;
  const icons = (
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
  );
  const info = (
    <div className="footnote">
      TOMMY HENG <span style={{ color: 'var(--orange)' }}>©2021</span>
    </div>
  );
  return (
    <footer {...other}>
      {icons}
      {info}
    </footer>
  );
};

export default Footer;
