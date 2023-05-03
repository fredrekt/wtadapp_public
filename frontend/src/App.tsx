import React from 'react'
import './App.scss';
import LoginPage from './pages/login';
import { Route, Routes } from 'react-router-dom';
import DashboardPage from './pages/dashboard';
import ProtectedRoute from './utils/ProctectedRoute';
import RegisterPage from './pages/register';

const App: React.FC = () => {
  return (
    <>
      <Routes>
        <Route path="/login" index element={<LoginPage/>} />
        <Route path="/register" index element={<RegisterPage/>} />
				<Route path="/" index element={
          <ProtectedRoute>
            <DashboardPage />
          </ProtectedRoute>
        } />
      </Routes>
    </>
  )
}

export default App