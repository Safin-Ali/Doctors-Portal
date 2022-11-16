import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthUser } from '../../context/AuthContext';

const PrivatePage = ({children}) => {
    const {userData,load} = useContext(AuthUser);
    console.log(userData,load)
    if(!load) return <p>Loading</p>
    if(!userData) return <Navigate to={'/login'}></Navigate>
    return children;
};

export default PrivatePage;