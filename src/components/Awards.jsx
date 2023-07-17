import React, { useState } from "react";
import { darkTheme } from "../App";
import CardImg from "../assets/images/foto.png";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
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

const AwardsList = [
    {
        name: "Academic Excellence 2018-3",
        description: "Awarded for GPA over 4.3.",
        institution: "Pontificia Universidad Javeriana",
    },
    {
        name: "Academic Excellence 2019-1",
        description: "Awarded for GPA over 4.3.",
        institution: "Pontificia Universidad Javeriana",
    },
    {
        name: "Academic Excellence 2019-3",
        description: "Awarded for GPA over 4.3.",
        institution: "Pontificia Universidad Javeriana",
    },
    {
        name: "Academic Excellence 2020-1",
        description: "Awarded for GPA over 4.3.",
        institution: "Pontificia Universidad Javeriana",
    },
    {
        name: "Academic Excellence 2020-3",
        description: "Awarded for GPA over 4.3.",
        institution: "Pontificia Universidad Javeriana",
    },
    {
        name: "Academic Excellence 2021-1",
        description: "Awarded for GPA over 4.3.",
        institution: "Pontificia Universidad Javeriana",
    },
    {
        name: "Academic Excellence 2021-3",
        description: "Awarded for GPA over 4.3.",
        institution: "Pontificia Universidad Javeriana",
    },
    {
        name: "Academic Excellence 2022-1",
        description: "Awarded for GPA over 4.3.",
        institution: "Pontificia Universidad Javeriana",
    },
    {
        name: "Academic Excellence 2022-3",
        description: "Awarded for GPA over 4.3.",
        institution: "Pontificia Universidad Javeriana",
    },
];

export default function Awards() {
    return (
        <Paper
            elevation={2}
            sx={{ p: 2, backgroundColor: "primary"}}
        >
            <Grid container spacing={2}>
                {AwardsList.map((award, index) => (
                    <Grid item xs={4} key={index}>
                        <Paper elevation={2} sx={{ p: 1, backgroundColor: "grey.900" ,"&:hover": { backgroundColor: darkTheme.palette.action.hover }}}>
                            <Typography
                                variant="subtitle2"
                                sx={{ fontFamily: "Lato" }}
                            >
                                {award.name}
                            </Typography>
                            <Typography
                                variant="body2"
                                color="text.secondary"
                                sx={{ fontFamily: "Lato" }}
                            >
                                {award.description}
                            </Typography>
                            <Box pt={1}>
                                <Typography
                                    variant="caption"
                                    sx={{ fontFamily: "Lato" }}
                                >
                                    {award.institution}
                                </Typography>
                            </Box>
                        </Paper>
                    </Grid>
                ))}
            </Grid>
        </Paper>
    );
}
