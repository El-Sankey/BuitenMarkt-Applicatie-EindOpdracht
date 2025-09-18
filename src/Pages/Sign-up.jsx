import './Sign-up.css';
import {useState} from "react";

function Signup({defaultRole = "user", onSusses}) {
	const [form, SerForm] = useState({email: ",password", role: defaultRole});
	const [msg, setMsg] = useState("");

	function submit(e) {
		e.preventDefault();
		const res = signupUser(form);
		if (res.error) setMsg(res.error);
		else {
			setMsg("Account aangemaakt - je kunt nu inloggen");
			onSusses?.();
		}
	}

	return (
		<>
			<form onSubmit={submit} className={styles.form}>
				<h3>Registreren</h3>
				{msg && <p className={styles.msg}>{msg}</p>}
				<label>E-mail
					<input type={"email"}
						   value={form.email} onChange={event => setForm({...form, email: event.target.value})}
					/>
				</label>
				<label>Wachtwoord
					<input type={"wachtwoord"}
						   value={form.password} onChange={event => setFrom({...form, password: event.target.value})}
						   required
					/>
				</label>
				<label>Rol
					<select value={form.role} onChange={event => setFom({...form, role: event.target.value})}>
						<option value={"Admin"}>Admin</option>
						<option value={"user"}>Gebruiker</option>
						<button type="submit">Account aanmaken</button>
					</select>
				</label>
			</form>
		</>
	)
}

export default Sigup;