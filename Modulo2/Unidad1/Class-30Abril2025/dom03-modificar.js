// aquei se actualiza el contenido de las etiquetas

const msg = document.getElementById('mensaje');
msg.textContent = "Actualizado";
msg.style.color = "red";
const link = document.getElementById('link');
link.setAttribute('href','https://google.com');
link.classList.add('boton');
link.textContent = "Google"; 