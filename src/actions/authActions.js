import axios from "axios";
import {LOGIN_ENDPOINT, REGISTER_ENDPOINT} from "../Helpers/endpoints"
import { SET_CURRENT_USER } from "./types";
import jwt_decode from "jwt-decode";
import setAuthToken from "../Helpers/setAuthToken";

export const loginUser = (userData) => dispatch => {
    
    return new Promise((resolve, reject) => {
        //AQUI VA LA URI PARA LOGIN
        axios.post(LOGIN_ENDPOINT, userData, {
            heaDers : {'Accept': 'application/json', 'Content-type': 'application/json'}
        }).then(response => {
            const { authorization, userId} = response.headers;
            localStorage.setItem('jwtToken', authorization);

            //Función para añadir token a axios
            setAuthToken(authorization);

            const decoded = jwt_decode(authorization);

            dispatch(setCurrentUser({user: decoded, loggedIn: true}))
            resolve(response);
        
        }).catch(error => {
            reject(error);
        })
    });

}

export const registerUser = (userData) => dispatch => {
    
    return new Promise((resolve, reject) => {
        //AQUI VA LA URI PARA LOGIN
        axios.post(REGISTER_ENDPOINT, userData, {
            heaDers : {'Accept': 'application/json', 'Content-type': 'application/json'}
        }).then(response => {
            resolve(response);
        }).catch(error => {
            reject(error);
        })
    });

}

export const setCurrentUser = ({user, loggedIn}) => {
    return{
        type: SET_CURRENT_USER,
        payload: {user, loggedIn}
    };
}

export const logOutUser = () => dispatch => {
    localStorage.removeItem("jwtToken");
    setAuthToken(false);

    dispatch(setCurrentUser({
        user:{},
        loggedIn: false
    }))
}