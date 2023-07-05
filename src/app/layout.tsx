import { Typography } from '@mui/material';

export const metadata = {
  title: 'Tom Heng',
  description: 'Personal Website and Portfolio',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Typography>Hello</Typography>
        {children}
      </body>
    </html>
  );
}

import { ThemeOptions } from '@mui/material/styles';

export const themeOptions: ThemeOptions = {
  palette: {
    mode: 'light',
    primary: {
      main: '#383c56',
    },
    secondary: {
      main: '#97dffc',
    },
    error: {
      main: '#b15e6c',
    },
  },
};
