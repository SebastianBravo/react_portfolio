import React from "react";
import {
  Container,
  Grid,
  // Button,
  Paper,
  Box,
  Typography,
  ListItem,
  ListItemButton,
  ListItemText,
  List,
} from "@mui/material";
import { Height } from "@mui/icons-material";
import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "SIMCI (Thesis Project)",
    short_description:
      "Multimodal system to assist in the diagnosis of Mild Cognitive Impairment from MRI Images and Cognitive Tests.",
    description: [
      "Classification of volumetric MRI images of the brain using deep learning (Resnet-50) and machine learning (Tested the following algorithms: XGBoost, SVM, Logistic Discriminant, Random Forest, Dense Neural Networks).",
      "Multimodal system (based on a regression model and MLP) involving MRI images classification and cognitive test results, for giving a probability of having MCI.",
      "Use of Bayesian Optimization algorithm for hyper-parameters tuning of machine learning models.",
      "Design of User interface involving image importing, image visualization (before and after skull stripping) and the diagnosis. App was hosted at huggingface spaces.",
    ],
    link: "https://github.com/SebastianBravo/SIMCI",
    image:
      "https://user-images.githubusercontent.com/66338785/233531457-f368e04b-5099-42a8-906d-6f1250ea0f1e.png",
  },
  {
    title: "Skull Stripping from MRI Images using 3D U-Net",
    short_description: "Skull stripping from MRI images using 3D U-Net.",
    description: [
      "Preprocessing of volumetric MRI images of the brain (Filtering, normalization, resizing).",
      "Training of a 3D U-Net network using Keras for semantic segmentation of brain in volumetric MRI images.",
    ],
    link: "https://github.com/SebastianBravo/3D-U-Net",
    image:
      "https://user-images.githubusercontent.com/66338785/254454844-df346e67-0659-468e-b361-5c33a9aea156.svg",
  },
  {
    title: "AF Classification using machine learning",
    short_description:
      "Classification of Atrial Fibrillation from a single lead of ECG recording using machine learning.",
    description: [
      "Preprocessing of ECG signals (Filtering, normalization, downsampling).",
      "Feature extraction from ECG signals (RR intervals, P wave, QRS complex, T wave).",
      "Training of a deep neural network (DNN) for classifying ECG recordings as Atrial Fibrillation or Normal Control patients.",
    ],
    link: "https://github.com/SebastianBravo/AF_detection",
    image:
      "https://user-images.githubusercontent.com/66338785/254461381-c653de73-fa22-40b6-a63b-718bcccc0a0a.svg",
  },
];

export default function Projects() {
  return (
    <Container maxWidth="lg" sx={{ mt: 16, mb: 16 }}>
      <Typography variant="h4" sx={{ fontFamily: "Rubik" }}>
        Projects
      </Typography>
      <Paper elevation={2} sx={{ p: 2, mt: 5 }}>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            {projects.map((project, index) => (
              <Grid key={index} item xs={12} md={4}>
                <ProjectCard {...project} />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Paper>
    </Container>
  );
}
