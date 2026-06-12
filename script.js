document.addEventListener('DOMContentLoaded', () => {
  const texto = 'Esta página existe para recordarte algo que jamás debes olvidar: eres suficiente, eres valiosa y eres una de las personas más especiales que he conocido.';
  const typingElement = document.getElementById('typing');
  const actionButton = document.getElementById('actionButton');
  const messageElement = document.getElementById('mensaje');
  const mensajes = [
    'Eres mucho más fuerte de lo que crees ❤️',
    'Tu bondad cambia vidas todos los días ❤️',
    'Tu sonrisa ilumina mis días ❤️',
    'No necesitas compararte con nadie ❤️',
    'Eres una mujer extraordinaria ❤️',
    'Tu corazón vale más de lo que imaginas ❤️',
    'Estoy orgulloso de ti ❤️',
    'Para mí eres única ❤️',
    'No hay nadie que pueda reemplazarte ❤️',
    'Eres suficiente, exactamente como eres ❤️'
  ];

  let index = 0;
  const typingSpeed = 32;

  function escribir() {
    if (index < texto.length) {
      typingElement.textContent += texto.charAt(index);
      index += 1;
      setTimeout(escribir, typingSpeed);
    }
  }

  function mostrarMensaje() {
    const random = Math.floor(Math.random() * mensajes.length);
    messageElement.textContent = mensajes[random];
    messageElement.classList.remove('bubble');
    void messageElement.offsetWidth;
    messageElement.classList.add('bubble');
  }

  function crearCorazon() {
    const heart = document.createElement('div');
    heart.className = 'heart';
    heart.textContent = '❤️';
    const size = Math.random() * 16 + 18;
    const duration = Math.random() * 5 + 8;
    const drift = (Math.random() - 0.5) * 22;
    heart.style.left = `${Math.random() * 100}vw`;
    heart.style.fontSize = `${size}px`;
    heart.style.setProperty('--duration', `${duration}s`);
    heart.style.setProperty('--drift', `${drift}vw`);
    document.body.appendChild(heart);

    setTimeout(() => {
      heart.remove();
    }, duration * 1000 + 200);
  }

  escribir();
  actionButton.addEventListener('click', mostrarMensaje);
  setInterval(crearCorazon, 700);
});