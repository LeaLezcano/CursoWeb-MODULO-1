let bebida = document.getElementsByTagName("li");
function calcular() {
    let bebidaelegida = Number(document.getElementById("cantidad").value -1);
    //bebidaelegida=parseInt(bebidaelegida)
    document.getElementById("resultado").innerHTML = bebida[bebidaelegida].innerHTML;
}
/*var bebidaelegida = document.getElementById("cantidad");
calcular(bebidaelegida);*/