/**Objetos
 * conjunto de datos estructurado con clave - valor
 */
// manipulaciòn de objetos: agregar y quitar claves, modificar y elimnar claves
// Es similar al formato jason que el frontend envìa y recibe el backend y viceversa
let alumno ={
    nombre: "juan",
    apellido: "Ampies",
    direccion: "Av. Amazonas",
    telefono: 231253641
}

console.log(alumno);
console.log("apellido del alumno",alumno.apellido);
console.log("nombre del alumno: ",alumno["nombre"]);

// Modificar propiedades
alumno.apellido = "lopez";
alumno["direccion"] = "Av. Bolivar";

console.log(alumno);

// Incluir una nueva propiedad
alumno.promedio = 9;
console.log(alumno);

//Eliminar
delete alumno.promedio;
console.log(alumno);

//Clonado
alumnoClonado = {...alumno}
alumnoClonado.nombre = "Antonio";
alumnoClonado.apellido = "Ape";
console.log(alumnoClonado);

// Multiplicar precio unitario * cantidad IVA y sumarle IVA
item = {
    precioUnitario: 23,
    cantidad: 3,
    iva: 3.4,
    nombre: "Portatil",
    Subtotal: 0
}

console.log("compra: $",item.precioUnitario*item.cantidad);
item.Subtotal = item.precioUnitario*item.cantidad*(1+item.iva/100);
console.log("Total con iva: $", item.Subtotal);
console.log(item);

//Iteracion

for(const key in item){
    console.log(key, ": ",item[key]);
}

for(let key in item){
    console.log(key + ": " + item[key]);
}
// listar solo las claves o propiedades
console.log(Object.keys(item));
// Listar solo los valores
console.log(Object.values(item));

//Metodo o funciones en objetos: Se puede definir el valor de una propiedad con un método/funciòn.

usuario = {
    nombre: "Luis",
    saludar: function(){
        return"hola soy "+this.nombre;
    }
}
console.log(usuario.saludar());

// objetos anidados ó mixto

categoria = {
    nombre:"Electrónica",
    producto: ["laptop","Monitor","teclado", {cantidad:12,marca:"sony"}],
    description: {
        capacidad: "16Hz",
        tamaño: "12 pulgadas"
    }
}
console.log(categoria);

for(let key in categoria){
    console.log(key + ": " + categoria[key]);
}