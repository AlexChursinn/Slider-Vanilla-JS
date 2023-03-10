function slidesPlugin(activeSlide = 0) {
  /* 34) Для начала нам надо получить каждый из этих слайдов чтобы ими можно было управлять */

const slides = document.querySelectorAll('.slide') /* 35) Получаем каждый из наших слайдов */

slides[activeSlide].classList.add('active') /* 42) Наши слайды это массив и с помощью этого кода мы можем сами задать какой из слайдов будет активным */

/* 36) необходимо пройти цикл каждого слайда и получить определенного слушателя */

for (const slide of slides) { /* 37) через эту функцию берем слайд из строки выше слайдов */
  slide.addEventListener('click', () => {
    clearActiveClasses() /* 39) чтобы активная был только один слайд на который мы счелкаем */
    slide.classList.add('active')                         /* 38) делаем слушателя и при клике на слад он становится активным */
  })
} 

function clearActiveClasses() { /* 40) Создаем эту функцию (очищаем все активные классы) */
  slides.forEach((slide) => {
    slide.classList.remove('active')
  })
}
} /* 43) Создали (опрелелили) функцию slidesPlugin и туда перенесли весь наш написанный код до этого */

slidesPlugin(4) /* 44) Вызываем нашу функцию чтобы она работала, прописываем в функцию в саммом верху имя ее и копируем это же имя в массив и теперь тут в скобках указываем какой слайд по номеру показывать, также в функцию добавили = 0 и если значение сами не задаем то будет открываться первый слайд по умолчанию*/