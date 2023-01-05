//funciones asincronas y promesas

function miAsinc(){
    //hace una llamada a la base de datos
    //puede darnos un erro
}

const miPromesa = new Promise((resolve,reject)=>{
    const i = Math.floor(Math.random() * 2)
    //si esta todo correcto
    if(i !== 0){
        resolve()
    }else{
        reject()
    }
})

miPromesa
    .then(()=> console.log("Se ha ejecutado de forma correcta"))
    .catch(()=> console.log("ERROR!"))
    .finally(()=> console.log("Me ejecuto siempre"))