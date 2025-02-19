import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import './App.css';
import LoginRegister from './auth/LoginRegister';
import Home from './components/Home';
import Header from './components/Header';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState({})

  useEffect(() => {
    const storedUsers = localStorage.getItem('users');
    if (storedUsers) {
        setUsers(JSON.parse(storedUsers));
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

  const addUser = (newUser) => {
    const updatedUsers = [...users, newUser];
    setUsers(updatedUsers);
    localStorage.setItem('users', JSON.stringify(updatedUsers));
  };

  return (
    <Router>
      <Header isLoggedIn={isLoggedIn} user={user} onLogout={handleLogout} />
      <Routes>
        <Route path="/login" element={<LoginRegister onLogin={handleLogin} />} />
        <Route path="/" element={isLoggedIn ? <Home users={users} addUser={addUser} /> : <Navigate to="/login" />} />
        <Route path="*" element={<Navigate to={isLoggedIn ? "/" : "/login"} />} />
      </Routes>
    </Router>
  );
}

export default App;
