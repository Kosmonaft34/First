let hello ='Hello world'
const hello3='Hello world3'
var hello2 = 'Hello world2' 
// console.log(hello)
// console.log(hello2)
// console.log(hello3)
// alert('Hello world')

//Типы переменных
// let stringVar='Some string'
// console.log(typeof stringVar)

// let numberVar=1234
// console.log(typeof numberVar)

// let booleanVar=true // false
// console.log(typeof booleanVar)

// let underfinedVar //=underfined
// console.log(typeof underfinedVar)

// let nullVar=null
// console.log(typeof nullVar)

let objectVar={  //создание объекта
    key1: 1, //ключ:значение
    key2: 'Value2'
}
console.log(typeof objectVar);
console.log(objectVar.key2)

function helloFunction(){ //тип данных функция
    return 'Hello from function'
}

// console.log (helloFunction())
// console.log(typeof helloFunction)

function helloUser(congrate,name){
    return congrate + ' ', + name
}

console.log('Hello','John')
console.log('Hello','Jane')

let header= document.getElementById('header')
header.textContent=hello3