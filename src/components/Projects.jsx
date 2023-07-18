import React from "react";
import {
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
} from "@mui/material";
import { Height } from "@mui/icons-material";

export default function Projects() {
    return (
        <Container maxWidth="lg" sx={{ mt: 16, mb: 16}}>
            <Typography variant="h4" sx={{ fontFamily: "Rubik" }}>
                Projects
            </Typography>
        </Container>
    );
}