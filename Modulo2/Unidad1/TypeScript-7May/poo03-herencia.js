var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//HERENCIA
var Vehiculo = /** @class */ (function () {
    function Vehiculo(marca) {
        this.marca = marca;
    }
    Vehiculo.prototype.moverse = function () {
        console.log("La marca ".concat(this.marca, " est\u00E1 en movimiento"));
    };
    return Vehiculo;
}());
//moto hered de vehiculo
var Moto = /** @class */ (function (_super) {
    __extends(Moto, _super);
    function Moto() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Moto.prototype.hacerCaballito = function () {
        console.log("La marca ".concat(this.marca, " hace caballito"));
    };
    return Moto;
}(Vehiculo));
var miVehiculo = new Vehiculo("Toyota");
miVehiculo.moverse();
var miMoto = new Moto("Yamaha");
miMoto.moverse();
miMoto.hacerCaballito();
