import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import CubeSpinner from '../../components/cube-spinner/CubeSpinner';
import { AuthUser } from '../../context/AuthContext';

const PrivatePage = ({children}) => {
    const {userData,load} = useContext(AuthUser);

    const currLocation = useLocation();

    if(currLocation.pathname === `/dashboard` || currLocation.pathname === `/dashboard/`) return <Navigate to={`/dashboard/myappointments`}></Navigate>

    if(!load) return <CubeSpinner></CubeSpinner>
    if(!userData) return <Navigate state={currLocation.pathname} to={'/login'}></Navigate>
    return children;
};

export default PrivatePage;