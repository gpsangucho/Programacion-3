console.log("OPERADORES");
console.log("1. Operadores aritmeticos");

console.log("SUMA");
a = 10
b = 5
suma = a + b; 
console.log("Suma de  ",a, " + ", b, "es igual a: ",suma);
console.log("Suma de  ",a, " + ", b, "es igual a: ",a+b);

resta = a - b;
console.log("Resta de  ",a, " - ", b, "es igual a: ",resta);

division = a / b;
console.log("Division de ",a," / ",b,"es igual a: ", division);

multiplicacion = a * b;
console.log("Multiplicacion de ",a," * ",b,"es igual a: ", multiplicacion);

residuo = a % b
console.log("Residuo de ",a," * ",b,"es igual a: ", residuo);

potencia = a ** 2
console.log("Potencia de ",a," * ",b,"es igual a: ", potencia);

console.log("2. Operadores Lógicos o de comparación")
console.log("== Igualdad débil","5" == 5);  // string = numerico acepta que es igual
console.log("=== Igualdad estricta","5" === 5); //strinf = numerico, obliga a comparar el tipo de variable

console.log("!= Desigualdad débil","5" != 5);  // string != numerico acepta que es igual
console.log("!== Desigualdad estricta","5" !== 5); //strinf != numerico, obliga a comparar el tipo de variable

console.log("Operadores de comparación")
console.log("> Mayor que 6 > 5", 6 > 5); 
console.log("< Menor que 6 < 5", 6 < 5);
console.log(">= Mayor igual 6 >= 5", 6 >= 5); 
console.log("<= Menor igual 6 <= 5", 6 <= 5);

console.log("3. Operadores lógicos");
console.log("&& AND ","5 > 4 && 2 < 2", 5 > 4 && 2 < 2);
console.log("|| OR ","5 > 4 || 2 < 2", 5 > 4 || 2 < 2);
console.log("! NOT ","!(5 > 4)",!(5 > 4));

