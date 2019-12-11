// Wait for device API libraries to load
document.addEventListener("deviceready", onDeviceReady, false);

// device APIs are available
function onDeviceReady() {    
    useGeolocation();
}

function useGeolocation() {
    // bind button events
    var getGeolocationButton = document.getElementById("CheckLocation");
    getGeolocationButton.addEventListener("click", getGeolocation, false);

    

    // create success and error callbacks for geolocation events
    var onSuccess = function(position) {
        alert('Latitude: '          + position.coords.latitude          + '\n' +
              'Longitude: '         + position.coords.longitude         + '\n' +
              'Altitude: '          + position.coords.altitude          + '\n' +
              'Accuracy: '          + position.coords.accuracy          + '\n' +
              'Altitude Accuracy: ' + position.coords.altitudeAccuracy  + '\n' +
              'Heading: '           + position.coords.heading           + '\n' +
              'Speed: '             + position.coords.speed             + '\n' +
              'Timestamp: '         + position.timestamp                + '\n');
    };

    function onError(error) {
        alert('code: '    + error.code    + '\n' +
              'message: ' + error.message + '\n');
    }

    function getGeolocation() {
        var options = { maximumAge: 5000, timeout: 5000, enableHighAccuracy: true };
        navigator.geolocation.getCurrentPosition(onSuccess, onError, options);
    }

   
}