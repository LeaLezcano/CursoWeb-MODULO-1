function ParImpar(numero) {
numero = parseFloat(numero);
    if (isNaN(numero)) {
        return "No has introducido un número";
    } else if (numero % 2 == 0) {
        return "PAR"
    } else {
        return "IMPAR"
    }
}
var numero = prompt("escriba un número");
var resultado = ParImpar(numero);
alert("El número que has ingresado es " +numero+ " y es " +resultado);

