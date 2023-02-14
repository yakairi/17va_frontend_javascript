//variable y datos primitivos
//Define //Declarar
//string: cadena de texto = "yaki"
//number _integer = 1984
//float 3,14
//boolean= false o true
//
/* let firstName = "Yaki"; //string
let lastName = "Gonzalez";
let birthdayYear = "1984"; //number
let age = 39;
let dailyMates = "4";
let knowsHowToDrive = false; //boolean
let hasPets = true;
let willDinner; //undefined
console.log(firstName);
console.log(lastName);
console.log(hasPets);
console.log(willDinner);

console.log () */
//sugar syntax
// backstrick => template literas/ template strings
/* console.log(`Hola mi nombre es ${firstName} ${lastName}
y tengo ${age} a#os`);

let presentation = `Hola mi nombre es ${firstName} ${lastName}
y tengo ${age} a#os`;

console.log(presentation);
console.log(firstName);
console.log(typeof presentation);
firstName = "serena";
console.log(firstName); */
//typeof nos sirve para saber que tipo de datos es una variable
//operaradores aritmeticos
// +suma
//- resta
// * multiplicacion
// / division 
// % modulo (resto)

/* let number1 = 10;
let number2 = 5;

let result = number1 + number2;
console.log("Resta", number1- number2);
console.log("Suma",number1 + number2);
console.log("Producto", number1 * number2);
console.log("Division", number1 / number2);
console.log("Modulo", number1 %number2); */

//const => constante (inmutable)
//alert("No podemos ver este contenido")

/* const name = prompt("Ingrese su nombre:")
const age = prompt("Ingrese su edad:", 0);
const birthday = prompt("Ingrese su nacimiento:", "dd-mm-aaaa");
console.log(age);
console.log(`Usted ingreso su nombre: ${name}`);
console.log(`Usted ingreso su edad : ${age}`);
console.log(`Usted ingreso su a;o de nacimiento: ${birthday}`); */

const num1 = prompt("Ingrese el primer numero", 0);
const num2 = prompt("Ingrese el primer numero", 0);

//parseInt=> una funcion nativa de js que nos permite transformar de un string a un numero entero
console.log("La suma es:", parseInt(num1) + parseInt(num2));
console.log("La Resta es:", num1 - num2);
console.log("La Multiplicacion es:", num1 * num2);
console.log("La Division es:", num1 / num2);

