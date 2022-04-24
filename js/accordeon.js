const contents = document.querySelectorAll('.program-line__content')
const descrs = document.querySelectorAll('.program-line__descr')

const classRemover = () => { // функция удаляет класс active у всех descrs
    descrs.forEach((el) => {
        el.classList.remove('active')
    })
}

contents.forEach((elem) => {
    const title = elem.querySelector('.program-line__title') // заголвок "Неделя №"
    const descr = elem.querySelector('.program-line__descr') // описание недели
    title.addEventListener('click', () => { // слушает клик на "Неделя №"
        classRemover() // убирается класс active у всех недель
        descr.classList.add('active') // добавляется класс active на кликнутой неделе
    })
})