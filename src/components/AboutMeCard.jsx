import React, { useState } from "react";
import CardImg from "../assets/images/foto.png";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import {
  Card,
  CardMedia,
  CardContent,
  Grid,
  Box,
  Typography,
  IconButton,
} from "@mui/material";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

export default function AboutMeCard() {
  return (
    <Card>
      <Grid container spacing={2}>
        <Grid item xs={4} md={3}>
          <CardMedia
            component="img"
            image={CardImg}
            sx={{
              width: { md: 151 },
              padding: 0,
              margin: 2,
              backgroundColor: "grey.800",
              borderRadius: 2,
              // center vertically to de middle of the grid item
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            // alt="Live from space album cover"
          />
        </Grid>
        <Grid item xs={8} md={9}>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <CardContent>
              <Typography
                variant="h5"
                component="div"
                sx={{ mb: 2 }}
                fontFamily="Lato"
              >
                Juan Sebastián Bravo Santacruz
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                fontFamily="Lato"
              >
                Electronics Engineering student, with a strong academic
                background in machine learning, signal processing and computer
                vision. Passionate about Machine learning, specially image
                processing and generative AI. Eager to enhance programming
                skills and contribute to projects in recommender systems,
                ranking systems, image processing, and other focus areas with a
                basic understanding of statistics and hands-on experience in
                exploratory data analysis.
              </Typography>
            </CardContent>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                pl: 1,
                pb: 1,
              }}
            >
              <IconButton
                target="_blank"
                href="https://github.com/SebastianBravo"
              >
                <GitHubIcon />
              </IconButton>
              <IconButton
                target="_blank"
                href="https://www.linkedin.com/in/juan-sebasti%C3%A1n-bravo-santacruz-171625232"
              >
                <LinkedInIcon />
              </IconButton>
              <IconButton
                target="_blank"
                href="mailto:juan.sebastian.bravo@outlook.com"
              >
                <EmailIcon />
              </IconButton>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Card>
  );
}
