//Event addEventListener
function mostarAlerta(){
    alert("Este evento usa un evento en lìnea");
}

function agregarProducto(){
    const ul = document.getElementById
    ('listaProducto1');
    const li = document.createElement('li');
    li.textContent = "Producto agregado desde un evento incline";
    ul.appendChild(li);
}

document.getElementById('boton').addEventListener
('click', () => {
    alert('Click detectado!');
});

document.getElementById('campo').addEventListener
('input',(e) => {
    console.log('Escribiendo:',e.target.value);
});

document.getElementById('btnAgregar').addEventListener
('click',() => {
    const ul = document.getElementById
    ('listaProductos2');
    const li = document.createElement('li');
    li.textContent = "Item agregado desde un evento con addEventListener";
    ul.appendChild(li);
});


