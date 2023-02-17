/*repaso*/
// funciones aritmeticas - return
// bonuus contador

//Las funciones debe hacer una sola cosa y hacerkl bien

/* const calcularArea = (base, altura) => {
    return base * altura
}
console.log (calcularArea(15, 10))

const restar = (a,b) =>{
    return a - b
}
const sumar = (a,b) =>{
    return a + b
}
const multiplicarar = (a,b) =>{
    return a * b
}
const result = sumar(20,50)
console.log(result)
console.log(restar(100, result))
console.log(restar(100, sumar(20,50)))

const saludar =() => {
    const nombreUsuario = prompt("Ingrese su nombre")
    return `hola $(nombreUsuario)`
} */

/* let numero = 0
const incremento = () => {
    numero++
    return  numero
} */
const calculoIva = (precio) => {
    const total = (precio*21)/100
    return total
}

const impuestoPais = (precio) => {
    const total = (precio*35) / 100
    return total
}


// practica   PREGUNTAR
const calculoTotalImpuesto = (precio) => {
    const iva = calculoIva(precio)
    const porcentajeimpuestoPais = impuestoPais(precio)
    return iva + porcentajeimpuestoPais + precio
 

}
/*fin del repaso*/
//estas funciones nativas modifican la variable original
let nombre = "Yaki"
let saludo = "Hola yaki"
let numero = 10
// length => devolver el numero de caracteres de nuestra variable es un metodo sin parentisis
console.log (nombre.length)

// toUpperCase => toma string y pasa todo mayuscula, es un afuncion porque tiene parentisis
console.log(nombre.toUpperCase())
// toLowerCase => toma el string y pasa toda miniscula es una funcion
console.log(nombre.toLocaleLowerCase())
// slice => cortar nuestro string entre la cantidad de caracteres dados
//puede recibir uno o dor parametros
const saludocortado = saludo.slice(3)
const saludocortado2 = saludo.slice(3, 5)
console.log(saludocortado2)

//case sensitive
// includes => devover un booleano
console.log(nombre.includes("Hola"))
// indexOf => devuelve el numero el caracter que recibe argumento
const caracter = nombre.indexOf("a")
console.log (caracter)

// replace recibir como argumento lo que tiene que remplazar y lo que va a ser reemplazado
const reemplazarNombre = nombre.replace("Yaki", "Maria")
console.log(reemplazarNombre)

// toString = toma un daro y lo trransforma a string
console.log(typeof nombre.toString())
//number() => se transforma a numero y respetar la coma
let numeroConComa = "10.5"
console.log(Number(numeroConComa))
//Boolean()
const booleano = Boolean(undefined)
console.log(booleano)
//isNaN() => pregunta si es un number
console.log(isNaN(nombre))
/**********************************************/
//objeto Math
//round redondea segun el numero con coma
let float = 10.4

console.log (Math.round(float))

// ceil rendoddea para arriba
console.log(Math.ceil(float))

//floar => rendodea para abajo
console.log(Math.floor(float))

// random => devuelve un numero aleatorio entre 0 y 1
console.log(Math.random())
console.log(Math.random() * 10)

//min el numero mas peque;o o bajo
console.log(Math.min(30,20.120,-12))

//max el numero mas peque;o o bajo
console.log(Math.max(30,20.120,-12))

// ejercicio practico devolver un numero aletorio entre 0 y 5 , sin coma, es decir, rendondeado

const numeroRandom = Math.round(Math.random() * 5)
console.log(numeroRandom)


