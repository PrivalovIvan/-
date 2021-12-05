"use strict"
// Задание 1.
function globalNum() {
    let numberUser = prompt('Введите число в диапазоне от 0 до 999')

    let num = {
        units: null,
        tens: null,
        hundreds: null
    }
    if (numberUser < 1000) {
        num.units = Math.floor(numberUser % 10)
        num.tens = Math.floor(numberUser / 10 % 10)
        num.hundreds = Math.floor(numberUser / 100 % 10)
        console.log(num)
    } else if (numberUser > 999 || numberUser < 0 || numberUser !== /[0-9]/) {
        console.log('Вы ввели некорректные данные!')
    }
}

globalNum()

//Задание 1.1 ES5
function Product(name, price) {
    this.name = name;
    this.price = price;
}
Product.prototype.make25PercentDiscount = function () {
    console.log(this.name + ' со скидкой: ' + (this.price - (this.price / 100 * 25)))
}
let product = new Product('Cахар', 100)
product.make25PercentDiscount()

//Задание 1.1 ES6
class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
    make25PercentDiscount() {
        console.log(this.name + ' со скидкой: ' + (this.price - (this.price / 100 * 25)))
    }
}
let product = new Product('Cахар', 100)
product.make25PercentDiscount()

//Задание 1.2 ES5

function Post(author, text, date) {
    this.author = author
    this.text = text
    this.date = date
}

Post.prototype.edit = function (text) {
    this.text = text
}
this.date = 'date'
let postObj = new Post('author', 'text', date);
console.log(postObj);
postObj.edit('text2');
console.log(postObj);

//Задание 1.2 ES6


function AttachedPost(author, text, date, highlighted) {
    Post.call(this, author, text, date)
    this.highlighted = false

}

AttachedPost.prototype = Object.create(Post.prototype)
AttachedPost.prototype.constructor = AttachedPost;


AttachedPost.prototype.makeTextHighlighted = function () {
    this.highlighted = true
}
const attachedObj = new AttachedPost('author2', 'more text', date);
console.log(attachedObj);
attachedObj.makeTextHighlighted();
attachedObj.edit('more text 2');
console.log(attachedObj);



