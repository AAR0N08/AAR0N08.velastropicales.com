const toggleBtn = document.getElementById('toggle-btn');
const body = document.body;

// Cargar modo guardado
if (localStorage.getItem('modo') === 'oscuro') {
  body.classList.add('oscuro');
  toggleBtn.textContent = '🌞 Modo Claro';
}

// Alternar modo
toggleBtn.addEventListener('click', () => {
  body.classList.toggle('oscuro');

  const modoOscuro = body.classList.contains('oscuro');
  toggleBtn.textContent = modoOscuro ? '🌞 Modo Claro' : '🌙 Modo Oscuro';

  localStorage.setItem('modo', modoOscuro ? 'oscuro' : 'claro');
});
