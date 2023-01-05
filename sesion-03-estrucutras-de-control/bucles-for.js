//bulces for y while
// for(inicializacion,condicion, actualizacion) 
for (let i = 0;i < 10;i++){
    console.log(i);
}
//lista de objetos

let objeto = [1,2,3,4,5,6,7,8];
for( let i=0;i<objeto.length;i++){
    console.log(objeto[i])
}
//otro metodo para recorrer la lista
//estructura for..of
for(let valor of objeto){
    console.log(valor)
}

///forEach para recorrer una lista

objeto.forEach(valor =>{
    console.log(valor)
})

///para recorrer un objeto
let persona={
    nombre:"alan",
    apellido:"Segovia",
    edad:26,
    isDeveloper:true
}
//se utiliza la estructura for..in
//persona[propiedad] para poder acceder a la propiedad del objeto
for(let propiedad in persona){
    console.log(persona[propiedad]);
}
