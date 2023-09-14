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
    fontFamily: 'Raleway, "Arial", sans-serif',
    fontWeightRegular: 500,
    fontWeightMedium: 600,
    fontWeightLight: 400,
  },
};

export default themeOptions;
