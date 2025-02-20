import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import './App.css';
import LoginRegister from './auth/LoginRegister';
import Home from './components/Home';
import Header from './components/Header';
import { ThemeProvider } from '@mui/material/styles'
import theme from './theme';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [rentals, setrentals] = useState([]);
  const [user, setUser] = useState({})

  useEffect(() => {
    const storedrentals = localStorage.getItem('rentals');
    if (storedrentals) {
        setrentals(JSON.parse(storedrentals));
    }
    const token = localStorage.getItem('token');
    setIsLoggedIn(!!token)
  }, []);

  const handleLogin = (token,user) => {
    setUser(user)
    localStorage.setItem('token', token);
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setUser({})
    localStorage.removeItem('token');
    setIsLoggedIn(false);
  };

  const addRent = (newRent) => {
    const updatedrentals = [...rentals, newRent];
    setrentals(updatedrentals);
    localStorage.setItem('rentals', JSON.stringify(updatedrentals));
  };

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Header isLoggedIn={isLoggedIn} user={user} onLogout={handleLogout} />
        <Routes>
          <Route path="/login" element={<LoginRegister onLogin={handleLogin} />} />
          <Route path="/" element={isLoggedIn ? <Home rentals={rentals} addRent={addRent} /> : <Navigate to="/login" />} />
          <Route path="*" element={<Navigate to={isLoggedIn ? "/" : "/login"} />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
