import * as React from 'react';
import avatarImg from '../assets/images/avatar.jpeg';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import { Block } from '@mui/icons-material';

// const pages = ["Home", "About", "Experience", "Projects", "Contact"];
const pages = ["Home", "About", "Experience"];

export default function Navbar() {
    const handleClickScroll = (id) => {
        let element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'center'});
        }
    };

    return (
        <AppBar position="fixed">
            <Container maxWidth="lg">
                <Toolbar>
                    <Box sx={{ flexGrow: 1 }}>
                        <IconButton sx={{ p: 0}}>
                            <Avatar alt="Avatar image" src={avatarImg} />
                        </IconButton>
                    </Box>
                    <Box sx={{ flexGrow: 1, display: "flex"}}>
                        {pages.map((page) => (
                        <Button
                            key={page}
                            sx={{ mx: 1, color: 'white', display: 'block', fontFamily: 'Rubik' }}
                            onClick={() => handleClickScroll(page)}
                        >
                            {page}
                        </Button>
                        ))}
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}
