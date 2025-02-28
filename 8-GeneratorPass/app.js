
    // Obtener referencias a elementos del DOM
    const passwordOutput = document.getElementById('passwordOutput');
    const lengthRange = document.getElementById('lengthRange');
    const rangeValue = document.getElementById('rangeValue');
    const includeUppercase = document.getElementById('includeUppercase');
    const includeLowercase = document.getElementById('includeLowercase');
    const includeNumbers = document.getElementById('includeNumbers');
    const includeSymbols = document.getElementById('includeSymbols');
    const generateBtn = document.getElementById('generateBtn');

    // Barras de fuerza
    const bar1 = document.getElementById('bar1');
    const bar2 = document.getElementById('bar2');
    const bar3 = document.getElementById('bar3');

    // Actualizar el valor que se muestra junto al slider
    lengthRange.addEventListener('input', () => {
      rangeValue.textContent = lengthRange.value;
    });

    // Función para generar la contraseña
    function generatePassword() {
      const length = parseInt(lengthRange.value, 10);

      // Conjuntos de caracteres
      const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
      const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
      const numberChars = '0123456789';
      const symbolChars = '!@#$%^&*()_-+=<>?';

      let allChars = '';
      if (includeUppercase.checked) allChars += uppercaseChars;
      if (includeLowercase.checked) allChars += lowercaseChars;
      if (includeNumbers.checked)   allChars += numberChars;
      if (includeSymbols.checked)   allChars += symbolChars;

      if (!allChars) {
        return 'Selecciona al menos una opción';
      }

      let password = '';
      for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * allChars.length);
        password += allChars[randomIndex];
      }
      return password;
    }

    // Función para calcular la fuerza de la contraseña (simple)
    function calculateStrength(pwd) {
      let strengthScore = 0;

      // Criterios básicos de ejemplo:
      if (/[A-Z]/.test(pwd)) strengthScore++;
      if (/[a-z]/.test(pwd)) strengthScore++;
      if (/\d/.test(pwd))    strengthScore++;
      if (/[!@#$%^&*()_\-+=<>?]/.test(pwd)) strengthScore++;
      if (pwd.length >= 12) strengthScore++;

      // Limpia las barras
      bar1.classList.remove('fill', 'strong');
      bar2.classList.remove('fill', 'strong');
      bar3.classList.remove('fill', 'strong');

      // Llenado de barras en función del puntaje
      if (strengthScore === 1 || strengthScore === 2) {
        // Llenamos la primera barra
        bar1.classList.add('fill');
      } else if (strengthScore === 3) {
        // Llenamos dos barras
        bar1.classList.add('fill');
        bar2.classList.add('fill');
      } else if (strengthScore >= 4) {
        // Llenamos tres barras
        bar1.classList.add('strong');
        bar2.classList.add('strong');
        bar3.classList.add('strong');
      }
    }

    // Evento para el botón "GENERAR"
    generateBtn.addEventListener('click', () => {
      const newPassword = generatePassword();
      passwordOutput.value = newPassword;
      calculateStrength(newPassword);
    });