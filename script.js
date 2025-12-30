function initMap() {
  const location = { lat: 12.9716, lng: 77.5946 }; // Example: Bangalore

  const map = new google.maps.Map(document.getElementById("map"), {
    center: location,
    zoom: 12,
    mapId: "YOUR_MAP_ID"
  });

  new google.maps.Marker({
    position: location,
    map: map,
    title: "My Location"
  });
}