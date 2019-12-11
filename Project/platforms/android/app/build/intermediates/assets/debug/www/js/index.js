document.addEventListener("deviceready", onDeviceReady, false);

// device APIs are available
function onDeviceReady() {
    firebaseApp();
}
function firebaseApp() {
    var login = document.getElementById("login");
    var signUp = document.getElementById("signUp");

    login.addEventListener("click",loginAuth,false);
    signUp.addEventListener("click",signUpAuth,false);


}

function loginAuth() {

}

function signUpAuth(){

}