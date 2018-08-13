
window.validateEmailAndPassword = () => {
    
    emailRegex = /^[-\w.+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
    if (emailRegex.test(email.value)) {
      console.log("is valid");
      return true;
    } else {
      console.log("is invalid");
      return false;
    }

    let password = document.getElementById('password').value;
    if (password.length <= 8) { // Solo acepta hasta 8 carácteres máximo
        console.log('valid pass');
        return true;
    } else {
        console.log('invalid pass');
        return false;       
    }
};