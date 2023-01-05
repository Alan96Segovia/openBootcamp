
///fromas de importar y exportar modulos
// 1.- commonJS == require
// 2.- Import - ES6 == import 

//console.log(module)

//guardo en una variable el archivo de donde quiero
//acceder a mis funciones
//const moduloOperaciones = require("./modulos/operaciones.js")
//de esta manera acceso a las funciones importadas

//otro ejemplo 
    //const {factorial,suma} = moduloOperaciones;


const {factorial,suma } = require("./modulos/operaciones.js")

const fact = factorial(6)
const sum = suma(5,8)

console.log(fact)

console.log(sum)