// con una clase figura cambiar el color de fondo de un div metodo cambiar color  y cambiar textoconmetodo cambiarTexto

class Figura{
    _mensaje;
    constructor(mensaje){
        this._mensaje = mensaje;
    }
    cambiarColor(){
        const div = document.getElementById('divCambiante');
        div.textContent = this._mensaje
    }

    cambiartexto(){
        const div = document.getElementById('divCambiante');
        div.style.background = 'skyblue';
    }

}

const figura = new Figura("Hello worl");
document.getElementById('btnCambiarTexto').addEventListener('clic',() =>{
    Figura.cambiartexto();
});

document.getElementById('btnCambiarColor').addEventListener('clic',() =>{
    Figura.cambiarColor();
});