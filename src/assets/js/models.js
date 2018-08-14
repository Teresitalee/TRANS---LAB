// inicio se sesión con coneccion a FIREBASE
function loginWithFirebase() {
    const emailValue = email.value;
    const passwordValue = password.value;
    firebase.auth().signInWithEmailAndPassword(emailValue, passwordValue)
        .then(() => {
            console.log("Usuario inició sesión con éxito");
            window.view.menu();
        })
        .catch((error) => {
            console.log("Error de firebase > Código > " + error.code); //error.code nos mostrará el código de error para informarnos qué pasó
            console.log("Error de firebase > Mensaje > " + error.message); //error.message nos mostrará el mensaje de firebase del mismo error

        });

}

// inicio de Registro de usuario , y conectando a FIREBASE
function registerWithFirebase() {
    window.validateEmailAndPassword();
    const emailValue = email.value;
    const passwordValue = password.value;

    firebase.auth().createUserWithEmailAndPassword(emailValue, passwordValue)

        .then(() => {
            console.log("Usuario creado con éxito");
            window.location.href = 'index.html'
        })
        .catch((error) => {
            console.log("Error de firebase > Código > " + error.code);
            console.log("Error de firebase > Mensaje > " + error.message);
        });
}

//  ver saldo
function getInfoBip () {
    let bipnum = document.getElementById('saldoBip').value;
    let url = `https://bip-servicio.herokuapp.com/api/v1/solicitudes.json?bip=${bipnum}`;
    fetch(url)
        .then(response => response.json())
        .then(bipInfo => {
        verSaldo(bipInfo);
        console.log(bipInfo);
        })
        .catch(e => {
            console.log(e);
        });
        function verSaldo(bipInfo){
            

        }
        }
    
