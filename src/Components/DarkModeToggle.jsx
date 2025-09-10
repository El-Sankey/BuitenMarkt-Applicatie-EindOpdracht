import './DarkModeToggle.css';
import {useState} from "react";

function DarkMode() {
	const [dark, setDark] = useState(() => localStorage.getItem("theme") === "dark");

    return (
        <>
			<div>
				<button onClick={() => setDark(!dark)}>
					{dark ? "☀️ licht" : "🌙 donker"}
				</button>
			</div>
		</>
    )
}

export default DarkMode;
