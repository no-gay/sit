document.addEventListener('DOMContentLoaded', function() {
  // Управление контейнером с гифками
  const gifsContainer = document.getElementById('car-gifs-container');
  const gifsToggleBtn = document.getElementById('gifs-toggle-btn');

  if (gifsToggleBtn && gifsContainer) {
    // Инициализируем скрытое состояние
    gifsContainer.classList.add('collapsed');
    gifsToggleBtn.classList.add('collapsed');
    gifsToggleBtn.textContent = '▲ Гифки';

    gifsToggleBtn.addEventListener('click', function() {
      gifsContainer.classList.toggle('collapsed');
      gifsToggleBtn.classList.toggle('collapsed');

      // Меняем текст кнопки
      if (gifsContainer.classList.contains('collapsed')) {
        gifsToggleBtn.textContent = '▲ Гифки';
      } else {
        gifsToggleBtn.textContent = '▼ Гифки';
      }
    });
  }

  // Получаем элементы фильтра
  const filterSelect = document.getElementById('filter');
  const carCards = document.querySelectorAll('.car-card');

  // Обработчик изменения фильтра
  filterSelect.addEventListener('change', function() {
    const selectedType = this.value;

    carCards.forEach(card => {
      if (selectedType === 'all' || card.getAttribute('data-type') === selectedType) {
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }
    });
  });

  // Обработка формы контактов
  const contactForm = document.querySelector('form');
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    console.log('Форма отправлена:', { name, email, message });
    alert('Спасибо за ваше сообщение! Мы свяжемся с вами скоро.');
    contactForm.reset();
  });
});
