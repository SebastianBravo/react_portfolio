import './App.css'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

export const darkTheme = createTheme({
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          "&::-webkit-scrollbar, & *::-webkit-scrollbar": {
            backgroundColor: "#2b2b2b",
            width: 8,
          },
          "&::-webkit-scrollbar-thumb, & *::-webkit-scrollbar-thumb": {
            backgroundColor: "#4f4f4f",
            borderRadius: 8,
          }
        }
      },
    },
  },
  
  palette: {
    mode: 'dark',
  },
  typography: {
    fontFamily: [
      'Rubik',
      'sans-serif',
    ].join(','),
  },
});

function App() {
  return (
    <>
      <div>
        <ThemeProvider theme={darkTheme}>
          <CssBaseline />
            <Navbar />
            <div id="Home"><HeroSection /></div> 
            <div id="About"><About /></div>
            <div id="Experience"><Experience /></div>
            <div id="Projects"><Projects /></div>
            {/* <h1> Hello World </h1> */}
        </ThemeProvider>
      </div>
    </>
  )
}

export default App
