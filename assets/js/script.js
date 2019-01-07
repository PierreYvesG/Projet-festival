var mymap = L.map('map').setView([47.365544, 5.051554], 13);

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
maxZoom: 22,
attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
'<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
id: 'mapbox.streets'
}).addTo(mymap);

/* L.marker([47.365544, 5.051554]).addTo(mymap)
.bindPopup("<b>Access Code School</b>").openPopup();
var popup = L.popup();	
*/

var markers = L.markerClusterGroup({
iconCreateFunction: function(cluster) {
return L.divIcon({ 
html: cluster.getChildCount(), 
className: 'mycluster', 
iconSize: null 
});
}
});
markers.addLayer(L.marker([47.365544, 5.051554]));
markers.bindPopup("Test");
markers.addLayer(L.marker([47.365655, 5.051554]));
markers.addLayer(L.marker([47.6320408648, 6.1548458149]));
mymap.addLayer(markers);


var markers2 = L.markerClusterGroup({
iconCreateFunction: function(cluster) {
return L.divIcon({ 
html: cluster.getChildCount(), 
className: 'mycluster', 
iconSize: null 
});
}
});
markers.addLayer(L.marker([42.365555, 5.051554]));
markers.bindPopup("Glou glou");
markers.addLayer(L.marker([42.365666, 5.051554]));
markers.addLayer(L.marker([42.365644, 5.051664]));
mymap.addLayer(markers);

function onMapClick(e) {
popup
.setLatLng(e.latlng)
.setContent("You clicked the map at " + e.latlng.toString())
.openOn(mymap);
}

mymap.on('click', onMapClick);