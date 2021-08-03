let hello = 'Hello world'
const hello3 = 'Hello world3'
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

let objectVar = {  //создание объекта
    key1: 1, //ключ:значение
    key2: 'Value2'
}
console.log(typeof objectVar);
console.log(objectVar.key2)

function helloFunction() { //тип данных функция
    return 'Hello from function'
}

// console.log (helloFunction())
// console.log(typeof helloFunction)

function helloUser(congrate, name) {
    return congrate + ' ', + name
}

console.log('Hello', 'John')
console.log('Hello', 'Jane')

let header = document.getElementById('header')
header.textContent = hello3

function testFunc(arg1, arg2, arg3) {
    console.log(arg1)
    console.log(arg2)
    console.log(arg3)
}

// testFunc2(1,2) //arg3 будет indefinded

let testFunc2 = function (arg1, arg2, arg3) {
    console.log(arg1)
    console.log(arg2)
    console.log(arg3)
}

function FamyleName(Famyle, Name) {
    return Famyle + ' ' + Name
}
console.log('Вася', 'Петя')

// let num=0
// let clickBtn = document.getElementById('click')
// clickBtn.onclick = function(){
//     num = num + 1//либо num++ инкремент
//     //num+=10 увеличивает на нное число в данном случае 10
//         console.log('Click nums: '+ num)

// let userInput = document.getElementById("userName")
// let userInput2 = document.getElementById("userName2")
// let clickBtn = document.getElementById("click")
// clickBtn.onclick = function () {
//     let userName = userInput.value
//     let userName2 = userInput2.value
//     console.dir('Hello, ' + userName + ' ' + userName2)
// }


// let header2 = document.getElementById('header2')
// let userInput = document.getElementById('username')
// let clickBtn = document.getElementById('click')
// clickBtn.onclick = function () {
//     let username = userInput.value
//     header2.textContent = username.toUpperCase()
// }

let header2 = document.createElement('h2')
header2

let userInput = document.getElementById('username')
let clickBtn = document.getElementById('click')
clickBtn.parentElement.append(header2)
clickBtn.onclick = function () {
    let username = userInput.value
    header2.textContent = username.toUpperCase()
}
//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// let num2 = document.getElementById('num2')
// let num3 = 0
// clickBtn.onclick = function(){
//     num3 ++
//     num2.textContent = num3
// } 
//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
let section3 = document.getElementById('section3')
let div = document.createElement('div')
let button = document.createElement('button')
let input = document.createElement ('input')

section3.append(div)
div.append(button)
div.append(input)
button.textContent="Click me!"
input.type='text'
input.style.marginRight= '20px'
div.className = 'form'

