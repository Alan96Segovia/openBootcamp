//listas , arreglos o arrays
const lista = [1,"hola",true,undefined,null];
const lista2 = new Array(2,"hla",true,undefined,null);
const lista3 = new Array(3);
const lista4 = [lista,lista2,lista3]

console.log(lista4)
//objetos
//son representaciones de datos de objeto
    const persona ={
        altura:10,
        nombre:"alan",
        edad:26,
        direccion:"limpio.villa Madrid",
        ref_personales:["estela","miguel"],
        materias:{ /*obejto dentro del objeto */
            turno:"tarde",
            materia:"logica",
            curso:"3ero"
        }
    }
    /*se accedde a la ubicacion de acuerdo al punto 
    ejemplo*/
    console.log(persona.altura);
//fechas 
