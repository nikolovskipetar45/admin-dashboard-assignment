// _app.js
import { useContext } from 'react'

import { ThemeProvider as ThemeContextProvider, ThemeContext } from '@/theme'
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import DashboardLayout from '@/layout/dashboard/layout'

export default function App({ Component, pageProps }) {
  const theme = useContext(ThemeContext);

  return (
    <ThemeContextProvider>
      <MuiThemeProvider theme={theme}>
        <DashboardLayout>
          <Component {...pageProps} />
        </DashboardLayout>
      </MuiThemeProvider>
    </ThemeContextProvider>
  )
}
