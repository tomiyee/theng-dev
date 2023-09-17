import {
  BottomNavigation,
  IconButton,
  Stack,
  Typography,
  styled,
} from '@mui/material';
import { FC } from 'react';
import { GitHub, LinkedIn } from '@mui/icons-material';

const Footer: FC = () => {
  return (
    <StyledFooter>
      <Stack spacing={1} alignItems="center">
        <Stack direction="row" spacing={2}>
          <StyledIconButton
            aria-label="LinkedIn.com"
            onClick={() =>
              window.open('https://www.linkedin.com/in/tommy-seng-heng/')
            }
          >
            <LinkedIn />
          </StyledIconButton>
          <StyledIconButton
            aria-label="GitHub.com"
            onClick={() => window.open('https://www.github.com/tomiyee')}
          >
            <GitHub />
          </StyledIconButton>
        </Stack>

        <Typography>
          TOMMY HENG{' '}
          <Typography component="span" color="secondary.light">
            ©2023
          </Typography>
        </Typography>
      </Stack>
    </StyledFooter>
  );
};

export default Footer;

const StyledFooter = styled(BottomNavigation)(({ theme }) => ({
  background: theme.palette.primary.main,
  color: theme.palette.grey[50],
  height: '120px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}));

const StyledIconButton = styled(IconButton)(({ theme }) => ({
  transition: 'background-color 0.2s 0s',
  borderRadius: '0.5rem',
  background: theme.palette.secondary.light,
  '&:hover': {
    background: theme.palette.error.main,
  },
}));
