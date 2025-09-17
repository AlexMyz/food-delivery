const modalFunc = () => {
  const modal = document.querySelector(".cart-modal__overlay")
  const cartBtn = document.getElementById("cart-button")

  const openModal = () => {
    modal.classList.add("open")
  }

  const closeModal = () => {
    modal.classList.remove("open")
  }

  cartBtn.addEventListener("click", () => {
    openModal()
  })

  modal.addEventListener("click", (e) => {
    if (
      e.target.classList.contains("cart-modal__overlay") ||
      e.target.closest(".cart-modal__header--close")
    ) {
      closeModal()
    }
  })
}

const restsFunc = () => {
  const container = document.getElementById("rests-container")

  const restsArray = [
    {
      id: 0,
      title: "Пицца плюс",
      time: 50,
      rating: 4.6,
      price: 900,
      type: "Пицца",
      img: "01",
    },
    {
      id: 1,
      title: "Тануки",
      time: 50,
      rating: 4.6,
      price: 900,
      type: "Пицца ",
      img: "02",
    },
    {
      id: 2,
      title: "FoodBand",
      time: 50,
      rating: 4.6,
      price: 900,
      type: "Пицца",
      img: "03",
    },
    {
      id: 3,
      title: "Жадина-пицца",
      time: 50,
      rating: 4.6,
      price: 900,
      type: "Пицца",
      img: "04",
    },
    {
      id: 4,
      title: "Точка еды",
      time: 50,
      rating: 4.6,
      price: 900,
      type: "Пицца",
      img: "05",
    },
    {
      id: 5,
      title: "PizzaBurger",
      time: 50,
      rating: 4.6,
      price: 900,
      type: "Пицца",
      img: "06",
    },
  ]

  const loading = () => {
    container.innerHTML =
      '<p style="width: 100%; text-align: center;">Загрузка</p>'
  }

  const renderRests = (array) => {
    container.innerHTML = ''
    array.forEach((card) => {
      container.insertAdjacentHTML(
        "beforeend",
        `
          <a href="./goods.html?id=${card.id}" class="products-product">
            <div class="products-product__image">
              <img src="./img/rests/${card.img}.jpg" alt="rest-${card.img}" />
            </div>
            <div class="products-product__description">
              <div class="products-product__description-row">
                <h4 class="products-product__description--title">
                  ${card.title}
                </h4>
                <div class="products-product__description--bage">
                  ${card.time} мин
                </div>
              </div>
              <div class="products-product__description-row">
                <div class="products-product__description-info">
                  <div class="products-product__description--raiting">
                    <img src="./img/icons/star.svg" alt="star" />
                    ${card.rating}
                  </div>
                  <div class="products-product__description--price">
                    От ${card.price} ₽
                  </div>
                  <div class="products-product__description--group">
                    ${card.type}
                  </div>
                </div>
              </div>
            </div>
          </a>
        `
      )
    })
  }

  if (container) {
    loading()

    setTimeout(() => {
      renderRests(restsArray)
    }, 1000)
  }
}

const goodsFunc = () => {
  const goodsArray = [
    {
      id: 0,
      img: "01",
      name: "Ролл угорь стандарт",
      text: "Рис, угорь, соус унаги, кунжут, водоросли нори.",
      price: 250,
    },
    {
      id: 1,
      img: "02",
      name: "Калифорния лосось стандарт",
      text: "Рис, лосось, авокадо, огурец, майонез, икра масаго, водоросли нори..",
      price: 395,
    },
    {
      id: 2,
      img: "03",
      name: "Окинава стандарт",
      text: " Рис, креветка отварная, сыр сливочный, лосось, огурец свежий...",
      price: 250,
    },
    {
      id: 3,
      img: "04",
      name: "Цезарь маки хl",
      text: "Рис, куриная грудка копченая, икра масаго, томат, айсберг, соус цезарь...",
      price: 395,
    },
    {
      id: 4,
      img: "05",
      name: "Ясай маки стандарт 185 г",
      text: "Рис, помидор свежий, перец болгарский, авокадо, огурец, айсберг",
      price: 250,
    },
    {
      id: 5,
      img: "06",
      name: "Ролл с креветкой стандарт",
      text: "Рис, водоросли нори, креветки отварные, сыр сливочный, огурцы",
      price: 395,
    },
  ]

  const container = document.getElementById("goods-container")

  const renderGoods = (array) => {
    container.innerHTML = ''
    array.forEach(card => {
      container.insertAdjacentHTML(
        "beforeend",
        `
        <div class="products-product">
          <div class="products-product__image">
            <img src="./img/goods/${card.img}.jpg" alt="goods-${card.img}">
          </div>
          <div class="products-product__description">
            <div class="products-product__description-row">
              <h5 class="products-product__description--name">${card.name}</h5>
            </div>
            <div class="products-product__description-row">
              <p class="products-product__description-text">
                ${card.text}
              </p>
            </div>
            <div class="products-product__description-row">
              <div class="products-product__description-controls">
                <button class="btn btn-primary">
                  В корзину
                  <img src="./img/icons/shopping-cart.svg" alt="cart" />
                </button>
                <span class="products-product__description-price">${card.price} ₽</span>
              </div>
            </div>
          </div>
        </div>
        `
      )
    });
  }

  if (container) {
    renderGoods(goodsArray)
  }
} 

modalFunc()
restsFunc()
goodsFunc()
