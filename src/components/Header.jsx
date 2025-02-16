import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { ExitToApp } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

const Header = ({ isLoggedIn, onLogout }) => {
    const navigate = useNavigate();

    const logout = () => {
        onLogout(); // Call the logout function from App
        // navigate('/login');
    };

    return (
        <AppBar position="static" sx={{ background: '#2e3b55' }}>
            <Toolbar>
                <Typography variant="h6" sx={{ flexGrow: 1, fontWeight: 600 }}>
                    BENI SERVICES
                </Typography>
                {isLoggedIn && (
                    <>
                        <Button color="inherit">Dashboard</Button>
                        <Button color="inherit" onClick={logout} startIcon={<ExitToApp />}>
                            Logout
                        </Button>
                    </>
                )}
            </Toolbar>
        </AppBar>
    );
};

export default Header;