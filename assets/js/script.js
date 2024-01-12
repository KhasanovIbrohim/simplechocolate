var productsWrapperNext = document.querySelector(".products__wrapper__next__button")
var productsWrapperPrev = document.querySelector(".products__wrapper__prev__button")
var firstCorousel = document.querySelector(".first__corousel")
var secondCorousel = document.querySelector(".second__corousel")

let current = 0;

productsWrapperNext.addEventListener("click", function productsNext(){
    if(current == 0){
        firstCorousel.style.display = "none"
        secondCorousel.style.display = "flex"
        current++;
    }else {
        secondCorousel.style.display = "none"
        firstCorousel.style.display = "flex"
        current = 0
    }
})

productsWrapperPrev.addEventListener("click", function productsPrev(){
    if(current == 0){
        firstCorousel.style.display = "none"
        secondCorousel.style.display = "flex"
        current++;
    }else {
        secondCorousel.style.display = "none"
        firstCorousel.style.display = "flex"
        current = 0
    }
})