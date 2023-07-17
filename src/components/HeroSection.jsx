import React, {useRef, useEffect} from "react";
import heroImg from '../assets/images/foto.png';
import { Container, Grid, Button, Paper, Box, Typography} from "@mui/material";
import { init } from 'ityped'

function HeroSection() {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed: 60,
      strings: ["Juan Sebastián Bravo Santacruz",
                "a Data Scientist",],
    });
  }, []);

  return (
    <Container maxWidth="lg" sx={{ mt: 15 }}>
      <Grid container spacing={2}>
        <Grid item xs={8}>
          {/* add a h1, h2, p, and two buttons to the grid item with margin and padding between them */}
          <Box>
            <Typography variant="h4" sx={{ fontFamily: "Rubik" }}>
              Hi!
            </Typography>
          </Box>  
          <Box sx={{ mt: 2 }}>
            <Typography display="inline" variant="h5" sx={{ fontFamily: "Rubik" }}>
              I'm {" "}
            </Typography>
            <Typography display="inline" variant="h5" color="primary" ref={textRef}></Typography>
          </Box>
          <Box sx={{ mt: 2 }}>
            <Typography variant="body1" fontFamily="Rubik">
              Last semester student of Electronics Engineering with a keen
              interest in machine learning, signal processing, bioengineering,
              and computer vision. My biggest passion now lies in
              neuroengineering, especially neuroimaging and Signal Processing. I
              have experienceworking with Python modules such as TensorFlow,
              scikit-learn, and PyTorch, along with knowledge of machine
              learning algorithms and deep learning.
            </Typography>
          </Box>
          <Box sx={{ mt: 2 }}>
            <Button variant="contained" sx={{ mr: 2}}>
              Download CV
            </Button>
            <Button variant="contained">Contact</Button>
          </Box>
        </Grid>
        <Grid item xs={4}>
          {/* Add image that fills the grid item and doesnt overflow from the  and has a height of 30% and is centered*/}
          <Box sx={{ display: "flex", justifyContent: "center"}}>
            <img src={heroImg} alt="Hero image" width="60%"/> 
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}

export default HeroSection;
