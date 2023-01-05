/**objeto persona */
const persona ={
    nombre:"Alan",
    edad:26,
    isDeveloper:true,
    saludo:function(){
        console.log('Hola')
    }
}
//console.log(persona)

persona.saludo()

const persona2 ={
    nombre:"Miguel",
    edad:50,
    isDeveloper:false,
    saludo:function(){
        console.log('Hola Miguel')
    }
}
persona2.saludo()

/*creando objeto  personas por medio de una funcion */
//Function Factory
const CreatePersona = (nombre,edad,isDeveloper)=>{
    return{
        nombre,//nombre:nombre
        edad,//edad:edad
        isDeveloper,//isDeveloper:isDeveloper
        saludo : function(){
        console.log("Hello")
        }
    }
}

const NuevaPersona = CreatePersona("Alan",26,true)

console.log(NuevaPersona)