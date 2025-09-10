import './AdminLogin.css';
import React, {useContext, useState} from 'react';
import {Link} from 'react-router-dom';
import {AuthContext} from "../Components/AuthContext.jsx";


function SignIn() {
	const {login} = useContext(AuthContext);
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const handelSubmit = (e) => {
		e.preventDefault();
		login(email);
	};

	return (
		<>
			<h1>Inloggen</h1>
			<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab alias cum debitis dolor dolore fuga id
				molestias qui quo unde?</p>

			<form onSubmit={handelSubmit}>
				<label>Emailadres:
					<input type="email"
						   placeholder="voer Emailadres in"
						   value={email}
						   onChange={(e) => {
							   setEmail(e.target.value);
						   }}
					/>
				</label>
				<label>Wachtwoord:
					<input type="password"
						   placeholder="voer Wachtwoord in"
						   value={password}
						   onChange={(e) => {
							   setPassword(e.target.value);
						   }}
					/>
				</label>
				<br/>
				<button>Inloggen</button>
			</form>

			<p>Heb je nog geen account? <Link to="/signup">Registreer</Link> je dan eerst.</p>
		</>
	);
}

export default SignIn;


// const SignIn = () => {
// 	const { login, isAuth } = useContext(AuthContext);
// 	const [email, setEmail] = useState('');
//
// 	return (
// 		<div>
// 			{isAuth ? (
// 				<p>Je bent al ingelogd.</p>
// 			) : (
// 				<>
// 					<h2>Inloggen</h2>
// 					<input
// 						type="email"
// 						placeholder="Voer je e-mailadres in"
// 						value={email}
// 						onChange={(e) => setEmail(e.target.value)}
// 					/>
// 					<button onClick={() => login(email)}>Inloggen</button>
// 				</>
// 			)}
// 		</div>
// 	);
// };
//
// export default SignIn;

