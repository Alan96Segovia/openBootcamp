//crear una funcion
//funcion pasando parametros por medio de propagacion - ejemplo
function imprimir(...parametros){
    console.log(parametros)
}

imprimir(1,2,3,4,5,"alan")

//// funciones tipo fecha y anonimas
const arrays = [1,2,4,8,75,96]

//funcion anonima
const arrays2 = arrays.map((valor)=> valor*2)

console.log(arrays2)

// funcion flecha 
const dobleValor = valor => valor * 2 

