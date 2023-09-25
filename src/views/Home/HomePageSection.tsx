import {
  Box,
  BoxProps,
  Stack,
  StackProps,
  Typography,
  styled,
} from '@mui/material';
import { PropsWithChildren } from 'react';

interface HomePageSectionProps {
  title: string;
  subtitle?: string;
  stackProps?: StackProps;
  id?: string;
  componentProps?: BoxProps;
  /** Renders with light font */
  light?: boolean;
}

const HomePageSection: React.FC<PropsWithChildren<HomePageSectionProps>> = ({
  children,
  title,
  subtitle,
  id,
  light,
  stackProps,
  componentProps,
}) => {
  return (
    <Box width="100%" id={id} pt={4} {...componentProps}>
      <Stack
        component="section"
        alignItems="center"
        maxWidth="lg"
        p={6}
        m="auto"
        {...stackProps}
      >
        <Typography
          variant="h2"
          textTransform={'uppercase'}
          mb="3.5rem"
          color={light ? 'white' : undefined}
        >
          <StyledSectionHeader>{title}</StyledSectionHeader>
        </Typography>
        <Typography
          variant="body2"
          pb="2rem"
          textAlign="center"
          color={light ? 'white' : undefined}
        >
          {subtitle}
        </Typography>
        {children}
      </Stack>
    </Box>
  );
};

export default HomePageSection;

const StyledSectionHeader = styled('span')(({ theme }) => ({
  position: 'relative',
  '&::after': {
    position: 'absolute',
    content: "''",
    width: '3rem',
    height: '5px',
    borderRadius: '5px',
    top: 'calc(100% + 1rem)',
    left: '50%',
    transform: 'translateX(-50%)',
    background: theme.palette.secondary.main,
  },
}));
