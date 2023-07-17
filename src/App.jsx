import './App.css'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import About from './components/About'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

export const darkTheme = createTheme({
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
          {/* <h1> Hello World </h1> */}
        </ThemeProvider>
      </div>
    </>
  )
}

export default App
