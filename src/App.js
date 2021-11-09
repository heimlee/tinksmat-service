import React from 'react'
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import { Main } from './screens/Main/Main';

function App() {
  const theme = createTheme({
    typography: {
      fontFamily: [
        '-apple-system',
        'Ubuntu',
        'Open Sans',
        'sans-serif',
      ].join(','),
    },
    palette: {
      background: {
        default: "#F5F7F6"
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <Main />
    </ThemeProvider>
  );
}

export default App;
