window.onload

var saldo = document.getElementById ('showBip')
function saldoTotal(){
    
    fetch('http://bip-servicio.herokuapp.com/api/v1/solicitudes.json?bip=123456')
    .then(res => res.json())
    .then (data => {
        console.log(data.id)
        console.log(data.fechaSaldo)
        console.log(data.estadoContrato)
        console.log(data.saldoTarjeta)
        

        showBip.innerHTML = `
        <div class="container">
        <div class="row mostrarSaldo ">
        <div class="col-sm-12 text-center my-5">
        <p class="titulo ml-1">${data.saldoTarjeta}</p>
        <p class="titulo" >${data.estadoContrato}</p>
        <p class="titulo" >${data.fechaSaldo} </p>
        </div>
        </div>
        </div>
        `

    })
}


  
