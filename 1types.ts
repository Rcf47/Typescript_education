const string: string = 'Hello'
const number: number = 4
const number2: number = 3

const arrNumber: [number, number, number] = [1, 2, 3,]
const arr2Number: number[] = [1, 2, 3, 4, 5,]
const arr3Number: Array<number> = [1, 1, 2, 3, 5, 8, 13] // generic types
const contact: [string, number] = ["Vadim", 34] //Tuple types

function voidFunction(name: string): void {
  console.log(name)
} // void if we don't have return

function neverFunction(message: string): never {
  throw new Error(message)
} // never for errors and infinite function

type Login = string | number
let login: Login = 'Vadim34'
login = 12345

console.log(string)
console.log(number + number2)
console.log(arrNumber[2])
console.log(arr2Number[1])
console.log(arr3Number[0])
