
import React, { useState } from 'react';
import Grid from '@mui/material/Grid2';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { useMediaQuery, useTheme } from '@mui/material';

export default function NavBar() {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const [drawerOpen, setDrawerOpen] = useState(false);

    const handleDrawerToggle = () => {
        setDrawerOpen(!drawerOpen);
    };
    return(
        <nav className="NavBar">
            <Grid container spacing={2} style={{ maxWidth: '1200px', margin: '1rem auto', justifyContent: 'space-between' }}>
                <Grid size={{ xs: 10, sm: 4 }} style={{ textAlign: 'left', display: 'flex', alignItems: 'center' }}>
                    <a href="#">AmTrem.dev</a>
                </Grid>
                {isMobile ? (
                    <Grid size={2} style={{ textAlign: 'right' }}>
                        <IconButton onClick={handleDrawerToggle}>
                            <MenuIcon />
                        </IconButton>
                        <Drawer anchor="right" open={drawerOpen} onClose={handleDrawerToggle}>
                            <List>
                                <ListItem button component="a" href="/">
                                    <ListItemText primary="Home" />
                                </ListItem>
                                <ListItem button component="a" href="/about">
                                    <ListItemText primary="About" />
                                </ListItem>
                                <ListItem button component="a" href="#">
                                    <ListItemText primary="Projects" />
                                </ListItem>
                                <ListItem button component="a" href="#">
                                    <ListItemText primary="Contact" />
                                </ListItem>
                            </List>
                        </Drawer>
                    </Grid>
                ) : (
                    <Grid sm={8}>
                        <Grid container spacing={2} style={{ textAlign: 'right' }}>
                            <Grid sm={3} style={{ textAlign: 'left', display: 'flex', alignItems: 'center' }}>
                                <a href="/">Home</a>
                            </Grid>
                            <Grid sm={3} style={{ textAlign: 'left', display: 'flex', alignItems: 'center' }}>
                                <a href="/about">About</a>
                            </Grid>
                            <Grid sm={3} style={{ textAlign: 'left', display: 'flex', alignItems: 'center' }}>
                                <a href="#" >Projects</a>
                            </Grid>
                            <Grid sm={3} style={{ textAlign: 'left', display: 'flex', alignItems: 'center' }}>
                                <a href="#" >Contact</a>
                            </Grid>
                        </Grid>
                    </Grid>
                )}
            </Grid>
        </nav>
    )
};