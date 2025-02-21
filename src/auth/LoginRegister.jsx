import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Paper, TextField, Button, Typography, Box} from '@mui/material';


const LoginRegister = ({ onLogin }) => {
  const [isLogin, setIsLogin] = useState(true)
  const [company, setCompany] = useState({ name: '', address:'', auth: '', password: '',login:true })
  const [msg, setMsg] = useState(null)
  const [sapor, setSapor] = useState(null)
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
      //  const endpoint = 'http://192.168.10.25/dun/model.php'
    try {    
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
      if (res.success && isLogin) {
        setMsg(res.message)
        onLogin(res.token,res.data); // Pass token to parent component
        navigate('/home'); // Redirect to home after login
      } else if(!res.success){
        throw new Error(res.error)
      }else{
      setMsg(res.message)
      }
    } catch (err) {
      setSapor(err.message)
      setTimeout(()=>{setSapor(null)},2000)
    }
  };


  return (
    <Box display="flex" justifyContent="center" alignItems="center" minHeight="80vh">
      <Paper elevation={3} sx={{ padding: 3, width: '350px', px:2}}>
        {msg && <Typography sx={{color:'green',fontSize:'12px'}}>{msg}</Typography>}
        {sapor && <Typography sx={{color: '#d32f2f',fontSize: '12px'}}>{sapor}</Typography>}
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
            // error={!!sapor}
            // helperText={sapor}
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
            {isLogin ? 'Connexion' : 'S\'identifier'}
          </Button>
        </form>
        <Box mt={2} textAlign="center">
          <Typography>
            {isLogin ? "Vous n'avez pas de compte ? " : "Avez-vous deja un compte? "}
            <Button color="primary" onClick={() => {setIsLogin(!isLogin);setCompany((prev)=>({...prev,login:!company['login']}))}}>
              {isLogin ? 'Creez-en un.' : 'Connectez-vous.'}
            </Button>
          </Typography>
        </Box>
      </Paper>
    </Box>
  );
};

export default LoginRegister;