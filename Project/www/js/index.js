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

    var email = document.getElementById("email").value;
    var pswd = document.getElementById("pswd").value;


    if (email.length < 4) {
        alert('Please enter an email address.');
        return;
    }

    if (pswd.length < 4) {
        alert('Please enter a password.');
        return;
    }

    firebase.auth().signInWithEmailAndPassword(email, pswd)
        .then(function(firebaseUser) {
            console.log('user logged in!');
            window.location.href = "mainPage.html";
        })
        .catch(function(error) {
                var errorCode = error.code;
                var errorMessage = error.message;

                if (errorCode === 'auth/wrong-password') {
                    alert('Wrong password.');
                }
                else {
                    alert(errorMessage);
                }
            }
        );
}

function signUpAuth(){    var email = document.getElementById("email").value;
    var pswd = document.getElementById("pswd").value;

    if (email.length < 4) {
        alert('Please enter an email address.');
        return;
    }

    if (pswd.length < 4) {
        alert('Please enter a password.');
        return;
    }

    firebase.auth().createUserWithEmailAndPassword(email, pswd)
        .then(function(firebaseUser) {
            console.log('user registered!');
            window.location.href = "mainPage.html";
        })
        .catch(function(error) {
                var errorCode = error.code;
                var errorMessage = error.message;

                if (errorCode == 'auth/weak-password') {
                    alert('The password is too weak.');
                }
                else {
                    alert(errorMessage);
                }
                console.log(error);
            }
        );

}



