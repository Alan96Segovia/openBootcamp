//gestion de errores
const mifunction = val =>{
    if(typeof val === "number"){
        return 2 * val
    }
    throw new Error("Debe ingresar un valor numerico")
}
console.log(mifunction((8)))

/*formas de manejar los erroes */
let num  = 15;

try {
    //codigo que puede fallar - se ejecuta hasta que falle
    console.log("Esta ejecutandose de manera correcta")
    const doble = mifunction(num)
    console.log(doble)
} catch (error) {
    //en caso de fallar - quiero que ejecutes
    console.log("ERROR!")
} finally{
    console.log("esto se va ejecutar tanto si se produce algun error, como si no existe ninguno")
} 

//serie de errores comunes
/*InternalError, 
SyntaxError - error de sintaxis,
TypeError - cuando pasamos mal el valor que debe recibir una funcion, 
RangeError - cuando queremos acceder a una posicion muy alta que sea mayor al arrays,
ReferenceError - cuando no existe la referencia con la que queremos hacer referencia
o que no este definida*/

//pagima de ayuda 
//Error - Javascript -MDM (developerMozila) - documentacion de errores dentro de js