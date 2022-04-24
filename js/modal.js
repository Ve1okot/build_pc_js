const modalBtn = document.querySelector('.modal__button') // кнопка "Оставить заявку"
const courseBtn = document.querySelector('.course__button') // кнопка "Заказать курс"
const modal = document.querySelector('.modal') // форма с модальным окном
const modalInner = document.querySelector('.modal__inner') // модальное окно
const closeBtn = document.createElement('span') // будущая кнопка закрытия модального окна

closeBtn.className = "close_btn"; // добавляется класс для стилизации в css
closeBtn.innerHTML = "X"; // контент 

modalInner.prepend(closeBtn); // вставка в НАЧАЛО родитеского элемента

modalBtn.addEventListener('click', () => { // слушаю кнопку вызова модального окна
    modal.style.display = 'flex' // добавляется инлайновый стиль flex для отображения окна
})

closeBtn.addEventListener('click', () => { // слушаю добавленную кнопку закрытия модального окна
    modal.style.display = '' // убирается инлайновый стиль flex для сокрытия окна
})

courseBtn.addEventListener('click', () => { // слушаю кнопку вызова модального окна
    modal.style.display = 'flex' // добавляется инлайновый стиль flex для отображения окна
})

modal.addEventListener('click', (event) => { // слушаю модальное окно
    const modalContent = event.target.closest('.modal__inner'); // modalContent элемент с классом modal__inner и его потомки
    (!modalContent) ? modal.style.display = '' : 0; //  (если НЕ область modalContent), то убирается значение инлайнового стиля display : иначе ничего не происходит
})