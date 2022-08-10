/* 

Arrays o arreglos

Definicion
Un arreglo o array es un conjunto de datos que se pueden almacenar en una sola variable.

Cuando tenemos una variable, la usamos para almacenar UN solo dato. 
En cambio, en un arreglo, guardamos MUCHOS datos a manera de lista.

Un array ya no es un tipo de dato primitivo, se considera un objeto porque es una estructura de datos


//Ejemplo 1 
let nombre = "Luzmy"; //Aquí se al,acena un solo dato
array = ["Luzmy", "Paulina", "Laura", "Ángel", "Adal"];

//Ejemplo de un array con diferentes tipos de datos
arrayAnimalitosDelBosque = ["Luzmy", "19", "true", "null", "underefined"];

-- formas de crear un array --

1.- Primera forma

Utilizando la palabra reservada "new Array". En esta primera forma nosotros creamos un array usando la palabra reservada new y el metodo Array para especificarle a nuestro navagador que queremos crear un array. Hasta este momento, este array esta vacio por que no tenemos ningun dato dentro del parentesis (que es donde vamos a guardar los datos).

var colores = new Array(3); //Esta forma nos permite crear un array con un numero de elementos especificado, pero aún no sabemos que datos va a guardar.

var colores = new Array("rojo", "verde", "azul"); //En este punto estamos creando el array y ya le asignamos los valores en las posiciones que queremos mostrar.


var colores = new Array(5);
var marcaDeColores = new Array("Mapita", "Prismacolor", "BlancaNieves", "Faber Castell", "Crayola")

2.- Segunda forma

La segunda forma se trata de crear el arreglo solo usando corchetes []. Esta forma es la mas usada para crear arreglos en JS. 

var marcaDeColores2 = ["Mapita", "Norma", "Vividel", "Faber Castell", "BlancaNieves"];



//Ejemplo de Arreglos
listaDePerritos = ["Chihuahua", "Colupoh", "Mestizos", "Callejeros", "Pug"];
console.log(listaDePerritos);

*/

listaDePaises = ["Australia", "Brasil", "Canadá", "Dinamarca", "España", "Finlandia", "Grecia", "Honduras", "Irak", "Japón", "Kenia", "Luxenburgo"];
console.log(listaDePaises);

listaDeSeries = ["Pretty Little Liars", "Gossip Girl", "OITNB", "Breaking Bad", "The Vampire Diaries", "¿Quién mató a Sara?", "Vis a Vis", "El juego de las llaves", "Madre solo hay dos"];
console.log(listaDeSeries);

listaDePeliculas = ["Eterno resplandor", "Amarte duele", "Cuestion de tiempo", "El infierno", "Crepusculo", "A la mala", "Bad Boys", "Inocencia interrumpida", "La propuesta"];
console.log(listaDePeliculas);

//Ejemplo de Arreglo 2
listaDelSuper = ["Leche", "Papitas", "Jabon", "Nachos", "Huevos"];
console.log(listaDelSuper)

console.log("El producto en la posicion 1 es : " + listaDelSuper[1]);
console.log("El producto en la posicion 4 es : " + listaDelSuper[4]);
console.log("El producto en la posicion 2 es : " + listaDelSuper[2]);
console.log("El producto en la posicion 6 es : " + listaDelSuper[6]);

//Encontramos que al tratar de seleccionar un elemento de nuestro que no existe, aparecera el mensaje undefined. Esto es porque la gran ventaja que tienen los arreglos en JS es que podemos crecer su tamanio cuando nosotros queramos. Para esto, el arreglo se prepara por si en algun momento recibe mas informacion.

/*

Array asociativo

Son arreglos donde cada elemento esta asociado no solo con su indice, sino que tambien esta asignado a un identificador.

Sintaxis de un arreglo asociativo

*/

//Ejemplo de una Ecommerce
let propiedadesDeMiComputadora = {
    marca: "Asus", //La marca de mi identificador, y "Asus" es mi valor
    modelo: "GL552JX",
    procesador: "Intel Core i7",
    ram: "16 GB",
    almacenamiento: "1TB",
    precio: "15000"
}

console.log(propiedadesDeMiComputadora);
console.log("La RAM de mi computadora es de:",
propiedadesDeMiComputadora["ram"]);
console.log("La marca de la computadora que elegiste:", propiedadesDeMiComputadora["marca"], "y su precio es de:", propiedadesDeMiComputadora["precio"]);


//Ejemplo de una Red Social
let publicacionRedSocial = {
    nombre: "Felipe",
    usuario: "@felipecontenis",
    fecha: "Agosto",
    likes: "5000",
    descripcion: "Esta es una bonita foto de lasagna",
    ubicacion: "Estado de Mexico"
}

console.log("Estas son las publicaciones de Agosto: ", publicacionRedSocial["fecha"]);


/*
Metodos de los arrays

En los arreglos tenemos ciertos metodos o instrucciones que nos van a permitir manipular los elementos de este arreglo. Estor nos permiten desde agregar y eliminar elementos, hasta reordenarlos.

La sintaxis basica del metodo es .nombreMetodo(valorAModificar);

Podemos dividir estos metodos en 3:

  -Metodos tranformadores
  -Metodos accesores
  -Metodos repetitivos (spoiler)

*/

console.log("/////////////////////////////////////////////////////////");

var arrayDeEjemplo = ["Manzanas", "Peras", "Mangos", "Mandarinas", "Uvas", "Sandía", "Fresas"];

console.log("Este es nuestro arreglo Original de 7 elementos", arrayDeEjemplo);

/*

Metodos transformadores


//push(): Agrega un elemento al final del arreglo
arrayDeEjemplo.push("Pitaya");
console.log("Agregamos la Pitaya a nuestro arreglo de ejemplo:", arrayDeEjemplo);

//pop(): Eliminar el ultimo elemento de la regla
arrayDeEjemplo.pop(); //Con pop no hace falta especificar el dato
console.log("Eliminamos el ultimo elemento del arreglo", arrayDeEjemplo);

//unshift(): Agregamos uno o mas elementos al principio del arreglo
arrayDeEjemplo.unshift("Bananas", "Tunas", "Aguacate", "Lichi");
console.log("Agregamos 4 elementos al principio del arreglo", arrayDeEjemplo);

//shift(): Eliminar el primer elemento del arreglo
arrayDeEjemplo.shift():
console.lo("Eliminamos el primer elemento del arreglo", arrayDeEjemplo);

//sort(): Ordenar los elementos del arreglo y devuelve el arreglo ya ordenado de forma ascendente
arrayDeEjemplo.sort();
console.log("Este es mi arreglo de ejemplo ordenado", arrayDeEjemplo);

//reverse(): Invierte el orden de los elementos del arreglo y devuelve el arreglo invertido
arrayDeEjemplo.reverse();
console.log("Este es nuestro arreglo invertido", arrayDeEjemplo);
 
*/
/*

Sintaxis basica

splice(indice de inicio, cantidad de elementos a eliminar, nuevo elemento1, nuevoelemento2, etc.)

    - Indice de inicio: la posicion desde donde comenzamos a eliminar elementos (primer numero dentro del parentesis)
    - Cantidad de elementos a eliminar: numero de elementos a borrar (segundo numero del parentesis)
    - elemento a agregar : los nuevos elementos que se agregan al arreglo(tercer elemento del parentesis)

*/

let mesesDelAnio = ["Enero", "Febrero", "Agosto", "Septiembre"];
console.log("Este es nuestro arrreglo de los meses del anio: ", mesesDelAnio);

//Eliminar datos usando splice
let mesesBorrados = mesesDelAnio.splice(2, 2, "Abril", "Mayo");
console.log("Este es el nuevo arreglo con los meses borrados: ",mesesDelAnio);


//Agregar elemenos sin borrar nada arreglo
let diasSemana = ["Lunes", "Martes", "Miercoles"];
console.log("Los dias de la semana son: ", diasSemana);

diasSemana.splice(5, 0, "Jueves", "Viernes", "Sabado");

console.log("Los nuevos dias de la semana son: ", diasSemana);


/*
Metodos Accesores
*/

var ensalada = ["jitomate", "zanahoria", "lechuga", "chicharos", "cebolla"];

//length():Nos permite saber el numero de elementos o longitud del arreglo

console.log("Tenemos estos elementos en el arreglo ensalada ", ensalada.length);


//join(): Nos permite unir los elementos del arreglo con una cadena de texto
console.log("Esta es una feliensalada: ", ensalada.join( "-"));

//concat(): Nos permite unir dos o mas arrays en uno solo. Devuelve un nuevo arreglo con los elementos de los otros arreglos.

let dulces = ["galletas", "chetos", "glorias", "galletas", "gansitos", "picafresas", "tamborines", "galletas"];

let mezcla = ensalada.concat(dulces);
console.log("Esta es mi mezcla: ", mezcla);


//indexOf: Nos permite saber la posicion de un elemento dentro del arreglo

console.log("La posicion de los chetos de mi arreglo dulces: ", dulces.indexOf("chetos"));

//lastindexOf(): Nos permite saber la ultima posicion de un elemento determinado dentro del arreglo
console.log("La ultima posicion de las galletas es: ", dulces.lastIndexOf("galletas"));

console.log(dulces.valueOf());

/*
Investigar:
//toString
//valueOf 
//includes
*/

//toString(): Nos permite convertir el array en una cadena de texto
console.log(mezcla.toString());

//valueof(): Nos permite devolver el valor de nuestro arreglo
console.log(mezcla.valueOf());

//includes(): Nos permite saber si un elemento existe o no dentro de un arreglo
console.log("Asi podremos saber si un elemento esta dentro del arreglo", mezcla.includes("gansitos")); //true
console.log("Asi podremos saber si un elemento esta dentro del arreglo", mezcla.includes("cacahuates")); //false

/*

Métodos repetidores

//filter(): Recorre el arreglo y devuelve los elementos que cumplan la condición (como un bucle).

var numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log("numeros del 1 al 10", numeros);

filtrando los datos del arreglo
var numeros1al5 = numeros.filter(numeros => numero > 5); --Una funcion flecha es como una condicional
console.log("estos son los numeros que cumplen la condicion al ser < 5", numeros1al5);

var numeros6al9 = numeros.filter(numero>=6 && numero<10);
console.log("estos son los números mayor o igual a 6 y menores a 10, numeros");

//map(): nos permite recorrer el arreglo, modificar los elementos presentes en el y retornar esos valores 
modificados en unos nuevos, con la misma longitud que el arreglo original.

var map = numeros.map(numeros => numeros*3);
console.log("Estos son los numeros multiplicados por 3");

-tablas de multiplicar

var arregloBase = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


var tabla2 = arregloBase.map(arreglosBase => arreglosBase*2);
console.log("esta es la tabla del 2");
var tabla3 = arregloBase.map(arreglosBase => arreglosBase*3);
console.log("esta es la tabla del 3");

//forEach(): Este metodo nos permite llamar a una funcion "callback" especifica una vez por cada elemento sobre el que se itrea del array. Al igual que otros iteradores como map o el filter, este metodo recibe algunos parametros:

    - Elemento actual: elemento del arreglo que se va a evaluar o sobre el que se hace la iteracion
    - Indice: La posicion que tiene el elemento dentro del arreglo
    - El arreglo objetivo: el arreglo por el cual se esta haciendo esta iteracion.

ESTE METODO NO CAMBIA EL ARREGLO ORIGINAL, DEVUELVE UNO NUEVO CON LOS ELEMENTOS MODIFICADOS

*/

//Ejemplo para remover el primer numero impar de un arreglo

let listaNumeros = [3, 6, 8, 10, 12,];
let impar = 3;

var impares = listaNumeros.forEach(function(numero){ //por cada elemento del arreglo, ejecuta la funcion
    if (numero === impar){
        listaNumeros.shift();
    }
});

console.log("Estos son los elementos del array que no son impares", listaNumeros);

/////////////////////////////////////////////////////////////////////////////////////

/*

Bucles o Loops

En JS, los bucles o loops son utilizados para realizar tareas repetitivas con base en una condicion. Las condiciones normalmente devuelven un true o false al ser evaluadas, ademas de que el bucle continuara ejecutandose hasta que la condicion devuelva un false

Normalmente tenemos 3 ciclos
   -While (mientras)
   -Do while (hacer mientras)
   -For (para)

Tenemos otras sentencias mas especificas:

    - for in: sirve para recorrer un arreglo y por cada uno de los elementos de este arreglo obtenemos LA POSICION

    - for of: Sirve para recorrer un arreglo, y por cada uno de los elementos de este arreglo, obtenemos SU VALOR


*/

/*

Sentencia WHILE (mientras)

Esta sentencia nos va a permitr recorrer un bloque de codigo SIEMPRE que se cumpla una condicion especifica, donde el resultado debe ser true

la estructura de WHOLE es:

palabraReservada while (condicion que tiene que ser true) {
    //codigo a ejecutar
}

*/

//Programa para sumar numeros ALERTA, ESTE PROGRAMA EXPLOTA LA COMPUTADORA




/*

Do While (HACER MIENTRAS O HACER HASTA)

El bucle do while nos sirve para ejecutar una sentencia especififcada hasta que la condicion de aprobacion se evalua como falsa. La condicion se evalua despues de ejecutar la sentencia, dando como resultado que la sentencia especificada se ejecuta al menos una vez.

En pocas palabras, con el while preguntamos una vez, evaluamos la condicion y ejecutamos la instruccion. Con el do while, ejecutamos la instruccion al menos una vez, y luego preguntamos la condicion.

Estructura básica de un do while

palabraReservada do{
    //Codigo a ejecutar
}
while(condition);

*/

//Ejemplo 1

let numerito = 0; //Declaramos la variable en 0
do{// esto se hara...
console.log("El numero es: " + numerito); //imprimimos
numerito ++; //aumentamos de 1 en 1
}

while (numerito <=10);//...hasta que el numero sea menor o igual a 10

//While vs Do While

console.log("While");

let numeroWhile = 0 //iniciamos en 0
while (numeroWhile <5){ //mientras el variable sea menor a 5
    numeroWhile ++; //La incremento en 1
    console.log(numeroWhile); //La imprimo
}

console.log("Do While");
let numeroDoWhile = 0; //iniciamos en 0
do{//hacemos esto...
console.log(numeroDoWhile); //imprimir
numeroDoWhile ++; //aumentar en 1
}

while (numeroDoWhile<5); //...mientras numero sea menor a 5

/*

//Sentencia FOR (para)



*/