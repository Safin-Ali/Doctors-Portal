import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthUser } from '../../context/AuthContext';

const PrivatePage = ({children}) => {

    const currLocation = useLocation();

    const {userData,load} = useContext(AuthUser);
    console.log(userData,load)
    if(!load) return <p>Loading</p>
    if(!userData) return <Navigate state={currLocation.pathname} to={'/login'}></Navigate>
    return children;
};

export default PrivatePage;