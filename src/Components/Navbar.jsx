import './Navbar.css';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from './AuthContext.jsx';

function Navbar({DarkMode, darkMode}) {
	const { isAuth, logout } = useContext(AuthContext);

	return (
		<nav>
			<Link to="/">Home</Link>
			{isAuth ? (
				<>
					<Link to="/profile">Profiel</Link>
					<button onClick={logout}>Uitloggen</button>
				</>
			) : (
				<>
					<Link to="/signin">Inloggen</Link>
					<Link to="/signup">Registreren</Link>
				</>
			)}
			<div className="nav-left">
				<a href="#">Home</a>
				<a href="#">Kramen</a>
				<a href="#">Over</a>
			</div>
			<div className="nav-right">
				<a href="#">Login</a>
				<a href="#">Registreren</a>
				<button
					className="toggle-btn"
					onClick={DarkMode}
					aria-pressed={darkMode}
					title="Toggle dark mode"
				>
					{darkMode ? '☀️' : '🌙'}
				</button>
			</div>
		</nav>
	);
}

export default Navbar;
