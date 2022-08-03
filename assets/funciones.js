//Mejores prácticas
//Simplificar func. lo más que se pueda

// 1. Utilizar keyword function
// 2. nombrar nuestra funcion
// 3. Utilizar () y abrir y cerrar la funcion { }

function myFunction() {
    //Aqui va el cuerpo de la función
    console.log("Hola mundo");

}

myFunction();

function myName() {
    let name = "Luzmy García";
    console.log(name);
}

//myName();
//Variable con scope local
function scopeFunction() {
    let local = "esto se encuentra dentro de la funcion";
    console.log(local);
}

//scopeFunction();
//console.log(local);

var nombre = "Luzmy García";

function globalScope() {
    console.log(nombre);
}

//globalScope();

//Scope de variables
//LET
//Scope global, local

//VAR
//Scope global, local
//Hoisting: no se puede utilizar o invocar antes de declararla. Aparece como underfined.
console.log(x);
var x = "hola";

//CONST
//Scope global, local
//Hoisting: No se puede utilizar. No existe para nuestro interprete de JS.
//console.log(c);
const c = "Hoisting const";




//input
const miNombre = "Luzmy";

function fiuFiu(x) {
    console.log(x);
}

//parametro declarado en variable
fiuFiu(miNombre);

//parametro aleatorio
fiuFiu("Luzmy Gracía");
fiuFiu(2);

//function con mas de 1 parametro
function dosParam(x,y) {
    console.log(x + y);
   
}

//invocacion con dos parametros aleatorios
dosParam("Hola", "Mundo");

function tresParam(x, y, z) {
    console.log(x + y + z);
}

tresParam("Hola", "Soy", "Luzmy");

////////////////////////////////////////////////////////////


//OUPUT

function out() {
    let x = "hola";
    return x;
}

console.log(out());

const receive = out();

//console.log(receive);

function areaRectangulo(b, a) {
    var resultado = b * a;
    return resultado;
}

console.log(areaRectangulo(6, 3));

function areaTriangulo(b, a) {
    var resultado = b * a / 2;
    return resultado;
}

console.log( areaTriangulo(8, 4));
