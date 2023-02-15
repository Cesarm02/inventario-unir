import React from 'react'
import { Outlet , Navigate } from 'react-router'
import { useSelector } from 'react-redux'

const PrivateRoute = () =>{
    const loggedIn = useSelector(state => state.auth.loggedIn);
    return loggedIn ? <Outlet/> : <Navigate to="/signin"></Navigate>
}

export default PrivateRoute;

