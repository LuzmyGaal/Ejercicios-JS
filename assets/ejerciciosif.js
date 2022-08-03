//numero par o impar
let numero;
numero= prompt("Ingresa tu numero");
    if(numero%2 == 0){
        alert("El numero " + numero + " es Par");
    }else{
        alert("El numero " + numero + " es Impar");
    }



// Verificar edad
var añoNacimiento = prompt("Ingresa tu año de nacimiento");

if (añoNacimiento <= 0 || añoNacimiento >= 2022) {
    alert("perate Aun no naces ");
} else if (añoNacimiento >= 1900 && añoNacimiento < 2004) {
    alert("Tas wrandote");
} else {
    alert("Tas chiquito");
}


