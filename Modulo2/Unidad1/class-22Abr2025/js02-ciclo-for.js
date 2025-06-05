/*FOR: se declara el rango de iteración */
for (let i = 1; i<=5;i++){
    console.log("Iteracion : ", i)
}

for (let i = 1; i<=10;i++){
    for (let j = 1; j<=10;j++){
    console.log(i,"x", j,"=",i*j);
    }
}

for (let i = 1; i<=5;i++){
    console.log("2x",i,"=", i*2);
}

for (let i = 1; i<=5;i++){
    console.log(3,"x",i,"=", 3*i);
}

/*sumar numero par */

suma = 0;
for (let i = 1; i<=10;i++){
    if (i % 2 === 0){
        console.log("número par:", i);
        suma +=i;
    }
}
console.log("La suma de los numeros pares es: ", suma)

/**Para ejecutar en el terminal: PS Y:\GPS\MODULO-2> node js03-ciclo-while.js */

/* el cuadrado de un numero*/

for (let i = 1; i<=10;i++){
    console.log("El cuadrado de",i,"es: ",i*i);
}

/*impresion por letra */
let palabra = "Welcome to JavaScript";
for(let i=0;i<palabra.length;i++){
    console.log(palabra[i]);
}

