//metodos mas utilizados con cadenas de caracteres
//como obtener longitud de un string
    let str ="hola soy una cadena";
     console.log(str.length) 
///obtener partes de cadenas de caracteres
//slice() substring() ---substr() esta deprecado--
//ejempolos
//slice - le paso desde que posicion hasta que posicion quiero que me muestre
//substring funciona de la misma manera que slice
let  slice_str = str.slice(0,4)
console.log(slice_str)

let  substring_str = str.substring(0,4)
console.log(slice_str)

//reemplazar parte de una cadena texto
let cadena = "mi nombre es alan"

//el metodo replace remplazo la cadena de caracteres
//le paso lo que quiero reemplazar por lo que quiero reemplazar
cadena.replace('alan','nadia')

console.log(cadena.replace('alan','nadia'))
///
let  text_largo ="Emmanuel Lubezki Morgenstern, A.M.C, A.S.C. es un director, productor y fotógrafo mexicano que se dedica al cine. Es apodado Chivo. A";
///si yo quiero cambiar todas las instancias de una cadena de caracteres
//se deben utilizar expresiones regulares - es una forma mas avanzada de encontrar 
//diferentes textos dentro de una cadena de texto
console.log(text_largo.replace(/A/g,'L'))
