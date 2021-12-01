// Задание 1.
for (i = 0; i <= 10; i++) {
    if (i === 0) {
        console.log(`${i} - это нуль`)
    } else if (i % 2 === 0) {
        console.log(`${i} - число четное`)
    } else if (i % 2 === 1) {
        console.log(`${i} - число нечетное`)
    }
}

//Задание 2.

const post = {
    author: "John", //вывести этот текст 
    postId: 23,
    comments: [{
        userId: 10,
        userName: "Alex",
        text: "lorem ipsum",
        rating: {
            likes: 10,
            dislikes: 2 //вывести это число
        }
    },
    {
        userId: 5, //вывести это число 
        userName: "Jane",
        text: "lorem ipsum 2", //вывести этот текст 
        rating: {
            likes: 3,
            dislikes: 1
        }
    },]
};

console.log(post.author)
console.log(post.comments[0].rating.dislikes)
console.log(post.comments[1].userId)
console.log(post.comments[1].text)

//Задание 3.

const products = [{
    id: 3,
    price: 200,
}, {
    id: 4,
    price: 900,
}, {
    id: 1,
    price: 1000,
}];

function sale(basicPrice) {
    return basicPrice - (basicPrice * 0.15)
}

products.forEach(function (totalPrice) {
    return console.log(sale(totalPrice.price))
})

//Задание 4.

const products = [{
    id: 3,
    price: 127,
    photos: ["1.jpg", "2.jpg",]
}, {
    id: 5,
    price: 499,
    photos: []
}, {
    id: 10,
    price: 26,
    photos: ["3.jpg"]
}, {
    id: 8,
    price: 78,

},];

//4.1
let hasAphoto = products.filter(function (products) {
    if (products.photos === undefined) {
        products.photos = []
    }
    return products.photos.length >= 1
})
console.log(hasAphoto)

//4.2
let sortPrice = products.sort(function (a, b) {
    if (a.price > b.price) {
        return 1
    }
    if (a.price < b.price) {
        return -1
    }
    return 0
})
console.log(sortPrice)

//Задание 5.
for (i = 0; i < 10; console.log(i++)) { }

//Задание 6.

for (let x = 'x'; x.length < 20; x += 'x') {
    console.log(x)
}
