import * as React from "react";
import {
    Paper,
    Box,
    Tab,
    Tabs,
    Grid,
    Typography,
    LinearProgress,
} from "@mui/material";

export default function Skills() {
    const [value, setValue] = React.useState("1");

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const languages = [
        { name: "Python", level: 90 },
        { name: "C", level: 90 },
        { name: "MATLAB", level: 80 },
        { name: "SQL", level: 70 },
    ];

    const libraries = [
        { name: "Pytorch", level: 75 },
        { name: "Tensorflow", level: 80 },
        { name: "Scikit-learn", level: 70 },
        { name: "Keras", level: 80 },
        { name: "Pandas", level: 70 },
        { name: "Numpy", level: 90 },
        { name: "OpenCV", level: 70 },
        { name: "Matplotlib", level: 80 },
    ];

    const tools = [
        { name: "Git", level: 80 },
        { name: "Linux", level: 70 },
        { name: "Jupyter Notebooks", level: 90 },
        { name: "Google Colab", level: 90 },
        { name: "VsCode", level: 90 },
        { name: "Databricks", level: 60 },
    ];

    const clouds = [
        { name: "AWS", level: 40 },
        { name: "Azure", level: 20 },
    ];

    return (
        <Paper elevation={2}>
            <Tabs
                value={value}
                onChange={handleChange}
                aria-label="wrapped label tabs example"
                centered={true}
                variant="fullWidth"
            >
                <Tab value="1" label="Programming Languages" />
                <Tab value="2" label="Libraries" />
                <Tab value="3" label="Tools" />
                <Tab value="4" label="Clouds" />
            </Tabs>
            {/* Programming Languages */}
            {value === "1" && (
                <Grid container spacing={2} sx={{ p: 3 }}>
                    {languages.map((language, index) => (
                        <Grid item xs={12} key={index}>
                            <Box>
                                <Typography
                                    variant="body2"
                                    sx={{ fontFamily: "Rubik", mb: 1 }}
                                >
                                    {language.name}
                                </Typography>
                                <LinearProgress
                                    variant="determinate"
                                    value={language.level}
                                />
                            </Box>
                        </Grid>
                    ))}
                </Grid>
            )}
            {/* Libraries */}
            {value === "2" && (
                <Grid container spacing={2} sx={{ p: 3 }}>
                    {libraries.map((library, index) => (
                        <Grid item xs={4} key={index}>
                            <Box>
                                <Typography
                                    variant="body2"
                                    sx={{ fontFamily: "Rubik", mb: 1 }}
                                >
                                    {library.name}
                                </Typography>
                                <LinearProgress
                                    variant="determinate"
                                    value={library.level}
                                />
                            </Box>
                        </Grid>
                    ))}
                </Grid>
            )}
            {/* Tools */}
            {value === "3" && (
                <Grid container spacing={2} sx={{ p: 3 }}>
                    {tools.map((tool, index) => (
                        <Grid item xs={4} key={index}>
                            <Box>
                                <Typography
                                    variant="body2"
                                    sx={{ fontFamily: "Rubik", mb: 1 }}
                                >
                                    {tool.name}
                                </Typography>
                                <LinearProgress
                                    variant="determinate"
                                    value={tool.level}
                                />
                            </Box>
                        </Grid>
                    ))}
                </Grid>
            )}
            {/* Clouds */}
            {value === "4" && (
                <Grid container spacing={2} sx={{ p: 3 }}>
                    {clouds.map((cloud, index) => (
                        <Grid item xs={12} key={index}>
                            <Box>
                                <Typography
                                    variant="body2"
                                    sx={{ fontFamily: "Rubik", mb: 1 }}
                                >
                                    {cloud.name}
                                </Typography>
                                <LinearProgress
                                    variant="determinate"
                                    value={cloud.level}
                                />
                            </Box>
                        </Grid>
                    ))}
                </Grid>
            )}
        </Paper>
    );
}
