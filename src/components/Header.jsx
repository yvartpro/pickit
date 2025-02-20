import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { ExitToApp } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { Box, ImageList } from '@mui/material';
import logo from '../assets/dun.png'

const Header = ({ isLoggedIn, onLogout, user }) => {
  const navigate = useNavigate();

  const logout = () => {
    onLogout(); // Call the logout function from App
    // navigate('/login');
  };

  return (
    <AppBar position="static" sx={{borderRadius:0}}>
      <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1, fontWeight: 600 }}>
            <img src={logo} style={{width:'50px'}} alt='DUN'/>
          </Typography>
            {isLoggedIn && (
              <Box sx={{display:'flex',gap:2, alignItems:'center'}}>
                <Button color='inherit'>{user.name}</Button>
                <Button color="inherit" onClick={logout} startIcon={<ExitToApp />}/>
              </Box>
          )}
      </Toolbar>
    </AppBar>
  );
};

export default Header;