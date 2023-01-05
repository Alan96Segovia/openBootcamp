let unidades =0
let decenas =0
/*ejemplos de como utilizae eitquesa o label para los ciclos while */
bucleDecenas: while(true){
    bucleUnidades: while(true){
        console.log(`EL numero actual es :${decenas}${unidades}`)
        unidades++
        if(unidades === 10){
            unidades = 0
            break bucleUnidades
        }
        if(decenas === 2){
            break bucleDecenas
        }
    }
    decenas++
}
console.log("Termina el ciclo")