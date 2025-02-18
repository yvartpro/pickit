import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Paper, TextField, Button, Typography, Box} from '@mui/material';

const LoginRegister = ({ onLogin }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [company, setCompany] = useState({ name: '', address:'', auth: '', password: '' });
  const [sapor, setSapor] = useState(null);
  const navigate = useNavigate();

  const pickValue = (e) => {
    const { name, value } = e.target;
    setCompany((prev) => ({ ...prev, [name]: value }));
  };

  const determineAuthType = () => {
    if (company.auth.includes('@')) {
      setCompany((prev) => ({ ...prev, email: company.auth, phone: '' }));
    } else if (/^\d+$/.test(company.auth)) {
      setCompany((prev) => ({ ...prev, phone: company.auth, email: '' }));
    } else {
      setSapor('Telephone ou e-mail invalide.');
      return false; // Indicate invalid auth type
    }
    return true; // Indicate valid auth type
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const isValidAuthType = determineAuthType();
    if (!isValidAuthType) {
        return; // Stop if auth type is invalid
    }
  
    const endpoint = isLogin ? 'https://capbio.bi/api/login.php' : 'https://capbio.bi/api/register.php';
  
    try {
      console.log(company)
      const resp = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify(company),
      });
  
      if (!resp.ok) {
        throw new Error(resp.statusText);
      }
  
      const res = await resp.json();
      console.log(res);
  
      if (res.success && isLogin) {
        // Successful login, save token to localStorage and redirect
        localStorage.setItem('token', res.token);
        onLogin(res.token); // Pass token to parent component
        navigate('/home'); // Redirect to home after login
      } else {
        // Handle registration or login failure
        alert(res.message); // Show an error message
      }
    } catch (err) {
      console.error(err.message);
      alert('An error occurred. Please try again.');
    }
  };
  

  return (
    <Box display="flex" justifyContent="center" alignItems="center" minHeight="80vh">
      <Paper elevation={3} sx={{ padding: 3, width: '350px', px:2}}>
        <Typography variant="h5" align="center" mb={2}>
          {isLogin ? 'Login' : 'Register'}
        </Typography>
        <form onSubmit={handleSubmit}>
          {!isLogin && (
            <TextField
              label="Nom de la galerie"
              variant="outlined"
              fullWidth
              margin="normal"
              name="name"
              value={company.name}
              onChange={pickValue}
              required
            />
          )}
          {!isLogin && (
            <TextField
            label="Adresse"
            variant="outlined"
            fullWidth
            margin="normal"
            name="address"
            value={company.address}
            onChange={pickValue}
            required
          />)}
          <TextField
            label="E-mail ou numéro de téléphone"
            variant="outlined"
            fullWidth
            margin="normal"
            name="auth"
            value={company.auth}
            onChange={pickValue}
            onBlur={determineAuthType}
            error={!!sapor}
            helperText={sapor}
            required
          />
          <TextField
            label="Mot de passe"
            variant="outlined"
            type="password"
            fullWidth
            margin="normal"
            name="password"
            value={company.password}
            onChange={pickValue}
            required
          />
          <Button type="submit" variant="contained" color="primary" fullWidth mt={3}>
            {isLogin ? 'Login' : 'Register'}
          </Button>
        </form>
        <Box mt={2} textAlign="center">
          <Typography>
            {isLogin ? "Don't have an account? " : "Already have an account? "}
            <Button color="primary" onClick={() => setIsLogin(!isLogin)}>
              {isLogin ? 'Register' : 'Login'}
            </Button>
          </Typography>
        </Box>
      </Paper>           
    </Box>
  );
};

export default LoginRegister;