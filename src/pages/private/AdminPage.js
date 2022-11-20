import React, { useContext } from 'react';
import { useQuery } from '@tanstack/react-query';
import { AuthUser } from '../../context/AuthContext';
import axios from 'axios';
import { Navigate } from 'react-router-dom';
import CubeSpinner from '../../components/cube-spinner/CubeSpinner';

const AdminPage = ({children}) => {

    const {userData} = useContext(AuthUser);

    const {data: currUserInfo,isLoading} = useQuery({
        queryKey:['adminPage',userData?.email],
        queryFn: () => axios.get(`http://localhost:5000/user/${userData?.email}`)
        .then(res => res.data)
    })

    if(isLoading) return <CubeSpinner></CubeSpinner>

    if(!currUserInfo.userStatus){
        return <Navigate to={'/*'}></Navigate>
    }

    return (
        children
    );
};

export default AdminPage;