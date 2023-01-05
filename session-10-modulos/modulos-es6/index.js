//*nueva sintaxis para realizar una exportacion/
//import { multiplicar, suma,factorial,materia } from './modulos/operaciones.js'
/*
ejemplo de importar todo el modulo 
*/
import * as ModuloOperaciones from './modulos/operaciones.js'

import getAutor, {NomLibro} from './modulos/literaturas.js' 

const mul = ModuloOperaciones.multiplicar(4,2)

const sum = ModuloOperaciones.suma(9,2)

const fact = ModuloOperaciones.factorial(8)

console.log(fact)

console.log(sum)

console.log(mul);

console.log(ModuloOperaciones.materia)

console.log(getAutor())

console.log(NomLibro)

