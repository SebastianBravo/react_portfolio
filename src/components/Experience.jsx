import * as React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem, { timelineItemClasses } from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import WorkIcon from "@mui/icons-material/Work";
import {
  Typography,
  Container,
  Paper,
  Box,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";

export default function Experience() {
  return (
    <Container maxWidth="lg" sx={{ pt: 7 }}>
      <Typography variant="h4" sx={{ fontFamily: "Rubik", mb: 5 }}>
        Experience
      </Typography>
      <Box display="flex" justifyContent="center" alignItems="center">
        <Paper
          elevation={2}
          sx={{
            p: 2,
            maxWidth: "md",
            height: { xs: 690, md: "auto" },
            overflowY: "auto",
          }}
        >
          <Timeline
            sx={{
              [`& .${timelineItemClasses.root}:before`]: {
                flex: 0,
                padding: 0,
              },
            }}
          >
            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot color="primary">
                  <WorkIcon />
                </TimelineDot>
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                <Typography variant="subtitle" sx={{ fontFamily: "Lato" }}>
                  Jan 2023 - Jul 2023
                </Typography>
                <Typography variant="subtitle1" sx={{ fontFamily: "Lato" }}>
                  Big Data & Analytics Intern
                </Typography>
                <Typography variant="subtitle2" sx={{ fontFamily: "Lato" }}>
                  Accenture
                </Typography>
                <List
                  sx={{
                    listStyleType: "disc",
                    pl: 2.5,
                  }}
                >
                  <ListItem sx={{ display: "list-item" }}>
                    <Typography variant="body2" color="grey.400">
                      Assistance in the development of proof of concept (PoC)
                      chat bot using generative AI and LLM on Azure. Use of
                      FormRecognizer, Azure Functions, and OpenAI suite.
                    </Typography>
                  </ListItem>
                  <ListItem sx={{ display: "list-item" }}>
                    <Typography variant="body2" color="grey.400">
                      Design of scripts for the implementation of ETLs in
                      Databricks, using technologies such as SQL and PySpark.
                      Use of daltalakes and data warehouse.
                    </Typography>
                  </ListItem>
                  <ListItem sx={{ display: "list-item" }}>
                    <Typography variant="body2" color="grey.400">
                      Support and monitoring of infrastructure deployed in the
                      AWS cloud.
                    </Typography>
                  </ListItem>
                  <ListItem sx={{ display: "list-item" }}>
                    <Typography variant="body2" color="grey.400">
                      Development of infrastructure as code IaC using terraform
                      on architecture deployed in the AWS cloud.
                    </Typography>
                  </ListItem>
                </List>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot color="primary">
                  <WorkIcon />
                </TimelineDot>
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                <Typography variant="subtitle" sx={{ fontFamily: "Lato" }}>
                  Aug 2020 - Dec 2022
                </Typography>
                <Typography variant="subtitle1" sx={{ fontFamily: "Lato" }}>
                  Teacher Assistant
                </Typography>
                <Typography variant="subtitle2" sx={{ fontFamily: "Lato" }}>
                  Pontificia Universidad Javeriana
                </Typography>
                <List
                  sx={{
                    listStyleType: "disc",
                    pl: 2.5,
                  }}
                >
                  <ListItem sx={{ display: "list-item" }}>
                    <Typography variant="body2" color="grey.400">
                      Teacher assistant of the subject Continuous Time Signals.
                    </Typography>
                  </ListItem>
                  <ListItem sx={{ display: "list-item" }}>
                    <Typography variant="body2" color="grey.400">
                      Teacher assistant of the subject Signals and Systems.
                    </Typography>
                  </ListItem>
                </List>
              </TimelineContent>
            </TimelineItem>
          </Timeline>
        </Paper>
      </Box>
    </Container>
  );
}
