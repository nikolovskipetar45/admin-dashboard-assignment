// ThemeContext.js
import { createContext } from 'react';
import { createTheme } from '@mui/material/styles';

const defaultTheme = createTheme({
  palette: {
    primary: {
      main: '#FEC905',
    },
    secondary: {
      main: '#3f51b5',
    },
    error: {
      main: '#f44336',
    },
  },
  typography: {
    fontFamily: '"Lato", sans-serif',
  },
});

const ThemeContext = createContext(defaultTheme);

const ThemeProvider = ({ children }) => {
  return (
    <ThemeContext.Provider value={{ theme: defaultTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeContext, ThemeProvider };
