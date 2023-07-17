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

const pages = ["Home", "About", "Projects", "Contact"];

function Navbar() {
    return (
        <AppBar position="static">
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
                        >
                            {page}
                        </Button>
                        ))}
                    </Box>
                </Toolbar>
            </Container>
            {/* <Toolbar>
                <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
                <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{ mr: 2 }}
                >
                    <MenuIcon />
                </IconButton>
                
                <Typography component="div" sx={{ flexGrow: 1 }}>

                </Typography>
            </Toolbar> */}
        </AppBar>
    );
}

export default Navbar;