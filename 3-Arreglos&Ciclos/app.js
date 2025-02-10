//Ejercicio1 crea un ciclo while que cuente del 10 al 1 y imprima los numeros en consola
//Modificacion modificalo para que el ciclo imprima solo numeros pares

/*Intento 1 imprimir del 10 al 1
let number = 10;
while (number >0) {
    console.log(number);
    number = number -1;
} /*
/*intento 2 modificacion puros pares
let number = 10;
while (number >0) {
    console.log(number);
    number = number -2;
} */
//Contador Inverso: Crea un programa que cuente del 10 al 1 y lo imprima en la consola.
/*

for (let i = 10; i>=1; i--) {
    console.log(i);
}*/
//Suma de Pares: Modifica el ciclo para que solo sume los números pares del 1 al 20 y muestre el resultado.
/*
let sumaDePares = 0;
for (let numero = 1; numero <= 20; numero++) {
    if (numero % 2 === 0) {
        sumaDePares += numero;
    }
}   console.log(sumaDePares);  //110
*/
/*crea un array
let colores = ['rojo', 'verde', 'azul', 'amarillo'];
console.log(colores[1]);//verde
colores[2] = 'naranja';//naranja
console.log(colores);
colores.push('morado');//morado
console.log(colores);
colores.shift();
console.log(colores);
*/
//Practica Arreglos y ciclos
let frutas = ['manzana', 'pera', 'uva', 'sandia', 'melon', 'platano', 'kiwi', 'fresa', 'mango', 'papaya'];
//variable objeto inicializado
let tiposdefruta = {
    tropical: 0,
    dulce: 0,
    acida: 0
};

// Usando ciclo for
for (let fruta of frutas) {
    if (['sandia', 'melon', 'platano', 'kiwi', 'fresa', 'mango', 'papaya'].includes(fruta)) {
        tiposdefruta.tropical++;
    } else if (['manzana', 'pera'].includes(fruta)) {
        tiposdefruta.dulce++;
    } else if (['uva'].includes(fruta)) {
        tiposdefruta.acida++;
    }
}
//imprimiendo en consola cada categoria
console.log('Usando ciclo for:');
console.log('Frutas tropicales: ' + tiposdefruta.tropical);
console.log('Frutas dulces: ' + tiposdefruta.dulce);
console.log('Frutas acidas: ' + tiposdefruta.acida);

// Reiniciar el contador
tiposdefruta = {
    tropical: 0,
    dulce: 0,
    acida: 0
};

// Usando ciclo while
let i = 0;
while (i < frutas.length) {
    let fruta = frutas[i];
    if (['sandia', 'melon', 'platano', 'kiwi', 'fresa', 'mango', 'papaya'].includes(fruta)) {
        tiposdefruta.tropical++;
    } else if (['manzana', 'pera'].includes(fruta)) {
        tiposdefruta.dulce++;
    } else if (['uva'].includes(fruta)) {
        tiposdefruta.acida++;
    }
    i++;
}

console.log('Usando ciclo while:');
console.log('Frutas tropicales: ' + tiposdefruta.tropical);
console.log('Frutas dulces: ' + tiposdefruta.dulce);
console.log('Frutas acidas: ' + tiposdefruta.acida);