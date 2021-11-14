import React from 'react'
import { MuiThemeProvider } from '@material-ui/core/styles'
import createMuiTheme from '@material-ui/core/styles/createMuiTheme'

const theme = createMuiTheme({
    palette: {
      primary: {
        light: '#410072',
        main: '#5e01a3',
        dark: '#7e33b5',
        contrastText: '#fff',
      },
      secondary: {
        light: '#ab003c',
        main: '#f50057',
        dark: '#f73378',
        contrastText: '#000',
      },
    },
  });

  export default ({ children }) => {
    return <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>
  }