// polimorfismo por sobre carga
class Calculadora {
    suma(a,b,c){
        if(c===undefined){
            console.log(`[suma de dos 2 numeros: ${a + b}` );
        } else {
            console.log(`suma de 2 numeros: ${a + b + c}` );
        }
    }
    multiplicar(x, y=1, z=3){
        console.log(`Resultado: ${x*y*z}`);
    }

}

const calc = new Calculadora;
calc.suma(5,3);
calc.suma(5,3,4);
calc.multiplicar(2);
calc.multiplicar(2,3);
calc.multiplicar(2,3,4);