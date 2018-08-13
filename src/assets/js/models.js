
// inicio se sesión con coneccion a FIREBASE
function loginWithFirebase() {
    const emailValue = email.value;
    const passwordValue = password.value;    
    firebase.auth().signInWithEmailAndPassword(emailValue, passwordValue)
        .then(()=>{
            console.log("Usuario inició sesión con éxito");
            window.view.menu();
        })
        .catch((error)=>{
            console.log("Error de firebase > Código > "+error.code); //error.code nos mostrará el código de error para informarnos qué pasó
            console.log("Error de firebase > Mensaje > "+error.message); //error.message nos mostrará el mensaje de firebase del mismo error
 
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
        console.log("Error de firebase > Código > "+error.code);
        console.log("Error de firebase > Mensaje > "+error.message);
     });
}

//  ver saldo
window.getInfoBip = () =>{
    let bipnum = document.getElementById('......').value;
    let url = `https://bip-servicio.herokuapp.com/api/v1/solicitudes.json?bip=${bipnum}`;
    fetch(url)
    .then(response => response.json())
    .then(bipInfo => {
        verSaldo(bipInfo);
    })
    .catch(e => {
        console.log(e);
    });
    let contsaldo = document.getElementById('...');
    let verSaldo = (bipInfo) => {
    contsaldo.innerHTML = '';
    for(let i in bipInfo){
        contsaldo.innerHTML = `
        


        `;
        }
    }
}


// Calcular tarifa
window.calcularTarifa = () =>{
    let bipnumber = document.getElementById('bipnumber').value;
    let url = `https://bip-servicio.herokuapp.com/api/v1/solicitudes.json?bip=${bipnumber}`;
    fetch(url)
    .then(response => response.json())
    .then(bipInfo => {
        
        verTarifa(bipInfo);
    })
    .catch(e => {
        console.log(e);
    });

    verTarifa = (bipInfo) => {
        let x = document.getElementById('selector').selectedIndex;
        let y = document.getElementsByTagName('option')[x].value;
        console.log(y);

        const box1 = document.getElementById('hidd');
        const box2 = document.getElementById('hidde');
        
        saldoActual = bipInfo["saldoTarjeta"].replace(/[$,.]+/g, "");     
        console.log("Tu saldo actual es: " + saldoActual);
        if (y == 1) {
            costoPasaje = 760;
            saldoFinal = saldoActual - costoPasaje;
            box1.innerHTML = '';
            box2.innerHTML = '';       
            for(let i in bipInfo){
            box1.innerHTML = `
            <div class="row">
               <div class="col-sm-6">
                  <div class="card">
                    <div class="card-body">
                        <p class="card-text">COSTO DE PASAJE</p>
                </div>
                <div class = "costoPasaje">
                  <div class="col-sm-6 algin-center id="costoPasaje">
                <p>$`+ costoPasaje +`</p> 
              </div>
            </div>
        </div>
    </div> `;

box2.innerHTML = `
<div class="row">
  <div class="col-sm-6">
    <div class="card">
      <div class="card-body">
         <p class="card-text">SALDO FINAL</p>
 </div>
  <div class = "costoPasaje">
   <div class="col-sm-6 algin-center id="costoPasaje">
 <p>$`+ saldofinal +`</p> 
</div>
</div>
</div>
</div>`;

            }}else if (y == 2){
                costopasaje = 680;
                saldofinal = saldoActual - costopasaje;
                box1.innerHTML = '';
                box2.innerHTML = '';
                for(let i in bipInfo){
                    box1.innerHTML = `<div class="row">
                    <div class="col-sm-6">
                       <div class="card">
                         <div class="card-body">
                             <p class="card-text">COSTO DE PASAJE</p>
                     </div>
                     <div class = "costoPasaje">
                       <div class="col-sm-6 algin-center id="costoPasaje">
                     <p>$`+ costoPasaje +`</p> 
                   </div>
                 </div>
             </div>
         </div>`;

         box2.innerHTML = `
         <div class="row">
         <div class="col-sm-6">
           <div class="card">
             <div class="card-body">
                <p class="card-text">SALDO FINAL</p>
        </div>
         <div class = "costoPasaje">
          <div class="col-sm-6 algin-center id="costoPasaje">
        <p>$`+ saldofinal +`</p> 
       </div>
       </div>
       </div>
       </div>`;
                }}
                else if(y == 3){
                    costoPasaje = 630;
                    saldofinal = saldoActual - costoPasaje;
                    box1.innerHTML = '';
                    box2.innerHTML = '';
                    for(let i in bipInfo){
                        box1.innerHTML = `
                        <div class="row">
                          <div class="col-sm-6">
                            <div class="card">
                              <div class="card-body">
                             <p class="card-text">COSTO DE PASAJE</p>
                     </div>
                     <div class = "costoPasaje">
                       <div class="col-sm-6 algin-center id="costoPasaje">
                     <p>$`+ costoPasaje +`</p> 
                   </div>
                 </div>
             </div>
         </div>`;

         box2.innerHTML = `
         <div class="row">
         <div class="col-sm-6">
           <div class="card">
             <div class="card-body">
                <p class="card-text">SALDO FINAL</p>
        </div>
         <div class = "costoPasaje">
          <div class="col-sm-6 algin-center id="costoPasaje">
        <p>$`+ saldofinal +`</p> 
       </div>
       </div>
       </div>
       </div>`;
                    }}};

    // visualizar email en el perfil
    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
          console.log(user)
          document.getElementById('correo').innerHTML = user.email;
          
        } else {
            console.log("No hay usuario logeado");
        }
      });

    // agregando tarjetas BIPS
    let currentUser = 0;
    firebase.auth().onAuthStateChanged(function getUser(user) {
    currentUser = user.uid;
    if (user) {
        console.log(currentUser);          
    } else {
        console.log("No hay usuario logeado");
    }

    firebase.database().ref().child(`users/` + currentUser + `/num`).on("child_added",
        function(data) {
            numberBip = data.val();
            console.log(numberBip);   

            let container = document.getElementById('numerosAgregados');
            let divrow = document.createElement('div');
            divrow.classList = 'row';
            let divcol = document.createElement('div');
            divcol.classList = 'contpp col s12';           
            let pcreator = document.createElement('p');
            let number = document.createTextNode(numberCard);
            pcreator.classList = 'numbercard';
            
            container.appendChild(divrow);
            divrow.appendChild(divcol);
            divcol.appendChild(pcreator);            
            pcreator.appendChild(number);
        })
});
        function addCard() {
          let add = document.getElementById("addNumInput").value;
          if (add == "") {
          alert("Ingrese numero de tarjeta bip")
          } else {
              firebase.database().ref(`users/` + currentUser).child(`num`).push(add);
        document.getElementById("addNumInput").value = ""; 
    }
};
    


             