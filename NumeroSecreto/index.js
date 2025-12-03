// Genera un número aleatorio entre 1 y 100
const numeroSecreto = Math.floor(Math.random() * 100) + 1;

// Contador de intentos del usuario
let intentos = 0;

// Variable donde se guardará la respuesta del usuario
let numeroUsuario;

// Mensaje inicial del prompt
let mensaje = "Adivina el número (entre 1 y 100):";

do {
  // Solicita un número al usuario
  numeroUsuario = Number(prompt(mensaje));

  // Cada entrada válida o inválida cuenta como intento
  intentos++;

  // Validación: comprobar si realmente ingresó un número
  if (Number.isNaN(numeroUsuario)) {
    mensaje = "Eso no es un número válido. Intenta de nuevo:";
    continue;
  }

  // Comparación con el número secreto
  if (numeroUsuario > numeroSecreto) {
    mensaje = "Muy alto. Prueba un número más bajo:";
  } else if (numeroUsuario < numeroSecreto) {
    mensaje = "Muy bajo. Prueba un número más alto:";
  }

} while (numeroUsuario !== numeroSecreto);

// Cuando sale del bucle es porque acertó
alert(`🎉 ¡Correcto! El número era ${numeroSecreto}. Lo lograste en ${intentos} intentos.`);
