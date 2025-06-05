let i=1;
while (i<=5){
    console.log("Iteración while: ",i);
    i++;
}

/*probar: PS Y:\GPS\MODULO-2> node js03-ciclo-while.js */

/**Tabla del 2 */
let j=1;
while (j<=10){
    console.log("2X ",j,"=",2*j);
    j++;
}

/**Otra variedad */
let mult = 1;
console.log("Do... while");
do{
    console.log(5,"x",mult,"=",5*mult);
    mult++;
}while (mult<=10);

console.log("Serie decreciente");
let n = 10;
console.log("Do... while");
do{
    console.log("n",n);
    n--;
}while (n>=6);

console.log("Manejo de arreglos")
let animales =["perro","gato","león","tigre","águila","gallina","pato","culebra","elefante","ratón"];
let animal = 0; /**Los arreglos empiezan con cero */
do{
    console.log("Animal",animal,"es: ", animales[animal]);
    animal++;
}while (animal<=9);


