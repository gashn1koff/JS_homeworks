// task 1

// function createObject (massivA, massivB) {
//     let customObject = {}
//     for (let i = 0; i < massivA.length; i++) {
//         customObject[massivA[i]] = massivB[i]
//     }
//     return customObject
// }

// let masA = ['Gashnikov', 'Nikita', 'Olegovich']
// let masB = ['1111', '2222', '33333']

// a = createObject(masA, masB)
// console.log (a)


// task 2

// let mas = [1, 2, 3, 4]

// function getEvenNumber () {
//     let massiv = mas.slice()
//     for (let i = 0; i < massiv.length; i++) {
//         if (massiv[i] % 2 == 0) {
//             massiv.splice(i, 1)
//         }
//     }
//     return massiv
// }

// function getSquareNumber () {
//     let resultMassiv = []
//     let massiv = mas.slice()
//     for (let i of massiv){
//         resultMassiv.push(Math.pow(i, 2))
//     }
//     return resultMassiv

// }

// function findString (arr) {
//     let flag = 0
//     for (let i of arr){
//         if (typeof(i) === 'string'){
//             flag += 1
//         }
//     }
//     if (flag > 0){
//         return true
//     }
//     return false
// }
// my = [111,  true]

// console.log(getEvenNumber())
// console.log(getSquareNumber())
// console.log(findString(my))

// task 3

// function getAges(array){
//     let resultArray = []
//     for (let i of array) {
//         resultArray.push(i.age)
//     }
//     return resultArray

// }

// console.log(getAges([
//     { name: 'Sergey', age: 33 },
//     { name: 'Daria', age: 33 },
//     { name: 'Sergey', age: 311 },
//     { name: 'Sergey', age: 344 },
// ])) 

// task 4

// function getAges(array, key){
//     let resultArray = []
//     for (let i of array) {
//         if(key = 'name'){
//             resultArray.push(i['name'])
//         } else {
//             resultArray.push(i['age'])
//         }
//     }
//     return resultArray

// }
//  myArray = [
//     { name: 'Sergey', age: 33 },
//     { name: 'Daria', age: 33 },
//     { name: 'Sergey', age: 311 },
//     { name: 'Sergey', age: 344 },
// ]

// console.log(getAges(myArray, 'name'))

// task 5

// let myobj = {}
// myobj.name = 'nikita'
// myobj.fam = 'gashnikoff'
// myobj.otch = 'olegovich'

// function convertObject(obj) {
//     console.log('старый объект')
//     console.log(obj)
//     for (let [k, v] of Object.entries(obj)){
//          obj[v] = k
//          delete obj[k]
//     }
//     console.log('новый объект')
//     console.log(obj)
// }

// convertObject(myobj)

// task 6

// function isEvenValue(obj) {
//     let flag = 0
//     for (let i in obj) {
//         if (obj[i] % 2 == 0) {
//             flag += 1
//         }
//     }
    
//     if (flag > 0) {
//         return true
//     } 
//     return false
// }

// let myobj = { x: 1, y: 2 }
// console.log(isEvenValue(myobj))

// task 7

// function calculate(arr) {
//     resultArray = {}
//     arr.forEach(obj => {
    
//         for (let key in obj){
//             if (key in resultArray) {
//                 resultArray[key] = resultArray[key] + obj[key]
//             } else {
//                 resultArray[key] = obj[key]
//             }
//         }
//     });
//     console.log(resultArray)
//     return resultArray
// }

// calculate([
//     { x: 1, z: 2, y: 3 },
//     { x: 10, z: 21, y: 4 },
//     { x: 2, z: 3, y: 4 },
//     { a: 1, b: 2 },
// ]);

// task 8 

function changeString(str) {
    if (str[0] == str[0].toUpperCase()){
        str = str[0].toLowerCase() + str.slice(1).toUpperCase()
        return str
    }
    return str = str[0].toUpperCase() + str.slice(1).toLowerCase()

}

let str = 'nIKITA GASHNIKOV'
console.log(changeString(str))


