/*comentario de varias lineas 
Crea un programa en JavaScript que evalúe la nota de un estudiante y genere un mensaje personalizado basado en la nota. Las notas se asignan de la siguiente manera:
Si la nota es 90 o más, el estudiante aprueba con "Excelente".
Si la nota está entre 75 y 89, el estudiante aprueba con "Bien".
Si la nota está entre 60 y 74, el estudiante aprueba con "Suficiente".
Si la nota es menor de 60, el estudiante no aprueba.
*/
let notaEstudiantes = prompt("Ingresa la nota del estudiante").toLowerCase();
    if (notaEstudiantes >= 90) {
        console.log("Excelente");
    }
    else if (notaEstudiantes >= 75 && notaEstudiantes <= 89) {
        console.log("Bien");
    }
    else if (notaEstudiantes >= 60 && notaEstudiantes <= 74) {
        console.log("Suficiente");
    }
    else {
        console.log("No aprobado");
    }