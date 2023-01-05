//funciones generadoras
//le agregamos un * para saber que es una funcion generadora
function* generarId(){
    let id = 0;
    while(true){
        id++;
        if(id === 10){
            return id
        }
        yield id //Esperando que se vuelva a llamar+
    }
}

const generar = generarId();
//de esta manera genero los id
console.log(generar.next().value) //obtenenmos el valor generado
console.log(generar.next()) 
console.log(generar.next())
console.log(generar.next())
console.log(generar.next())
console.log(generar.next())
console.log(generar.next())
console.log(generar.next())
console.log(generar.next())
console.log(generar.next())
console.log(generar.next())
//al ingresar el .next , le digo que me genere el primer valor