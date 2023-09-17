import { ThemeOptions } from '@mui/material/styles';

const themeOptions: ThemeOptions = {
  palette: {
    mode: 'light',
    primary: {
      main: '#32354d',
    },
    secondary: {
      main: '#027BCE',
    },
    error: {
      main: '#b15e6c',
    },
  },
  typography: {
    // fontFamily: '"Raleway",sans-serif',
    fontFamily: 'sans-serif',
    fontWeightRegular: 500,
    fontWeightMedium: 600,
    fontWeightLight: 400,
    fontSize: 16,
    h1: {
      fontSize: '3rem',
      fontWeight: 600,
    },
    h2: {
      fontSize: '2.6rem',
      fontWeight: 600,
    },
    h3: {
      fontSize: '2.2rem',
      fontWeight: 600,
    },
    h5: {
      fontWeight: 600,
    },
    h4: {
      fontWeight: 600,
      fontSize: '1.9rem',
    },
  },
};

export default themeOptions;
