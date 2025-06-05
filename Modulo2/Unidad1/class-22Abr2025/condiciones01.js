/**promt: captura datos externos. Alert permite ingresar datos en una ventana */
let a = prompt("ingrese el promero numero: ");
let b = prompt("ingrese el segundo numero: ");

a = Number(a);
b = Number(b);
if (a>b){
    alert("El primer numero es mayor.");
}else if (a<b){
    alert("El segundo numero es mayor");
} else {
    alert("ambos numeros son iguales.");
}
