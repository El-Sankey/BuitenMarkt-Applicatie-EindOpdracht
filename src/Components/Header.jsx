import './Header.css';
import DarkModeToggle from './DarkModeToggle';
import Navbar from "./Navbar.jsx";


function Header() {

	return (
		<header className="header">
			<h1 className="header-title">🌿 Welkom op de Markt 🌿</h1>
			<DarkModeToggle />
			<Navbar />
		</header>
	);
}
export default Header;
