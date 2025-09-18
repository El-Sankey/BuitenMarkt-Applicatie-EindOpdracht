import './App.css';
import { useContext, useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './Components/Navbar.jsx';
import Home from './Pages/Home.jsx';
import Profile from './Pages/Profile.jsx';
import SignIn from './Pages/Sign-in.jsx';
import SignUp from './Pages/Sign-up.jsx';
import AdminPage from './Pages/AdminLogin.jsx';
import NotFoundPage from './Pages/Not_found_404.jsx';
import AuthContext from './Components/AuthContext.jsx';

function App() {
  const { isAuth } = useContext(AuthContext);
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => setDarkMode((v) => !v);

  const handleContactSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <Navbar toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={isAuth ? <Profile /> : <Navigate to="/signin" />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/admin" element={<AdminPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
      <main>

      </main>
      <footer>
        <div className="section-4">
          <form id="Contact-form" onSubmit={handleContactSubmit}>
            <h2 className="form-h2">Let's work together</h2>
            <p>Have a question? Need a quote? Let us know!</p>

            <label htmlFor="user-name-field"><span className="name">Name</span></label>
            <input className="input-Name" type="text" name="Name" id="user-name-field" placeholder="Naam"/>

            <label htmlFor="e-mail-field"><span className="email">Email</span></label>
            <input className="input-Email" type="text" name="Email" id="e-mail-field" placeholder="Email"/>

            <label htmlFor="message-field"><span className="message">Message</span></label>
            <textarea className="input-Message" id="message-field" name="Message" placeholder="Message" cols="100" rows="10" />

            <span className="span-btn">
              <button className="form-btn" type="submit">SEND</button>
              <div className="div-btn"> </div>
            </span>
          </form>
        </div>
      </footer>
    </>
  )
}

export default App;
