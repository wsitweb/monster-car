'use strict'
let elementsNum = document.querySelectorAll('.characteristic__number'),
    header = document.querySelector('.header'),
    body = document.querySelector('body'),
    headElement = document.querySelector('.head'),
    aboutElement = document.querySelector('.about'),
    specsElement = document.querySelector('.specs')
    ;


    function elementInViewport(el){
        var bounds = el.getBoundingClientRect();
        return (
            (bounds.top + bounds.height > 0) && // Елемент ниже верхней границы
            (window.innerHeight - bounds.top > 0) && // Выше нижней
            (bounds.left + bounds.width > 0) && // Правее левой
            (window.innerWidth - bounds.left > 0)// Левее правой
        );
    }
    function elementInViewportTwo(el){
        var bounds = el.getBoundingClientRect();
        let positionTop =(bounds.top + (bounds.height / 2) - window.innerHeight) * -1;
        let calcTransformPosition = Math.floor(positionTop / 10);
        if(calcTransformPosition > 0){
            return (calcTransformPosition)
        }else{}
    }


    let check = 0;

document.addEventListener("scroll", (e) => {
    var el = document.querySelector(".characteristic");
    var inViewport = elementInViewport(el);

    if(!/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i
    .test(navigator.userAgent)){
        headElement.style.backgroundPositionY = `${elementInViewportTwo(headElement)/2}%`
        aboutElement.style.backgroundPositionY = `${elementInViewportTwo(aboutElement) /1.1 + 30}%`
        specsElement.style.backgroundPositionY = `${elementInViewportTwo(specsElement) /2.5 + 40}%`
    }

    if(window.innerWidth <= 692){
        if(Math.floor(window.scrollY) >= 150 && check == 0){
            header.style.backgroundColor = '#15181F';
            check++;
        }else if (Math.floor(window.scrollY) <= 150 && check == 1){
            check--;
            header.style.backgroundColor = '';
        }
    }
    if(elementInViewport(elementsNum[0])){
        elementsNum[0].style.cssText = 'counter-reset: ms var(--numberOne); animation: count 4s;';
        elementsNum[1].style.cssText = 'counter-reset: ms var(--numberTwo); animation: count 4s;';
        elementsNum[2].style.cssText = 'counter-reset: ms var(--numberThree); animation: count 4s;';
    }
    
});

document.querySelector('.header__button-burger').addEventListener('click', (event) => {
    event.target.closest('.header').classList.toggle('active');
    body.classList.toggle('disable');
});