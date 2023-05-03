import React from 'react';
import './App.scss';
import LoginPage from './pages/login';
import { Route, Routes } from 'react-router-dom';
import DashboardPage from './pages/dashboard';
import ProtectedRoute from './utils/ProctectedRoute';
import RegisterPage from './pages/register';
import CustomersPage from './pages/customers';
import GeographicPage from './pages/geographic';
import CardFormatPage from './pages/cardFormat';
import PageFormatPage from './pages/pageFormat';
import SettingsPage from './pages/settings';
import HelpPage from './pages/help';
import MissingPage from './pages/missing';

const App: React.FC = () => {
	return (
		<>
			<Routes>
				<Route path="/login" index element={<LoginPage />} />
				<Route path="/register" index element={<RegisterPage />} />
				<Route
					path="/"
					index
					element={
						<ProtectedRoute>
							<DashboardPage />
						</ProtectedRoute>
					}
				/>
				<Route
					path="customers"
					element={
						<ProtectedRoute>
							<CustomersPage />
						</ProtectedRoute>
					}
				/>
				<Route
					path="card-format"
					element={
						<ProtectedRoute>
							<CardFormatPage />
						</ProtectedRoute>
					}
				/>
				<Route
					path="page-format"
					element={
						<ProtectedRoute>
							<PageFormatPage />
						</ProtectedRoute>
					}
				/>
				<Route
					path="geographic"
					element={
						<ProtectedRoute>
							<GeographicPage />
						</ProtectedRoute>
					}
				/>
				<Route
					path="settings"
					element={
						<ProtectedRoute>
							<SettingsPage />
						</ProtectedRoute>
					}
				/>
				<Route
					path="help"
					element={
						<ProtectedRoute>
							<HelpPage />
						</ProtectedRoute>
					}
				/>
				<Route path="*" element={<MissingPage />} />
			</Routes>
		</>
	);
};

export default App;
