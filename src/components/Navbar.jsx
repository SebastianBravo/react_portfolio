import * as React from "react";
import avatarImg from "../assets/images/avatar.jpeg";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import { Block } from "@mui/icons-material";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Typography from "@mui/material/Typography";

const pages = ["Home", "About", "Experience", "Projects"];
// const pages = ["Home", "About", "Experience"];

export default function Navbar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleClickScroll = (id) => {
    let element = document.getElementById(id);
    console.log(element);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: id == "Projects" ? "start" : "center",
      });
    }
  };

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = (id) => {
    // close menu and scroll to section
    // close the menu
    setAnchorElNav(null);

    // scroll to section after a slight delay (e.g., 100ms)
    setTimeout(() => {
      handleClickScroll(id);
    }, 100);
  };

  return (
    <AppBar position="fixed">
      <Container maxWidth="lg">
        <Toolbar>
          <Box sx={{ flexGrow: 1 }}>
            <IconButton sx={{ p: 0 }}>
              <Avatar alt="Avatar image" src={avatarImg} />
            </IconButton>
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page}
                sx={{
                  mx: 1,
                  color: "white",
                  display: "block",
                  fontFamily: "Rubik",
                }}
                onClick={() => handleClickScroll(page)}
              >
                {page}
              </Button>
            ))}
          </Box>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "flex", md: "none" },
              justifyContent: "flex-end",
            }}
          >
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={() => handleCloseNavMenu(page)}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
