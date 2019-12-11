// Wait for device API libraries to load
document.addEventListener("deviceready", onDeviceReady, false);

// device APIs are available
function onDeviceReady() {
    // Battery Status API Usage
    window.addEventListener("batterystatus", onBatteryStatus, false);
    window.addEventListener("batterylow", onBatteryLow, false);
    window.addEventListener("batterycritical", onBatteryCritical, false);

    // Network API Usage
    document.addEventListener("online", networkIsOnline, false);
    document.addEventListener("offline", networkIsOffline, false);

}

// Battery status event callbacks
function onBatteryStatus(status) {
    var batteryStatusDiv = document.getElementById('battery-status');
    batteryStatusDiv.innerHTML = 'Level: ' + status.level + ' isPlugged: ' + status.isPlugged;
}

function onBatteryLow(status) {
    alert("Battery Level Low " + status.level + "%");
}

function onBatteryCritical(status) {
    alert("Battery Level Critical " + status.level + "%\nRecharge Soon!");
}

// Network status callbacks
// in emulator or physical device: use airplane mode to test these events!
function networkIsOnline() {
    alert("Network is online! \nConnection Type: " + navigator.connection.type);
}

function networkIsOffline() {
    alert("Network is offline!");
}











var networkStatus = document.getElementById("network");
networkStatus.addEventListener("click", onlineOffline, false);
//netwrok offline,online events

function onlineOffline() {
    navigator.notification.alert(navigator.connection.type)
}