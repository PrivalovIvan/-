'use strict';

const pathToImages = 'img'
const pathToProductsImages = `${pathToImages}/Catalog`
const catalogItemsEl = document.querySelector('.block__cards')

/**
 * Эта функция принимает один из объектов из массива products в файле products.js.
 * @param {ProductDTO} product объект с информацией о продукте
 * @returns {string} html-разметка карточки товара
 */
function getProductMarkup(product) {
    return `

    <div class="featuredItem">

        <div class="block__card">
            <img src="${pathToProductsImages}/${product.image}" alt="${product.name}">

            <div class="featuredImgDark">
                <button data-productId="${product.id}">
                    <img src="${pathToImages}/cart.svg" alt="">
                    Add to Cart
                </button>
            </div>

            <div class=""block__bigtext"">
                ${product.name}
            </div>
            <div class="block__minitext">
                ${product.description}
            </div>
            <div class="block__cash">
                ${product.price}
            </div>
        </div>
        </div>

     `
}



/**
 * Функция вставляет карточки товаров в страницу.
 * @param {ProductDTO[]} products массив товаров из файла products.js
 * @param {HTMLDivElement} catalogItemsEl элемент с классом .block__cards
 */
function insertProductsIntoPage(products, catalogItemsEl) {
    let productsMarkup = '';
    for (let product of products) {
        productsMarkup += getProductMarkup(product)
    }
    catalogItemsEl.insertAdjacentHTML('afterbegin', productsMarkup)
}

/**
 * Функция назначает обработку клика на все кнопки "Add to cart".
 */
function addEventListenersForAddToCartButtons() {
    const addToCartBtns = document.querySelectorAll('button[data-productId]');
    addToCartBtns.forEach(function (button) {
        button.addEventListener('click', addedProductHandler);
    })
}


/**
 * Функция-обработчик события клика по кнопке "Add to cart".
 * @param {MouseEvent} event
 */
function addedProductHandler(event) {
    const productId = event.currentTarget.getAttribute('data-productId');
    addProductIntoBasket(productId);
}


insertProductsIntoPage(products, catalogItemsEl)
addEventListenersForAddToCartButtons();
