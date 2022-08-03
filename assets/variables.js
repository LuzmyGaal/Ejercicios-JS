//Mejores prácticas

//camelCase
//Utilizar mayúsculas en la mitad de nuestras variables
//variableTriángulo, miNombre, miEdad, etc

//Palabras reservadas
//No usar palabras reservadas para declarar una variable
//if, return, true, false, for, while, let, var, etc...

//Seguir un standard personal

//Pueden contener números, letraas, guión bajo, símbolo de dólar
var a;
var a1;
var a_Nombre;
var a$Direccion;

//Declaracion de variables
//Type number
var edad = 19;
var peso = 49;

//Type Boolean
var hambre = true;
var bateria = false;

//Type String
var nombre ="Luzmy";
var dir ="Guerrero";
var nacionalidad ="Mexicana";

//Type null
var ganasDeBibir= null;
var nineros = null;

//Variables declaradas con un mismo valor
var x, y , z = 4;

//Variables underfined
var xx, yy, zz;

//Variable tres=4
// var dos = tres
// var uno = dos
var uno = dos = tres = 4;

// Escribir en una sola línea variable undefined de nuestro carrito de compras
var leche, cereal, mostaza, pan, mayonesa, mantequilla, jamón;



//typeOf();
//Nos indica el tipo de dato al que pertenece nuestra variable

var a = "2";
typeof(a);
//number

var b = "2";
typeof(b);
//string

var c = "true";
typeof(c);
//boolean

var d = null;
typeof(d);
//object < Object de JavaScript

// isNaN() es una función que nos permite verificar si un dato
// es o no es un número


//NaN es tal cual un tipo de dato de JavaScript
isNaN(NaN);
//true

var e = NaN;
isNaN(e);
//true
typeof(e);
//number

//Nueva forma de declarar variables
var a = 1;

//Nos permite modificar su valor actual sin restricciones
let a = 1;


//constante
//Es una variable con un dato que no va a cambiar 
const a =3;
//variables constantes deben mantenerse con un solo valor
//No es posible cambiarles el valor posterior a su declaración

//arrays
const carros = ["BMW", "Volvo", "Mercedes", "Ford"];
const carritoCompras = ["Leche", "Tortillas", "Mango", "Maruchan", "Aguacate", "Sandia", "Queso", "Sabritas", "Oreo", "Piña", "Chachitos", "Pollo", "Jamon", "Harina", "Mantequilla", "Chocolate", "Wafflera Plaza Sesamo", "Nutella", "Fresas", "Servilletas", "Xbox Series X"];

const combinacion = [1, "Hola", null, "5"];



//ejercicio 1 

//boolean:
var tengoSueño = true;
var tengoHambre = true;
var cansada = true;
var macota = true;
var tengo18 = false;
var vivoSola = false;
var tengoAmigos = false;
var miedoAlMar = true;
var quisieraSerPiloto = true;
var narizQuebrada = true;

//string:
var nombre = "Luzmy";
var segundoNombre = "Aylin";
var apellido = "García";
var estado = "Guerrero";
var ciudad = "Chilpancingo";
var colorPelo = "Cafe obscuro";
var colorFav = "Negro"
var comidaFav = "sushi";
var nombreMascota = "macarena"
var colonia = "sedue"


//number:
var edad = 19;
var cumpleaños = 0905;
var peso = 49;
var estatura = 1.52;
var perrxs = 1;
var hermanos = 1;
var peces = 10;
var sudaderas = 4;
var pantalones = 10;
var blusas = 30;

