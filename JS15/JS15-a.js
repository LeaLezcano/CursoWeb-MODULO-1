function calcular() {
    var bebida = document.getElementsByTagName("LI");
    console.log(bebida);
    if (bebida[i]==bebidaelegida){
            alert("Tu elección es: " +bebida[i].innerHTML);
    }
}
var bebidaelegida = prompt("elija un numero");
calcular(bebidaelegida);