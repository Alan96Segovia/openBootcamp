let unidades =0
let decenas =0

while(true){
    while(true){
        console.log(`EL numero actual es :${decenas}${unidades}`)
        unidades++
        if(unidades === 10){
            unidades = 0
            break
        }
    }
    decenas++
    if(decenas === 10){
        break
    }
}