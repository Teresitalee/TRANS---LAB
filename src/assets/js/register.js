function registerWithFirebase() {
  const emailValue = document.getElementById('email').value;
  const passwordValue = document.getElementById('password').value;
  
  firebase.auth().createUserWithEmailAndPassword(emailValue, passwordValue) .then(() => {

    console.log('Usuario ha sido creado con éxito');

    window.location.href = '/src/index.html';

  })

    .catch((error) => {

      console.log('Error de firebase > Código > ' + error.code);

      console.log('Error de firebase > Mensaje > ' + error.message);

    });

}

const regist = document.getElementById('redirectRegistry');

regist.addEventListener('click', () => {
  window.location = '/src/register.html';

});

