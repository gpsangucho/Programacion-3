const titulo = document.getElementById('titulo') //obtener el evento segun el ID
console.log(titulo.textContent);
const notas = document.getElementsByClassName('nota');
Array.from(notas).forEach(n => console.log(n.textContent));
const items = document.querySelectorAll('.item');
items.forEach(el => console.log(el.textContent));