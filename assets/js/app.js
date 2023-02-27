let number_one_element =  document.querySelector('.number_one'),
    number_two_element = document.querySelector('.number_two'),
    number_three_element = document.querySelector('.number_three'),
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

    function counter(number, element, second){
                let num = 0;
                if((number % 1) == 0){
                    second = (second * 1000) / (number * 2);
                }else{
                    second = (second * 1000) / (number * 2 * 10);
                }
                function get(){
                    if((number % 1) == 0){

                        if(num < number && num < (number / 100 * 80)){
                            num++;
                            element.innerHTML = num;
                            setTimeout(get, second / 2);
                        }else if(num < number && num < (number / 100 * 90)){
                            num++;
                            element.innerHTML = num;
                            setTimeout(get, second * 2);
                        }else if(num < number){
                            num++;
                            element.innerHTML = num;
                            setTimeout(get, second * 4);
                        }

                    }else{
                        let numberTwo = number * 10;
                        if(num < numberTwo && num < (numberTwo / 100 * 80)){
                            num++;
                            element.innerHTML = num / 10;
                            setTimeout(get, second / 2);
                        }else if(num < numberTwo && num < (numberTwo / 100 * 90)){
                            num++;
                            element.innerHTML = num / 10;
                            setTimeout(get, second * 2);
                        }else if(num < numberTwo){
                            num++;
                            element.innerHTML = num / 10;
                            setTimeout(get, second * 4);
                        }

                    }
                }
                    setTimeout(get, second);
            }
    let check = 0,
        checkTwo = 0;

document.addEventListener("scroll", (e) => {
    var el = document.querySelector(".characteristic");
    var inViewport = elementInViewport(el);

    if(!/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i
    .test(navigator.userAgent)){
        headElement.style.backgroundPositionY = `${elementInViewportTwo(headElement)/2}%`
        aboutElement.style.backgroundPositionY = `${elementInViewportTwo(aboutElement) /1.1 + 30}%`
        specsElement.style.backgroundPositionY = `${elementInViewportTwo(specsElement) /2.5 + 40}%`
    }

    if(inViewport && check == 0){
        counter(405, number_one_element, 1);
        counter(7, number_two_element, 7);
        counter(3.5, number_three_element, 5);
        check++;
    }
    if(window.innerWidth <= 692){
        if(Math.floor(window.scrollY) >= 150 && checkTwo == 0){
            header.style.backgroundColor = '#15181F';
            checkTwo++;
        }else if (Math.floor(window.scrollY) <= 150 && checkTwo == 1){
            checkTwo--;
            header.style.backgroundColor = '';
        }
    }
    
});

document.querySelector('.header__button-burger').addEventListener('click', (event) => {
    event.target.closest('.header').classList.toggle('active');
    console.log(event.target.closest('.header'));
    body.classList.toggle('disable');
});