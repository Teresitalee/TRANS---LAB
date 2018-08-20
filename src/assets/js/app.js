window.onload

var saldo = document.getElementById ('showBip')
function saldoTotal(){
    
    fetch('http://bip-servicio.herokuapp.com/api/v1/solicitudes.json?bip=123456')
    .then(res => res.json())
    .then (data => {
        console.log(data.id['2'].saldoTarjeta)
        

        showBip.innerHTML = `
        <div class="container">
        <div class="row mostrarSaldo ">
        <div class="col-sm-12 text-center my-5">
        <p class="titulo ml-1" > Saldo Contable  $ </p>
        <p class="titulo" > Estado Contrato:</p>
        <p class="titulo" > Fecha Saldo: </p>
        </div>
        </div>
        </div>
        `

    })
}


  
