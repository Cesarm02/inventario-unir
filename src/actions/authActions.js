import axios from "axios";

export const loginUser = (userData) => dispatch => {
    
    console.log(userData);
    
    return new Promise((resolve, reject) => {
        //AQUI VA LA URI PARA LOGIN
        axios.post('', userData, {
            heaDers : {'Accept': 'application/json', 'Content-type': 'application/json'}
        }).then(response => {
            console.log(response);
            resolve(response);
        }).catch(error => {
            reject(error);
        })
    });

  
}
