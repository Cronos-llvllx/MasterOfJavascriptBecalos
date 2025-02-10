/*
//EJercicio 1 calculadora con funciones.
function sumar(a, b) {
    return a+b;
}
function restar(a, b) {
    return a-b;
}
function multiplicar(a, b) {
    return a*b;
}
function dividir(a, b) {
    if (b === 0){
        return"Error: No se puede dividir por 0";
    }
    return a/b;
}
//llamadas a las funciones

console.log("Suma: " + sumar (10 , 9));
console.log("Resta: " + restar (7 , 2));
console.log("Multiplicacion: " + multiplicar (5 , 5));
console.log("Division: " + dividir (10, 2));
//Ejercicio 2 Conversor de temperaturas
function celsiusAFahrenheit(celsius) {
    return celsius * 1.8 +32;
}
function FahrenheitACelsius(Fahrenheit) {
    return Fahrenheit - 32 / 1.8;
}
//llamadas a las funciones
console.log("Celsius a Fahrenheit: " + celsiusAFahrenheit(0));
console.log("Fahrenheit a Celsius: " +   FahrenheitACelsius(32));
*/
let librosLeidos = [];//variable global para que las 2 funciones puedan acceder
function agregarLibro(titulo) { //funcion con 1 parametro para guardar el titulo de los libros
    librosLeidos.push(titulo) // push para agregar el libro al array librosleidos
    return titulo; //retorna el titulo para que no retorne undefined
}
agregarLibro("ElDragon"); // agregamos los libros
agregarLibro("Elprincipito");
agregarLibro("50shadows");

function mostrarLibrosLeidos() { // funcion para mostrar los libros
    for (let i = 0; i < librosLeidos.length; i++) { // bucle para recorrer el array for porque en este caso son pocos libros, si fueran mas tal vez seria mejor usar un bucle while
        console.log(librosLeidos[i]); // imprime los libros
    }
}
mostrarLibrosLeidos(); // llamamos a la funcion para mostrar los libros