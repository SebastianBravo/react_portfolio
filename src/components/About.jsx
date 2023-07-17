import React, {useState} from "react";
import AboutMeCard from "./AboutMeCard";
import Education from "./Education";
import Skills from "./Skills";
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

function About() {
    const [selectedIndex, setSelectedIndex] = useState(1);

    const handleListItemClick = (event, index) => {
        setSelectedIndex(index);
    };

    return (
        <Container maxWidth="lg" sx={{ mt: 15, mb:15}}>
            <Typography variant="h4" sx={{ fontFamily: "Rubik" }}>
                About me
            </Typography>

            <Grid container spacing={2} sx={{ mt:5 }}>
                <Grid item xs={4}>
                    <Paper elevation={2}>
                        <List>
                            <ListItemButton
                                selected={selectedIndex === 0}
                                onClick={(event) => handleListItemClick(event, 0)}
                            >
                                <ListItemText
                                    primary="About me"
                                />
                            </ListItemButton>
                            <ListItemButton
                                selected={selectedIndex === 1}
                                onClick={(event) => handleListItemClick(event, 1)}
                            >
                                <ListItemText
                                    primary="Education"
                                />
                            </ListItemButton>
                            <ListItemButton
                                selected={selectedIndex === 2}
                                onClick={(event) => handleListItemClick(event, 2)}
                            >
                                <ListItemText
                                    primary="Skills"
                                />
                            </ListItemButton>
                            <ListItemButton
                                selected={selectedIndex === 3}
                                onClick={(event) => handleListItemClick(event, 3)}
                            >
                                <ListItemText
                                    primary="Awards"
                                />
                            </ListItemButton>
                        </List>
                    </Paper>
                </Grid>
                <Grid item xs={8}>
                    {selectedIndex === 0 && <AboutMeCard/>}
                    {selectedIndex === 1 && <Education/>}
                    {selectedIndex === 2 && <Skills/>}
                </Grid>
            </Grid>
        </Container>
    );
}

export default About;
