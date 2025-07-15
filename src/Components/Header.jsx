import './Header.css';
import DarkModeToggle from './DarkModeToggle';


function Header() {

	return (
		<header className="header">
			<h1 className="header-title">🌿 Welkom op de Markt 🌿</h1>
			<DarkModeToggle />
		</header>
	);
}
export default Header;
