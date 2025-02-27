/*
//Cambia el titulo y el parrafo al hacer click en el boton
let titulo = document.getElementById('titulo');
let parrafo = document.getElementById('parrafo');
let boton = document.getElementById('cambiarContenido');
boton.addEventListener('click', function() {
    titulo.innerHTML = 'Nuevo titulo';
    parrafo.innerHTML = 'Nuevo parrafo';
});*/ 
    // Referencias a elementos del DOM
    const form = document.getElementById('commentForm');
    const commentInput = document.getElementById('commentInput');
    const commentsContainer = document.getElementById('commentsContainer');

    // Evento para manejar el envío del formulario
    form.addEventListener('submit', function(e) {
      e.preventDefault(); // Evita la recarga de la página

      const commentText = commentInput.value.trim();
      if (commentText === '') {
        alert('Por favor, escribe un comentario.');
        return;
      }

      // Obtener fecha y hora actual
      const now = new Date();
      const formattedDate = now.toLocaleString();

      // Crear un nuevo elemento para el comentario
      const commentDiv = document.createElement('div');
      commentDiv.classList.add('comment');

      // Crear el párrafo para el texto del comentario
      const commentParagraph = document.createElement('p');
      commentParagraph.textContent = commentText;

      // Crear el elemento para la fecha y hora
      const commentDate = document.createElement('small');
      commentDate.textContent = formattedDate;

      // Crear el botón para eliminar el comentario
      const deleteButton = document.createElement('button');
      deleteButton.textContent = 'Eliminar';
      deleteButton.addEventListener('click', function() {
        commentsContainer.removeChild(commentDiv);
      });

      // Agregar los elementos creados al div del comentario
      commentDiv.appendChild(deleteButton); // Se añade el botón de eliminar
      commentDiv.appendChild(commentParagraph);
      commentDiv.appendChild(commentDate);

      // Agregar el comentario al contenedor de comentarios
      commentsContainer.appendChild(commentDiv);

      // Limpiar el campo de texto
      commentInput.value = '';
    });
