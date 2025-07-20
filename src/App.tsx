import React, { useState } from 'react';
import { useAppSelector } from '@hooks/useAppSelector';
import { useAppDispatch } from '@hooks/useAppDispatch';
import { logout } from '@features/auth/authSlice';
import LoginPage from './components/auth/LoginPage';
import Dashboard from './components/dashboard/Dashboard';

function App() {
  const [showDashboard, setShowDashboard] = useState(false);
  const { isAuthenticated } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();

  const handleLoginSuccess = () => {
    setShowDashboard(true);
  };

  const handleLogout = () => {
    dispatch(logout());
    setShowDashboard(false);
  };

  if (showDashboard || isAuthenticated) {
    return <Dashboard onLogout={handleLogout} />;
  }

  return <LoginPage onLoginSuccess={handleLoginSuccess} />;
}

export default App
