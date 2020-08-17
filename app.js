// GET Longitude and Lattitude from geolocation
window.addEventListener('load', () => {
    let long;
    let lat;

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
            long = position.coords.longitude;
            lat = position.coords.latitude;
        });
    } else {
        h1.textContent = "Hey please enable your geolocation or maybe your browser doesn't allow it"
    }
});