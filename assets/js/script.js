var productsWrapperNext = document.querySelector(".products__wrapper__next__button")
var productsWrapperPrev = document.querySelector(".products__wrapper__prev__button")
var firstCorousel = document.querySelector(".first__corousel")
var secondCorousel = document.querySelector(".second__corousel")

let current = 0;

productsWrapperNext.addEventListener("click", function productsNext() {
    if (current == 0) {
        firstCorousel.style.display = "none"
        secondCorousel.style.display = "flex"
        current++;
    } else {
        secondCorousel.style.display = "none"
        firstCorousel.style.display = "flex"
        current = 0
    }
})

productsWrapperPrev.addEventListener("click", function productsPrev() {
    if (current == 0) {
        firstCorousel.style.display = "none"
        secondCorousel.style.display = "flex"
        current++;
    } else {
        secondCorousel.style.display = "none"
        firstCorousel.style.display = "flex"
        current = 0
    }
})

document.addEventListener('DOMContentLoaded', function () {
    var openOrderModalBtn = document.querySelectorAll("#openOrderModalBtn")
    var orderModal = document.querySelector("#order__modal")
    var closeOrderModalBtn = document.querySelector("#closeOrderModalBtn")

    openOrderModalBtn.forEach(function (e) {
        e.addEventListener("click", function click() {
            var orderTotalImage = document.getElementById("order__total__image")
            var orderTotalTitle = document.getElementById("order__total__title")
            var orderTotalDesc = document.getElementById("order__total__desc")
            var orderTotalPrice = document.getElementById("order__total__price")

            orderModal.style.display = "flex"
            const buttonValue = e.value;

            const targetDiv = document.getElementById('product__' + buttonValue);

            const imageSrc = targetDiv.querySelector('img').src;
            const headingText = targetDiv.querySelector('h1').textContent;
            const paragraphText = targetDiv.querySelector('p').textContent;

            orderTotalImage.setAttribute('src', imageSrc);
            orderTotalTitle.textContent = headingText
            orderTotalDesc.textContent = paragraphText
            orderTotalPrice.textContent = e.textContent
        })
    });

    closeOrderModalBtn.addEventListener("click", function click() {
        orderModal.style.display = "none"
    })
});

document.addEventListener('DOMContentLoaded', function () {
    var openSubscribeModalBtn = document.querySelectorAll("#openSubscribeModal")
    var SubscribeModal = document.querySelector("#subscribe__modal")
    var closeSubscribeModalBtn = document.querySelector("#closeSubscribeModal")

    openSubscribeModalBtn.forEach(function (e) {
        e.addEventListener("click", function click() {
            SubscribeModal.style.display = "flex"
        })
    });

    closeSubscribeModalBtn.addEventListener("click", function click() {
        SubscribeModal.style.display = "none"
    })
});