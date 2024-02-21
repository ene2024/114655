var articuloInput = document.getElementById('articuloTXT');
var montoInput = document.getElementById('montoTXT');

var articulo = '';
var monto = 0;


var total = 0;


const seccionTicket = document.getElementById('ticket');
//Agregar
function agregar() {
    
    articulo = articuloInput.value;
//parseInt: Para convertir valores String en Numericos
    monto = parseInt(montoInput.value); 

    total = total + monto;

    //Crear Elemento HTML

    let elementoTicket = document.createElement('p');

    elementoTicket.innerHTML = articulo + '......... $' + monto;

    //inserta elemento HTML en la pagina
    seccionTicket.appendChild(elementoTicket);

    //limpia campos de texto
    limpiar();
}

function limpiar() {
    articuloInput.value = '';
    montoInput.value = '';
}