var miVariable = 5; //numerico

var campoTexto = document.getElementById("miTxt");
var texto = ""; // campoTexto.value = "";

function miFuncion() {
    // alert(y);
    texto = campoTexto.value;
    alert(texto);
}

function limpiar(){
    campoTexto.value = "";
}