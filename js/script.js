const contents = document.querySelectorAll('.program-line__content')
const descrs = document.querySelectorAll('.program-line__descr')

const classRemover = () => {
    descrs.forEach((el) => {
        el.classList.remove('active')
    })
}

contents.forEach((elem) => {
    const title = elem.querySelector('.program-line__title')
    const descr = elem.querySelector('.program-line__descr')
    title.addEventListener('click', () => {
        classRemover()
        descr.classList.add('active')
    })
})