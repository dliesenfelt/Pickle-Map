//object for map
const myMap = {
	coordinates: [],
	businesses: [],
	map: {},
	markers: {},

    // creates the map 
	makeMap() {
		this.map = L.map('map', {
		center: this.coordinates,
		zoom: 11,
		});
		//add map tiles
		L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
		attribution:
			'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
		minZoom: '15',
		}).addTo(this.map)
		
        //User Location
		const marker = L.marker(this.coordinates)
		marker
		.addTo(this.map)
		.bindPopup('This is You!')
		.openPopup()
	},
}

//Geo-Location method
async function getCoords(){
	const pos = await new Promise((resolve, reject) => {
		navigator.geolocation.getCurrentPosition(resolve, reject)
	});
	return [pos.coords.latitude, pos.coords.longitude]
}
//updates map with user Geo-Location
window.onload = async () => {
	const coords = await getCoords()
	myMap.coordinates = coords
	myMap.makeMap()
}
//gets user selection of  what local places they would like to see in the current area
document.getElementById('submit').addEventListener('click', async (event) => {
	event.preventDefault()
	let places = document.getElementById('places').value
})