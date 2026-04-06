function getRandomInRange(from, to, fixed) {
    return (Math.random() * (to - from) + from).toFixed(fixed) * 1;
}

let lat1 = getRandomInRange(30,35,3);
let lon1 = getRandomInRange(-90,-100,3);

let lat2 = getRandomInRange(30,35,3);
let lon2 = getRandomInRange(-90,-100,3);

let lat3 = getRandomInRange(30,35,3);
let lon3 = getRandomInRange(-90,-100,3);


function generateCoords(lat,lon,id){
    fetch(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lon}&localityLanguage=en`)
        .then(response => response.json())
        .then(data => {
            document.getElementById(id).innerText = 
                `Marker ${id}: Latitude: ${lat} Longitude: ${lon} 
                    Locality: ${data.city || data.locality}`;
        });
}

// from leaflet website
function loadMap(){
    var map = L.map('map').setView([33,-95],5);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

    L.marker([lat1, lon1]).addTo(map);
    L.marker([lat2, lon2]).addTo(map);
    L.marker([lat3, lon3]).addTo(map);

    generateCoords(lat1,lon1,"1");
    generateCoords(lat2,lon2,"2");
    generateCoords(lat3,lon3,"3");
}

window.onload = loadMap();

