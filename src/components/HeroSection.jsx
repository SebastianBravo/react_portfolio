import React, { useRef, useEffect } from "react";
import CV from "../assets/CV_Juan_Sebastian_Bravo_Santacruz.pdf"
import heroImg from "../assets/images/foto.png";
import { Container, Grid, Button, Paper, Box, Typography } from "@mui/material";
import { init } from "ityped";

function HeroSection() {
    const textRef = useRef();

    useEffect(() => {
        init(textRef.current, {
            showCursor: true,
            backDelay: 1500,
            backSpeed: 60,
            strings: ["Juan Sebastián Bravo Santacruz", "a Data Scientist"],
        });
    }, []);

    const onDownload = () => {
        const link = document.createElement("a");
        link.download = `CV_Juan_Sebastian_Bravo_Santacruz.pdf`;
        link.href = "https://github.com/SebastianBravo/react_portfolio/blob/master/src/assets/CV_Juan_Sebastian_Bravo_Santacruz.pdf";
        console.log(link.href);
        link.click();
    };

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
                        <Typography
                            display="inline"
                            variant="h5"
                            sx={{ fontFamily: "Rubik" }}
                        >
                            I'm{" "}
                        </Typography>
                        <Typography
                            display="inline"
                            variant="h5"
                            color="primary.dark"
                            ref={textRef}
                        ></Typography>
                    </Box>
                    <Box sx={{ mt: 2 }}>
                        <Typography variant="body1" fontFamily="Rubik">
                            Electronics Engineering student, with a strong
                            academic background in machine learning, signal
                            processing and computer vision. Passionate about
                            Machine learning, specially image processing and
                            generative AI. I have practical experience in
                            Python, using TensorFlow, scikit-learn, and PyTorch
                            for machine learning and deep learning projects.
                            Completed projects involving generative AI and LLM
                            on Azure, and ETLs using SQL and PySpark in
                            Databricks. 
                        </Typography>
                    </Box>
                    <Box sx={{ mt: 2 }}>
                        <Button
                            variant="contained"
                            onClick={onDownload}
                            sx={{ mr: 2, backgroundColor: "primary.dark" }}
                        >
                            Download CV
                        </Button>
                        <Button
                            variant="contained"
                            sx={{ backgroundColor: "primary.dark" }}
                            href="mailto:juan.sebastian.bravo@outlook.com"
                        >
                            Contact
                        </Button>
                    </Box>
                </Grid>
                <Grid item xs={4}>
                    {/* Add image that fills the grid item and doesnt overflow from the  and has a height of 30% and is centered*/}
                    <Box sx={{ display: "flex", justifyContent: "center" }}>
                        <img
                            src={heroImg}
                            alt="Hero image"
                            width="60%"
                            className="rounded_corners"
                        />
                    </Box>
                </Grid>
            </Grid>
        </Container>
    );
}

export default HeroSection;
