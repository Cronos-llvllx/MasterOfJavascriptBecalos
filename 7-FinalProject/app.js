// Clave para el localStorage
const STORAGE_KEY = 'commentsBooksDevf';

// Referencias a los elementos del DOM
const nameInput = document.getElementById('nameInput');
const commentInput = document.getElementById('commentInput');
const addCommentBtn = document.getElementById('addCommentBtn');
const commentsContainer = document.getElementById('commentsContainer');

// Función para guardar comentarios en localStorage
function saveComments(comments) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(comments));
}

// Función para cargar comentarios del localStorage
function loadComments() {
    const commentsJSON = localStorage.getItem(STORAGE_KEY);
    return commentsJSON ? JSON.parse(commentsJSON) : [];
}

// Función para renderizar un comentario en el DOM
function renderComment(comment) {
    const commentDiv = document.createElement('div');
    commentDiv.classList.add('comment');
    commentDiv.setAttribute('data-id', comment.id);

    //Guardamos nombre del usuario
    const nameHeader = document.createElement('h3');
    nameHeader.textContent = nameInput.value;

    const commentText = document.createElement('p');
    commentText.textContent = comment.text;

    const commentDate = document.createElement('small');
    commentDate.textContent = comment.date;

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Eliminar';
    deleteBtn.classList.add('delete-btn');
    deleteBtn.addEventListener('click', () => {
    deleteComment(comment.id);
    });

    commentDiv.appendChild(deleteBtn);
    commentDiv.appendChild(nameHeader);
    commentDiv.appendChild(commentText);
    commentDiv.appendChild(commentDate);

    commentsContainer.appendChild(commentDiv);
}

// Función para eliminar un comentario tanto del DOM como del localStorage
function deleteComment(id) {
  // Eliminar del DOM
    const commentDiv = document.querySelector(`.comment[data-id="${id}"]`);
    if (commentDiv) {
    commentsContainer.removeChild(commentDiv);
}

  // Eliminar del almacenamiento
let comments = loadComments();
    comments = comments.filter(comment => comment.id !== id);
    saveComments(comments);
}

// Función para agregar un comentario
function addComment() {
    const name = nameInput.value.trim();
    const text = commentInput.value.trim();
    if (text === '') {
    alert('Por favor, escribe un comentario.');
    return;
}

  // Crear objeto comentario con un id único (usamos Date.now())
const comment = {
    id: Date.now(),
    name,
    text,
    date: new Date().toLocaleString()
};

  // Guardar el comentario en localStorage
    const comments = loadComments();
    comments.push(comment);
    saveComments(comments);

  // Renderizar el comentario en el DOM
    renderComment(comment);

  // Limpiar el campo de texto
  nameInput.value = '';  
  commentInput.value = '';
}

// Cargar y renderizar los comentarios al iniciar la página
function initComments() {
    const comments = loadComments();
    commentsContainer.innerHTML = '';
    comments.forEach(comment => renderComment(comment));
}

// Evento para agregar comentario
addCommentBtn.addEventListener('click', addComment);

// Inicializar la página con los comentarios almacenados
initComments();