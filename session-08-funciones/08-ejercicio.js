//una funcion sin parametros que devuelva siempre true

function miFunction(){
    return true;
}
console.log(miFunction())

//- Una función asíncrona que utilice un setTimeout 
//y pase por consola un "Hola soy una promesa" 5 segundos después de haberse ejecutado
let saludo= "hola soy una promesa";

const getDatos = ()=>{
    return new Promise((resolve,reject) =>{
        setTimeout(() => {
           resolve(saludo);
        }, 5000);
    })
}
getDatos()
    .then((saludo) => console.log(saludo))

//- Una función generadora de índices pares automáticos
function* GenerarId(){
    let id = 0;
    while(true){
        id++;
        if(id % 2 === 0){
            return id
        }
        yield id //Esperando que se vuelva a llamar+
    }
}
const genera = GenerarId()
console.log(genera.next().value)
console.log(genera.next().value)
console.log(genera.next().value)




