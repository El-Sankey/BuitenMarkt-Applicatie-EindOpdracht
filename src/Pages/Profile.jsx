import './Profile.css';
import React from 'react';
import { Link } from 'react-router-dom';

function Profile() {
	return (
		<>
			<h1>Profielpagina</h1>
			<section>
				<h2>Gegevens</h2>
				<p><strong>Gebruikersnaam:</strong> hardcoded-test</p>
				<p><strong>Email:</strong> hardcoded@test.com</p>
				<p><strong>Wachtwoord:</strong> Enter.welkom</p>
			</section>
			<section>
				<h2>Strikt geheime profiel-content</h2>
				<p>

				</p>
			</section>
			<p>Terug naar de <Link to="/">Homepagina</Link></p>
		</>
	);
}

export default Profile;