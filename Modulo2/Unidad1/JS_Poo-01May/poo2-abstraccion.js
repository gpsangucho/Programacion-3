class Television {
    _marca;
    _encendido;
    constructor(marca){
        this._marca = marca;
        this._encendido = false;
    }
    encender(){
        this._encendido = true;
        console.log("Television encendida");
    }
    apagar(){
        this._encendido = false;
        console.log("Television apagada");
    }
}

const miTV = new Television("Samsung");
miTV.encender();
miTV.apagar();
