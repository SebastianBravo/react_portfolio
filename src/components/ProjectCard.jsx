import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import GitHubIcon from "@mui/icons-material/GitHub";
import {
  Button,
  CardActionArea,
  CardActions,
  List,
  ListItem,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import Collapse from "@mui/material/Collapse";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return (
    <IconButton
      sx={{
        backgroundColor: expand ? "primary.dark" : "primary",
        ":hover": { bgcolor: "primary.dark" },
      }}
      {...other}
    />
  );
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function ProjectCard(props) {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card>
      <CardActionArea onClick={handleExpandClick}>
        <CardMedia
          component="img"
          height="150"
          image={props.image}
          alt={props.title}
          sx={{ background: "#fff", objectFit: "contain" }}
        />
        <CardContent sx={{ height: "10rem" }}>
          <Typography gutterBottom variant="h5" component="div" height="4rem">
            {props.title}
          </Typography>
          <Typography variant="body2" color="text.secondary" height="4rem">
            {props.short_description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <GitHubIcon fontSize="small" sx={{ ml: 1, mr: 0.5 }} />
        <Button href={props.link} target="_blank" size="small" color="primary">
          Source code
        </Button>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Description:</Typography>
          <List sx={{ listStyleType: "disc", pl: 2.5 }}>
            {props.description.map((item, index) => (
              <ListItem key={index} sx={{ display: "list-item" }}>
                <Typography variant="body2" color="grey.400">
                  {item}
                </Typography>
              </ListItem>
            ))}
          </List>
        </CardContent>
      </Collapse>
    </Card>
  );
}
