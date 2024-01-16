var alert = document.getElementById("alert")
var alertText = document.getElementById("alert_text")

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
var orderForm = document.getElementById("order_form")

var urlServer = 'https://simplechocolatebackend.onrender.com'

try {
    fetch(urlServer + "/products")
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
                    var orderTotalButton = document.getElementById("order_submit_button")

                    orderTotalButton.value = data[i].id

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
                    var orderTotalButton = document.getElementById("order_submit_button")

                    orderTotalButton.value = data[i].id

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

orderForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const nameValue = document.getElementById('order_name').value;
    const surnameValue = document.getElementById('order_surname').value;
    const emailValue = document.getElementById('order_email').value;
    const phoneValue = document.getElementById('order_phone').value;
    const cardValue = document.getElementById('order_card').value;
    const orderButton = document.getElementById("order_submit_button")

    const alert = document.querySelector("#alert")
    const alertText = document.querySelector("#alert_text")

    try {
        fetch(urlServer + "/order", {
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "id": orderButton.value,
                "name": nameValue,
                "surname": surnameValue,
                "email": emailValue,
                "phone": phoneValue,
                "card": cardValue
            })
          })
          .then(data => data.json())
          .then(data => {
            if(data.isSuccess){
                alert.style.display = "block"
                alertText.textContent = "Your order is confirmed. A consultant will be in touch shortly."
                setTimeout(() => {
                    alert.style.display = "none"
                    orderModal.style.display = "none"
                }, 5000)
            }else {
                alert.style.display = "block"
                alertText.textContent = "Something went wrong try again later."
                setTimeout(() => {
                    alert.style.display = "none"
                    orderModal.style.display = "none"
                }, 5000)
            }
          })
      } catch (e) {
        console.error(e.message)
      }

})