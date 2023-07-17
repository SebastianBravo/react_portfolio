import React, { useState } from "react";
import CardImg from "../assets/images/foto.png";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import {
    Card,
    CardMedia,
    CardContent,
    CardActions,
    Container,
    Grid,
    Button,
    Paper,
    Box,
    Typography,
    ListItem,
    ListItemButton,
    ListItemText,
    List,
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
                <Grid item xs={3}>
                    <CardMedia
                        component="img"
                        image={CardImg}
                        sx={{
                            width: 151,
                            padding: 0,
                            margin: 2,
                            backgroundColor: "grey.500",
                        }}
                        // alt="Live from space album cover"
                    />
                </Grid>
                <Grid item xs={9}>
                    <Box sx={{ display: "flex", flexDirection: "column" }}>
                        <CardContent>
                            <Typography variant="h5" component="div" sx={{ mb: 2 }}>
                                Juan Sebastián Bravo Santacruz
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Last semester student of Electronics Engineering
                                with a keen interest in machine learning,
                                signal processing, bioengineering, and
                                computer vision. My biggest passion now lies in
                                neuroengineering, especially neuroimaging and
                                Signal Processing. I have experienceworking with
                                Python modules such as TensorFlow,
                                scikit-learn, and PyTorch, along with knowledge
                                of machine learning algorithms and deep
                                learning.
                            </Typography>
                        </CardContent>
                        <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
                            <IconButton target="_blank" href="https://github.com/SebastianBravo">
                                <GitHubIcon />
                            </IconButton> 
                            <IconButton target="_blank" href="https://www.linkedin.com/in/juan-sebasti%C3%A1n-bravo-santacruz-171625232">
                                <LinkedInIcon />
                            </IconButton>
                            <IconButton target="_blank" href="mailto:juan.sebastian.bravo@outlook.com">
                                <EmailIcon />
                            </IconButton>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </Card>
    );
}
