const USERS_KEY = "users";
const SESSION_KEY = "session";

export function signupUser({ email, password, role = "user" }) {
	const users = JSON.parse(localStorage.getItem(USERS_KEY) || "[]");
	if (users.some(u => u.email === email)) {
		return { error: "E-mailadres al geregistreerd" };
	}
	users.push({ email, password, role, createdAt: Date.now() });
	localStorage.setItem(USERS_KEY, JSON.stringify(users));
	return { success: true };
}

export function loginUser({ email, password }) {
	const users = JSON.parse(localStorage.getItem(USERS_KEY) || "[]");
	const user = users.find(u => u.email === email && u.password === password);
	if (!user) return { error: "Onjuiste inloggegevens" };
	localStorage.setItem(SESSION_KEY, JSON.stringify({ email: user.email, role: user.role }));
	return { success: true, user: { email: user.email, role: user.role } };
}

export function logoutUser() { localStorage.removeItem(SESSION_KEY); }
export function getSession() { return JSON.parse(localStorage.getItem(SESSION_KEY) || "null"); }
export function isAdmin() { return getSession()?.role === "admin"; }
