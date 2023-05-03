import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';

interface ProtectedRouteInterface {
	children: JSX.Element;
}

const ProtectedRoute: React.FC<ProtectedRouteInterface> = (props) => {
	const [isLoggedIn, setIsLoggedIn] = useState<boolean>(true);

	const checkUser = async () => {
		let res = localStorage.getItem('loggedIn');
		if (!res) {
			setIsLoggedIn(false);
		} else {
			setIsLoggedIn(true);
		}
	};

	useEffect(() => {
		checkUser().catch(console.error);
	}, []);

	return isLoggedIn ? props.children : <Navigate to="/login" replace />;
};

export default ProtectedRoute;
