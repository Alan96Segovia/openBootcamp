/**clases en js 
 * 
 * 
*/
/*forma de crear una clase , se utiliza la palabra clave class
es ub objeto con el nombre persona*/
class Persona {
    /*nombre; /*son variables que formar parte de la clase persona */
    //edad;
    //IsDeveloper;
    constructor(nombre,edad,IsDeveloper){ /* la funciones dentro de las clase se lo denimina metodos*/
            this.nombre = nombre /**forma de declarar variables dentro de las clases */
            this.edad = edad
            this.IsDeveloper = IsDeveloper
    }
    saludo(){ /**la funciones dentro de la clase se denomina metodos */
        console.log(`Mi nombre es ${this.nombre}, mi edad es ${this.edad}`)
    }
}
/**cuando utilizamos la palabra reservada new , creamos un objeto  */

const NuevaPersona = new Persona("alan",26,true) /*creamos un nuevo objeto */

console.log(NuevaPersona)
/**forma de acceder a un objeto de la clase persona */

NuevaPersona.saludo() 
let numero = 65 //inicializar una variabla
let persona2 = new Persona("maria",34,false)//de esta manera instanciamos una clase


///instanceof , es un operador similar a typeof pero para clases
console.log(persona2 instanceof Persona)