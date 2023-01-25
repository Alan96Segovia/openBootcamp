class Persona {
    // privados  --- para proteger y dejar privado los atributos
    //de esta manera solo se puede acceder desde adentro de la clase
    //ejemplo de proteger
    // #nombre , #edad
    /*nombre; /*son variables que formar parte de la clase persona */
    //edad;
    //IsDeveloper;
     //las protegidas o protected -> _
    //de esta manera protejo la variable
    //el protected solo se ouede acceder desde dentro de la clase y clase descendientes
    _isDeveloper = true
    #nombre
    #edad
    
    constructor(nombre,edad){ /* la funciones dentro de las clase se lo denimina metodos*/
            this.#nombre = nombre /**forma de declarar variables dentro de las clases */
            this.#edad = edad
    }
    saludo(){ /**la funciones dentro de la clase se denomina metodos */
        console.log(`Mi nombre es ${this.nombre}, mi edad es ${this.edad}`)
    }
    obtenNombre(){ // es una funcion getters , nos permite acceder de forma controlada a algun atributo protejido
        return this.#nombre
    }
    /*funcion privada */
    #obtenEdad(){
        return this.#edad
    }
   getEdad(){
    return this.#edad
   }
   setEdad(newEdad){
    this.#edad = newEdad
    
   }
}

const persona = new Persona("Miguel",64)
/*console.log(persona)
console.log(persona.nombre) //accedemos al nombre */
persona.saludo()/**accedmos al metodo dentro de la clase persona */

//console.log(persona._isDeveloper())
//////////////////////////////////////////
//getter -> aon metodos que nos permiten btener atributos/metodos privados o protegidos
    //a travez del getter se puede acceder a las funciones , de forma controlada
    const edad = persona.getEdad()
    console.log(edad)  
//setters -> nos permite cambiar el valor de algunos de los atributos privados o protegidos
    //quiero cambiar la edad de la persona
    persona.setEdad(287)
    console.log(persona.getEdad())