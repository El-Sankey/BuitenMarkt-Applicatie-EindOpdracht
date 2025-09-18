import './AuthContext.css'
import React, { createContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';


const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
	const [isAuth, setIsAuth] = useState(false);
	const navigate = useNavigate();

	const login = () => {
		setIsAuth(true);
		console.log("Gebruiker is ingelogd!");
		navigate('/profile');
	};

	const logout = () => {
		setIsAuth(false);
		console.log("Gebruiker is uitgelogd!");
		navigate('/');
	};

	return (
		<AuthContext.Provider value={{ isAuth, login, logout }}>
			{children}
		</AuthContext.Provider>
	);
};
export default AuthProvider;