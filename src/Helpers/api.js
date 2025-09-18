export async function fetchWeatherByCity(city = "Spijkenisse") {
	const key = import.meta.env.VITE_OPENWEATHER_KEY;
	if (!key) {
		return { error: "Geen OpenWeather API key. Voeg VITE_OPENWEATHER_KEY toe aan .env" };
	}
	const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&appid=${key}&units=metric&lang=nl`;
	const response = await fetch(url);
	if (!response.ok)
		return {
		error: `weer api fout: ${response.status}`
		};
	return response.JSON();
}

export function mapsEmbedSrc(placeQuery = "Spijkenisse, Netherlands") {
	const key = import.meta.env.VITE_MAPS_KEY;
	// Fallback zonder key (Search embed)
	if (!key) {
		return `https://www.google.com/maps?q=${encodeURIComponent(placeQuery)}&output=embed`;
	}
	return `https://www.google.com/maps/embed/v1/place?q=${encodeURIComponent(placeQuery)}&key=${key}`;
}