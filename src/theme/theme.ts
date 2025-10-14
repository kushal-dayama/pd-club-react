import { createTheme, type ThemeOptions } from '@mui/material/styles';

export const getTheme = (mode: 'light' | 'dark') => {
  const themeOptions: ThemeOptions = {
    palette: {
      mode,
      primary: {
        main: '#86B817',
        light: '#a1cc3a',
        dark: '#5e8010',
      },
      secondary: {
        main: '#4CAF50',
      },
      background: {
        default: mode === 'dark' ? '#121212' : '#ffffff',
        paper: mode === 'dark' ? '#1e1e1e' : '#f8f9fa',
      },
    },
    typography: {
      fontFamily: '"Jost", "Open Sans", sans-serif',
      h1: {
        fontWeight: 700,
        fontSize: '3.5rem',
        '@media (max-width:600px)': {
          fontSize: '2rem',
        },
      },
      h2: {
        fontWeight: 700,
        fontSize: '2.5rem',
      },
      h4: {
        fontWeight: 600,
      },
      h5: {
        fontWeight: 600,
      },
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            textTransform: 'none',
            borderRadius: 0,
            padding: '10px 24px',
          },
          contained: {
            boxShadow: 'none',
            '&:hover': {
              boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
            },
          },
        },
      },
      MuiCard: {
        styleOverrides: {
          root: {
            borderRadius: 8,
            transition: 'transform 0.3s ease',
            '&:hover': {
              transform: 'translateY(-8px)',
            },
          },
        },
      },
    },
  };

  return createTheme(themeOptions);
};