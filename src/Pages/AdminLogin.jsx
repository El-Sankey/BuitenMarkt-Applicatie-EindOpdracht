import "./AdminLogin.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


export function AdminLogin() {
	const [form, setForm] = useState({ username: "", password: "" });
	const [error, setError] = useState("");
	const navigate = useNavigate();

	function handleLogin(e) {
		e.preventDefault();
		if (form.username === "admin" && form.password === "beheer123") {
			localStorage.setItem("isAdmin", "true");
			navigate("/admin");
		} else {
			setError("Ongeldige inloggegevens.");
		}
	}

	return (
		<form className="form" onSubmit={handleLogin}>
			<h2 className="form-title">Admin Login</h2>
			{error && <p style={{ color: "red" }}>{error}</p>}
			<label>
				Gebruikersnaam:
				<input
					type="text"
					value={form.username}
					onChange={(e) => setForm({ ...form, username: e.target.value })}
					required
				/>
			</label>
			<label>
				Wachtwoord:
				<input
					type="password"
					value={form.password}
					onChange={(e) => setForm({ ...form, password: e.target.value })}
					required
				/>
			</label>
			<button type="submit">Inloggen</button>
		</form>
	);
}
export default AdminLogin;