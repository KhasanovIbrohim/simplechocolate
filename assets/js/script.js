var productsWrapperNext = document.querySelector(".products__wrapper__next__button")
var productsWrapperPrev = document.querySelector(".products__wrapper__prev__button")

var orderModal = document.querySelector("#order__modal")
var closeOrderModalBtn = document.querySelector("#closeOrderModalBtn")

closeOrderModalBtn.addEventListener("click", function click() {
    orderModal.style.display = "none"
})

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

let current = 0;
var productsWrapperRender = document.querySelector(".products__wrapper__cards")

try {
    fetch('https://simplechocolatebackend.onrender.com/products')
        .then(res => res.json())
        .then(data => {
            let carousel1 = document.createElement("div")
            carousel1.className = "products__wrapper__carousel"
            carousel1.id = "first__corousel"
            for (let i = 0; i < 4; i++) {
                let card = document.createElement("div")
                let img = document.createElement("img")
                let title = document.createElement("h1")
                let text = document.createElement("p")
                let button = document.createElement("button")

                card.className = "products__wrapper__carousel__box"

                img.setAttribute('src', data[i].image);
                title.textContent = data[i].name
                text.textContent = data[i].description
                button.textContent = data[i].price
                button.value = data[i].id

                card.appendChild(img)
                card.appendChild(title)
                card.appendChild(text)
                card.appendChild(button)
                carousel1.appendChild(card)

                button.addEventListener("click", function click() {
                    var orderTotalImage = document.getElementById("order__total__image")
                    var orderTotalTitle = document.getElementById("order__total__title")
                    var orderTotalDesc = document.getElementById("order__total__desc")
                    var orderTotalPrice = document.getElementById("order__total__price")

                    orderModal.style.display = "flex"

                    orderTotalImage.setAttribute('src', data[i].image);
                    orderTotalTitle.textContent = data[i].name
                    orderTotalDesc.textContent = data[i].description
                    orderTotalPrice.textContent = data[i].price
                })
            }
            productsWrapperRender.appendChild(carousel1)

            let carousel2 = document.createElement("div")
            carousel2.className = "products__wrapper__carousel"
            carousel2.id = "second__corousel"
            for (let i = 4; i < 8; i++) {
                let card = document.createElement("div")
                let img = document.createElement("img")
                let title = document.createElement("h1")
                let text = document.createElement("p")
                let button = document.createElement("button")

                card.className = "products__wrapper__carousel__box"

                img.setAttribute('src', data[i].image);
                title.textContent = data[i].name
                text.textContent = data[i].description
                button.textContent = data[i].price
                button.value = data[i].id

                card.appendChild(img)
                card.appendChild(title)
                card.appendChild(text)
                card.appendChild(button)
                carousel2.appendChild(card)

                button.addEventListener("click", function click() {
                    var orderTotalImage = document.getElementById("order__total__image")
                    var orderTotalTitle = document.getElementById("order__total__title")
                    var orderTotalDesc = document.getElementById("order__total__desc")
                    var orderTotalPrice = document.getElementById("order__total__price")

                    orderModal.style.display = "flex"

                    orderTotalImage.setAttribute('src', data[i].image);
                    orderTotalTitle.textContent = data[i].name
                    orderTotalDesc.textContent = data[i].description
                    orderTotalPrice.textContent = data[i].price
                })
            }
            productsWrapperRender.appendChild(carousel2)

            productsWrapperNext.addEventListener("click", function productsNext() {
                if (current == 0) {
                    carousel1.style.display = "none"
                    carousel2.style.display = "flex"
                    current++;
                } else {
                    carousel2.style.display = "none"
                    carousel1.style.display = "flex"
                    current = 0
                }
            })

            productsWrapperPrev.addEventListener("click", function productsPrev() {
                if (current == 0) {
                    carousel1.style.display = "none"
                    carousel2.style.display = "flex"
                    current++;
                } else {
                    carousel2.style.display = "none"
                    carousel1.style.display = "flex"
                    current = 0
                }
            })
        })
} catch (e) {
    console.error(e.message)
}