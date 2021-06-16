// // task 1

// let num = 10;
// num++;
// ++num
// num--
// alert(num);

// // task 2

// let str = 'Привет';
// let num = 123;
// let flag = true;
// let txt = 'true';

// arrayObjects = [str, num, flag, txt]
// console.log(arrayObjects)
// for (let i of arrayObjects) {
//     console.log(`${i} - ${typeof i}`)
// }

// // task 3 

// a = parseInt(prompt('введите первое число:')) 
// b = +prompt('введите второе число:')

// if (isNaN(a) || isNaN(b)) {
//     alert('Вы ввели нечисловое значение!')
// }   else if (a < b) {
//     alert(`Наименьшее число: ${a}`)
// }   else if (a === b) {
//     alert('Числа равны')
// }   else {
//     alert(`Наименьшее число: ${b}`)
// }

// // task 4 

// let a1 = 5
// let a2 = -11
// let a3 = 0

// let custom_array = [a1, a2, a3]
// let resultStr = 'Знаки чисел a1, a2, a3: '

// for (let i of custom_array) {
//     let signOfNumber
//     if (i === 0) {
//         signOfNumber = 0
//         resultStr = resultStr + signOfNumber + ', '
//     } else if (i < 0) {
//         signOfNumber = '-'
//         resultStr = resultStr + signOfNumber + ', '
//     } else {
//         signOfNumber = '+'
//         resultStr = resultStr + signOfNumber + ', '
//     }
// }

// console.log(a1, a2, a3)
// console.log(resultStr.slice(0, -2) + '.')

// // task 5

// let userAge = +prompt('How old are you?')
// let userSex = confirm('Ваш пол мужской?')
// console.log(userSex)

// if (userAge > 60) {
//     if (userSex == true) {
//         alert('Вы - дедушка!')
//     } else {
//         alert('Вы - бабушка!')
//     }
// } else if (userAge > 20 && userAge < 60) {
//     if (userSex == true) {
//         alert('Вы - мужчина!')
//     } else {
//         alert('Вы - женщина!')
//     }
// } else  if (userAge > 12 && userAge <= 20) {
//     if (userSex == true){
//         alert('Вы - юноша!')
//     }
//     else {
//         alert('Вы - девушка!')
//     }
// } else {
//     if (userSex == true){
//         alert('Вы - мальчик!')
//     }
//     else {
//         alert('Вы - девочка!')
//     }
// }

// // task 6

// function getSum(x) {
//     let sum = 0
//     for (let i = 1; i < x + 1; i++) {
//         sum += i
//     }
//     return sum
// }

// alert(getSum(100))

// task 7
let day = prompt('Введите дату: ')
let seconds = 60 * 60 * 24 * 7

alert(`Сегодня ${day} узнал, что количество секунд в одной неделе составляет - ${seconds}`)