// API fetch call
export function getCurrWeatherByLatLng(lat, lng) {
	// define endpoint
	const endpoint = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=f610830a383051d4b21cd59f0ad5f08a`;

	return fetch(endpoint, { mode: 'cors' }).then((response) => response.json());
}
