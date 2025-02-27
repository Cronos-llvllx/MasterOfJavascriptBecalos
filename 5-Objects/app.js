/*
Crear un objeto "auto" con propiedades como marca, modelo, año, y un método mostrarInfo que imprima la información del auto.
Modela cualquier otro objeto del mundo real que prefieras con JS de manera simil
 */

/*
const carro = { // Objeto carro declarado de manera literal
    marca: "Nissan", //propiedades del objeto carro
    modelo: "Sentra",
    anio: 2019,
    mostrarInfo: function() { //metodo del objeto carro
        console.log(this.marca + " " + this.modelo + " " + this.anio); //imprime la informacion del carro
    }
};
x
const persona = {
    nombre: "Daniel",
    edad: "24",
    genero: "rock",
    mostrarInfo: function() {
        console.log(this.nombre + " " + this.edad + " " + this.genero);
    }
}
//Para mostrar en consola usa persona.mostrarInfo(); respectivamente
*/
/*
Cada libro debe ser un objeto con las siguientes propiedades: titulo: (string) el título del libro, autor: (string) el autor del libro, anio: (number) el año de publicación, estado: (string) el estado del libro, que puede ser 'disponible' o 'prestado'.
También debe tener un método describirLibro: (method) método para imprimir la información básica del libro. Algo como 'Libro titulado [titulo], escrito por [autor] en el año [anio], el estado es: [estado].'
Opcional: agregar una propiedad que contenga la lista de capítulos del libro y métodos que permitan agregar y eliminar capítulos del libro.
 */
function Libro(titulo, autor, anio, estado) {  //funcion constructora para crear objetos libro
    //propiedades basicas
    this.titulo = titulo;
    this.autor = autor;
    this.anio = anio;
    this.estado = estado;

    //propiedad para almacenar los capitulos
    this.capitulos = [];

    //Metodo para describir el libro
    this.describirLibro = function() {
        console.log("Libro titulado " + this.titulo + ", escrito por " + this.autor + " en el año " + this.anio + ", el estado es: " + this.estado);
    };


    //Metodo para agregar un capitulo al libro
    this.agregarCapitulo = function(capitulo) {
        this.capitulos.push(capitulo);
        console.log(`Capitulo "${capitulo}" agregado al libro "${this.titulo}"`);
    }

    //Metodo para eliminar capitulo
    this.eliminarCapitulo = function(capitulo) {
        //buscar indice del capitulo en el arreglo
        const indice = this.capitulos.indexOf(capitulo);
        if(indice !== -1) {
            //eliminar el capitulo usando splice
            this.capitulos.splice(indice, 1);
            console.log(`Capitulo "${capitulo}" eliminado.`);
        } else {
            console.log(`Capitulo "${capitulo}" no fue encontrado.`);
        }
    };
}

//Ejemplo de uso

//Crear un nuevo libro
const libro1 = new Libro("Los juegos del hambre", "Suzanne Collins", 2008, "disponible");
const libro2 = new Libro("Maze Runner", "James Dashner", 2009, "prestado");


//describir el libro
libro1.describirLibro();
libro2.describirLibro();
// Agregar un capítulo
libro1.agregarCapitulo("Capítulo 1: En un lugar de la Mancha");
libro2.agregarCapitulo("Capítulo 2: Donde estamos");
// Ver los capítulos actuales
console.log(libro1.capitulos);
console.log(libro2.capitulos); 
// Salida: [ 'Capítulo 1: En un lugar de la Mancha' ]
// Eliminar el capítulo agregado
libro1.eliminarCapitulo("Capítulo 1: En un lugar de la Mancha");
// Ver los capítulos después de eliminar
console.log(libro1.capitulos); 
// Salida: []