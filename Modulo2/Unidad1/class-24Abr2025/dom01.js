// Idea: acceder a las etiquetas y poner estilo con java scrip
// DOM: modelo de objetos de documento

console.log(document.head);
//console.log(document.body.children);
//console.log(document.title);

const titulo = document.getElementById('titulo');
console.log("elemento titulo GPS",titulo);

const notas = document.getElementsByClassName('notas');
Array.from(notas).forEach(n=>console.log(n.textContent));

const item = document.querySelectorAll('.item');
item.forEach(elemento=>console.log(elemento.textContent)); // recorre el arreglo

const mensaje = document.getElementById('mensaje');
console.log(mensaje);
mensaje.textContent = "nuestro h2 se ha actualizado"; // cambiamos el texto
mensaje.style.color="red"; // cambiamos el color. aquie se puede cambiar todos los atributos de css

const enlace = document.getElementById("link");
console.log(enlace);
enlace.setAttribute('href',"https://www.google.com"); // cambiamos el atributo
enlace.textContent = "https://www.google.com"; 