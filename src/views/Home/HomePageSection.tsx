import { Box, Stack, StackProps, Typography, styled } from '@mui/material';
import { PropsWithChildren } from 'react';

interface HomePageSectionProps {
  title: string;
  stackProps?: StackProps;
}

const HomePageSection: React.FC<PropsWithChildren<HomePageSectionProps>> = ({
  children,
  title,
  stackProps,
}) => {
  return (
    <Box width="100%">
      <Stack
        component="section"
        alignItems="center"
        maxWidth="lg"
        p={6}
        m="auto"
        {...stackProps}
      >
        <Typography variant="h2" textTransform={'uppercase'} mb="3.5rem">
          <StyledSectionHeader>{title}</StyledSectionHeader>
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
