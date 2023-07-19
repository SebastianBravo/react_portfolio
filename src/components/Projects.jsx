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

const projects = [
    {
        title: "Multimodal system to assist in the diagnosis of Mild Cognitive Impairment from MRI Images",
        description: [
            "Classification of volumetric MRI images of the brain using deep learning (Resnet-50) and machine learning (Tested the following algorithms: XGBoost, SVM, Logistic Discriminant, Random Forest, Dense Neural Networks).",
            "Multimodal system (based on a regression model and MLP) involving MRI images classification and cognitive test results, for giving a probability of having MCI.",
            "Use of Bayesian Optimization algorithm for hyper-parameters tuning of machine learning models.",
            "Design of User interface involving image importing, image visualization (before and after skull stripping) and the diagnosis. App was hosted at huggingface spaces.",
        ],
        link: "https://github.com/SebastianBravo/SIMCI",
        image: "https://user-images.githubusercontent.com/66338785/233531457-f368e04b-5099-42a8-906d-6f1250ea0f1e.png",
    }
];


export default function Projects() {
    return (
        <Container maxWidth="lg" sx={{ mt: 16, mb: 16}}>
            <Typography variant="h4" sx={{ fontFamily: "Rubik" }}>
                Projects
            </Typography>
        </Container>
    );
}