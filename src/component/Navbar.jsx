import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography'; 
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

const Navbar = () => {
    return ( 
        <>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static" style={{background:"#232f3e"}}>
                    <Toolbar>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2 }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h4" component="div" align='center' sx={{ flexGrow: 1 }}>
                            Todo App
                        </Typography>
                        
                    </Toolbar>
                </AppBar>
            </Box>
        </>
    )
} 

export default Navbar