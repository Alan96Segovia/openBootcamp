//manipulacion de cadenas
let input = "piscis"
let db ="Piscis"

//convertimos las variables a minusculas o tambien podemos convertirlas a mayusculas
//input.toLocaleLowerCase;
//db.toLocaleUpperCase;
//console.log(input === db)

///formas de concatenar dos cadenas de caracteres
let str1 ="soy cadena uno";
let str2="soy cadena dos";
//concat
console.log(str1.concat(" y ",str2))
// utilizando el + (mas), 
console.log(str1+" "+str2)
//eliminar espacios al inicio o al final
//-trim() trimStart() trimEnd()

//obtener el caracter que hay en cierta posicion
//charAt()
let nombre_musica = "latinoamerica guasones drake metallica"
console.log(nombre_musica.charAt(14))
//como obtener la posicion de una letra o caracter, si no encuentra el caracter nos va mostrar -1
console.log(nombre_musica.indexOf("guasones"))
