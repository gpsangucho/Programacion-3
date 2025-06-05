/**Para la manipulaciòn de un objeto formato por clave valor (parecido a un diccionario de python) */

const persona = {
    nombre: "Pedro",
    apellido: "Perez",
    edad: 10,
    direccion: "Av. Amazonas",
    telefono: "1234567890"
}

console.log("-----------------------IMPRESION DE VALORES MANUALMENTE---------------------")
console.log("nombre: ",persona.nombre)
console.log("Nombre: ",persona["nombre"])
console.log("Apellido: ",persona["apellido"])
console.log("Edad: ",persona["edad"])

console.log("-------------------------Impresión de valores con lazo o ciclo for-in----------------------")
for (const clave in persona){
    console.log(clave, ": ", persona[clave])
}

/**Otro objeto */
console.log("-------------------OBJETO PRODUCTO--------------------------")
const producto = {
    nombre: "laptop",
    precio: 1000,
    descripcion: "i7 13va generacion 500GB SSD 32GB RAM"
}

for (const clave in producto){
    console.log(clave,":",producto[clave]);
}

/** MODULO 1 CON UNIDAD 1 Y SU UNIDAD 2 PARA ESTA SEMANA */
/** EN LA RAZI DEBE ESTAR EL REDMI Y EL MINISERVER*/

