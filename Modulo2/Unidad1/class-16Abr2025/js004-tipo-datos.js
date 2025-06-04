console.log("1.- TIPOS DE VARIABLES");
console.log("Variables primitivas");

let mensaje = "Hola como estás"; //string. se encierra en comilla doble o simple
let edad = 10; //number
let activo = true; //boolean
let vacio = null; //null
let x; //undefined

console.log("Mensaje ",mensaje,"tipo de variable ", typeof mensaje);
console.log("Edad ",edad,"tipo de variable ", typeof edad);
console.log("activo ",activo,"tipo de variable ", typeof activo);
console.log("vacìo ",vacio,"tipo de variable ", typeof vacio);
console.log("X",x,"tipo de variable ", typeof x);

console.log("2.- Variables NO primitivas");
//variable objeto constante
const persona = {
    nombre: "Francisco",
    apellido: "Higuera"
}
console.log("Apellido",persona.apellido,"tipo de variable ", typeof persona);
persona.apellido="Gonzalez";
console.log("Apellido",persona.apellido,"tipo de variable ", typeof persona);

//declaraciòn de arreglo
const frutas = ["peras","manzana","naranjas","piñas"];
console.log("Frutas: ",frutas,"tipo de variable",typeof frutas);

const hoy = new Date();
console.log("Fecha actual: ",hoy,"tipo de variable: ", typeof hoy);

console.log("Expresiones regulares"); // es para verificar si en una cadena de texto contiene la inspeccion que se coloque alli
const regex = /[a-z]+/; 
console.log(regex.test("abc"));
console.log(regex.test("1254"));

console.log("CONVERSIONES");
a = 10;
b = 5;
multiplicacion = a * b;
console.log("a",a,"tipo de variable: ", typeof a);
console.log("b",b,"tipo de variable: ", typeof b);
console.log("Resultado de la multiplicacion ",multiplicacion,"Tipo de variable: ",typeof multiplicacion);
