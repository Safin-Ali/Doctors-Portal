import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import CubeSpinner from '../../components/cube-spinner/CubeSpinner';
import { AuthUser } from '../../context/AuthContext';

const PrivatePage = ({children}) => {

    const currLocation = useLocation();

    const {userData,load} = useContext(AuthUser);
    if(!load) return <CubeSpinner></CubeSpinner>
    if(!userData) return <Navigate state={currLocation.pathname} to={'/login'}></Navigate>
    return children;
};

export default PrivatePage;