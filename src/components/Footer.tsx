import { Stack, styled, Typography } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import { Box } from '@mui/system';
import sx from '@mui/system/sx';

const Footer: React.FC = ({ ...rest }) => {
  return (
    <StyledFooter {...rest}>
      <Stack spacing={1} alignItems='center' color="rgba(247, 247, 249, 0.35)">
        <Stack direction="row" spacing={1}>
          <Typography color="rgba(247, 247, 249, 0.35)">TOMMY HENG</Typography>
          <Typography color="var(--orange)">©2022</Typography>
        </Stack>
        <Stack direction="row" spacing={1}>
          <SocialIcon
            icon={<LinkedInIcon style={{fill: 'var(---white', fontSize:'2em'}}/>}
            link={'https://www.linkedin.com/in/tommy-seng-heng/'}
          />
          <SocialIcon
            icon={<GitHubIcon style={{fill: 'var(---white', fontSize:'2em'}}/>}
            link={'https://www.github.com/tomiyee'}
          />
        </Stack>
      </Stack>
    </StyledFooter>
  );
};

export default Footer;

const StyledFooter = styled('footer')({
  background: "var(--navy)",
  color: 'var(--white-darker)',
  height: '100px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '70px 0 50px 0',
  gap: '20px',
});

const SocialIcon: React.FC<{
  icon: JSX.Element;
  link: string;
}> = ({ icon, link, ...other }) => {
  return (
    <a
      href={link}
      style={{ color: 'inherit' }}
    >
      <StyledIcon {...other}>{icon}</StyledIcon>
    </a>
  );
};

const StyledIcon = styled(Box)(
  sx({
    'background': 'var(--navy-lighter)',
    'padding': '1em',
    'display': 'flex',
    'justifyContent': 'center',
    'alignItems': 'center',
    'transition': 'background-color 0.2s 0s',
    '&:hover': {
      background: 'var(--orange)',
    },
  })
);
