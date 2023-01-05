// instalar axios para hacer llamadas a servicios externos
//ejemplo de exportar axios
//import axios, {isCancel, AxiosError} from 'axios';
import axios from 'axios';
//const axios = require('axios').default; /*otra manera de exportar axios */
// Make a request for a user with a given ID
axios.get('https://pokeapi.co/api/v2/pokemon/ditto',{
    headers:{"Accept-Encoding":"gzip,deflate,compress"},
}) /*hacemos una llamada a esa url */
    .then(function (response) {
    // handle success - si la respuesta es exitosa
    console.log("EXITO !")
    console.log(response.data);
    })
    .catch(function (error) {
    // handle error - si ocurre un error
    console.log("ERROR !!")
    console.log(error);
    })