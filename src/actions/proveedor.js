import axios from "axios";
import {REGISTER_PROVEEDOR_ENDPOINT} from "../Helpers/endpoints"



export const registerProveedor = (userData) => dispatch => {
    
    return new Promise((resolve, reject) => {
        //AQUI VA LA URI PARA proveedor
        axios.post(REGISTER_PROVEEDOR_ENDPOINT, userData, {
            heaDers : {'Accept': 'application/json', 'Content-type': 'application/json'}
        }).then(response => {
            resolve(response);
        }).catch(error => {
            reject(error);
        })
    });

}



