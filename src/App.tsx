import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import Routes from './routes';

import theme from './theme';

const App: React.FC = () => {
  const themes = createTheme(theme);
  return (
    <ThemeProvider theme={themes}>
      <CssBaseline />
      <Routes />
    </ThemeProvider>
  );
};
export default App;
