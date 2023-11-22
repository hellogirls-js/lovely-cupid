import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import "./styles/main.scss"
import { pink } from '@mui/material/colors';
import { Fragment } from 'react';
import Home from './components/Home';


const theme = createTheme({
  palette: {
    primary: {
      main: pink[100],
      dark: pink[500],
      light: "#ff99bb"
    },
    secondary: {
      main: "#8c9eff",
    }
  },
  typography: {
    fontFamily: "inherit",
    fontSize: 16,
    h1: {
      color: "white",
    }
  }
});

function App() {

  return (
    <Fragment>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <Home />
      </ThemeProvider>
    </Fragment>
  )
}

export default App;
