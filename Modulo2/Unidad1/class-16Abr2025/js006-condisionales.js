console.log("CONDICIONALES");
console.log("if simple");
temperatura = 35;
if(temperatura > 30){
    console.log("Hace Calor");
}

console.log("if else");
usuarioLogueado = true;
if(usuarioLogueado){
    console.log("Bienvenido de nuevo");
}else{
    console.log("por favor, inicar sesión");
}

console.log("if anidado");
nota = 9;

if (nota >= 9){
    console.log("Excelente");
}else if(nota>=6){
    console.log("Aprobado");
}else{
    console.log("Reprobado");
}


console.log("if anidado");
edad = 18;
tieneLicencia = true;

if (edad >= 18){
    if (tieneLicencia){
        console.log("Puede conducir");
    }else{
        console.log("Necesita licencia de conducir ");
    }
}else{
    console.log("Es menor de edad");
}


console.log("if con operadores lógicos");
// Evalua 2 condiciones a la vez y requiere que las 2 sean condiciones
let esEstudiante = true;
let tieneDescuento = true;
if (esEstudiante && tieneDescuento){
    console.log("Aplica a tarifa reducida");
}
// evalua 2 condiciones pero basta que 1 sea verdadero para pasar.
esAdmin = true;
esEditor = false;
if(esAdmin || esEditor){
    console.log("Puede editar contenido");
}


