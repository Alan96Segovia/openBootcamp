//carga y sobrecarga de funciones
 //carga de funciones
function saludar(){
    hola()
}

function hola(){
    console.log("Hola!, Soy la funcion hola()")
}

saludar()
///1. global() - 1reo interpreta el cofigo
///2. saludar() .global() - carga la funcion
///3. hola() saludar() global()
///4. saludar() global()
///5.global()

///sobrecarga de funciones
//ocurre en funciones recursiva , donde se hace referencia asi misma
//ejemplo
/*function recursiva(){
    recursiva()
}

recursiva()*/