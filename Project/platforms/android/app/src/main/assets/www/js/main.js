var logOut = document.getElementById("logout");
logOut.addEventListener("click",logOutFunc,false);


function logOutFunc() {
    console.log("yes");
    firebase.auth().signOut().then(function () {
        window.location.href = "index.html";
    });
}