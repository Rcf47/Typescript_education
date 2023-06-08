"use strict";
const string = 'Hello';
const number = 4;
const number2 = 3;
const arrNumber = [1, 2, 3,];
const arr2Number = [1, 2, 3, 4, 5,];
const arr3Number = [1, 1, 2, 3, 5, 8, 13]; // generic types
const contact = ["Vadim", 34]; //Tuple types
function voidFunction(name) {
    console.log(name);
} // void if we don't have return
function neverFunction(message) {
    throw new Error(message);
} // never for errors and infinite function
let login = 'Vadim34';
login = 12345;
console.log(string);
console.log(number + number2);
console.log(arrNumber[2]);
console.log(arr2Number[1]);
console.log(arr3Number[0]);
//# sourceMappingURL=1types.js.map