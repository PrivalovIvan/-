// Задание 1.
//пример 1 
/*
с = 2 так как оно равняется значению а, а оно в свою очередь изначально равнялось 1 ,
 и префиксный инкремент увеличил это значение на 1 и стало 2
 */
let a = 1, b = 1, c, d;
c = ++a;
alert(c);

//пример 2 
/*  изначально b = 1 из этого следует, что d = 1 , но так как b с постфиксным инкрементом, то на данный момент b = 1 .
*/
d = b++;
alert(d); //ответ: 1

//пример 3 
/*
а = 2
с = 2 + (2 + 1) 
*/
c = 2 + ++a;
alert(c); //ответ: 5

//пример 4 
/* из второго примера прилетает b = 2, d = 2 + 2 = 4
*/
d = 2 + b++;
alert(d); //ответ: 4

alert(a); //3  из третьего примера получаем без изменений a = 3.
alert(b); //3 из четвертого примера получаем b = 2 + увеличиваем ее на еденицу(постфиксный инкремент) итого b = 3

//Задание 2.
/* x = 1 + ( 2*2 (значение а * 2 и будет присвоенно вместо значения а) ) 
a = 4
x = 5
*/
let a = 2;
let x = 1 + (a *= 2);

// Задание 3.

let a = 9
let b = 7

if (a >= 0 && b >= 0) {
    alert(a - b)
} else if (a < 0 && b < 0) {
    alert(a * b)
} else {
    alert(a + b)
}

//Задание 4, 5

function getSum(arg1, arg2) {
    return arg1 + arg2
}
function getDifference(arg1, arg2) {
    return arg1 - arg2
}
function getQuotient(arg1, arg2) {
    return arg1 / arg2
}
function getProduct(arg1, arg2) {
    return arg1 * arg2
}

function mathOperation(arg1, arg2, operation) {
    switch (operation) {
        case getSum:
            return console.log(getSum(arg1, arg2))
        case getDifference:
            return console.log(getDifference(arg1, arg2))
        case getQuotient:
            return console.log(getQuotient(arg1, arg2))
        case getProduct:
            return console.log(getProduct(arg1, arg2))
    }
}

mathOperation(2, 3, getQuotient)


//Задание 6.
let numUser = prompt('Какую сумму вы хотите положить на счет?')
let ending = numUser % 10


if (numUser >= 20 || numUser <= 9) {
    if (ending >= 2 && ending <= 4) {
        console.log(`Ваша сумма в ${numUser} рубля успешно зачислена!`)
    } else if (ending >= 5 && ending <= 9 || ending == 0) {
        console.log(`Ваша сумма в ${numUser} рублей успешно зачислена!`)
    } else {
        console.log(`Ваша сумма в ${numUser} рубль успешно зачислена!`)
    }
} else if (numUser >= 10 && numUser < 20) {
    console.log(`Ваша сумма в ${numUser} рублей успешно зачислена!`)
}
