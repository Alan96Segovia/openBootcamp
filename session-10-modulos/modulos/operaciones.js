/**al poner export de antes de la funcion le decimos
 * que podemos exportar como un modulo la funcion
 */
export function suma(a,b){
    return a + b
}

export function resta(a,b){
    return a - b
}
export function multiplicar(a,b){
    return a * b
}
export function factorial(a){
    let factorial =1;
    for (let i = 2;i<=a;i++){
        factorial *=i;
    }
    return factorial;
} 


//forma de exportar  mis funciones - 
//le paso el nombre de mi funcion dentro 
/*module.exports = {
    suma,
    resta,
    factorial
}*/