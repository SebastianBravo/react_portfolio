import React, { useState } from "react";
import AboutMeCard from "./AboutMeCard";
import Education from "./Education";
import Skills from "./Skills";
import Awards from "./Awards";
import {
  Container,
  Grid,
  Paper,
  Typography,
  ListItemButton,
  ListItemText,
  List,
} from "@mui/material";
import { Height } from "@mui/icons-material";

export default function About() {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };

  return (
    <Container maxWidth="lg" sx={{ mt: 16, mb: 16 }}>
      <Typography variant="h4" sx={{ fontFamily: "Rubik" }}>
        About me
      </Typography>

      <Grid container spacing={2} sx={{ mt: 5 }}>
        <Grid item xs={12} md={4}>
          <Paper elevation={2}>
            <List>
              <ListItemButton
                selected={selectedIndex === 0}
                onClick={(event) => handleListItemClick(event, 0)}
              >
                <ListItemText primary="About me" />
              </ListItemButton>
              <ListItemButton
                selected={selectedIndex === 1}
                onClick={(event) => handleListItemClick(event, 1)}
              >
                <ListItemText primary="Education" />
              </ListItemButton>
              <ListItemButton
                selected={selectedIndex === 2}
                onClick={(event) => handleListItemClick(event, 2)}
              >
                <ListItemText primary="Skills" />
              </ListItemButton>
              <ListItemButton
                selected={selectedIndex === 3}
                onClick={(event) => handleListItemClick(event, 3)}
              >
                <ListItemText primary="Awards" />
              </ListItemButton>
            </List>
          </Paper>
        </Grid>
        <Grid item xs={12} md={8}>
          {selectedIndex === 0 && <AboutMeCard />}
          {selectedIndex === 1 && <Education />}
          {selectedIndex === 2 && <Skills />}
          {selectedIndex === 3 && <Awards />}
        </Grid>
      </Grid>
    </Container>
  );
}
