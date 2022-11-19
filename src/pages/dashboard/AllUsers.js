import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import Dashtable from '../../components/dashboard-table/Dashtable';
import { AuthUser } from '../../context/AuthContext';
import axios from 'axios';
import useFetch from '../../hook/useFetch';
import { Link } from 'react-router-dom';
import AlluserTable from '../../components/dashboard-table/AlluserTable';

const AllUsers = () => {

    const {userData} = useContext(AuthUser);

    const getJWTToken = localStorage.getItem('jwt-encrypt-key');

    const data = useFetch('GET',`http://localhost:5000/users`)

    const {data:allusersDT = []} = useQuery({
        queryKey: ['apntedAppliedData',userData?.email],
        queryFn: async () =>{
            const res = await axios.get(`http://localhost:5000/users`,);
            const data = await res.data;
            return data;
        }
    })

    return (
        <section className={`grid grid-cols-1 sm:grid-cols-4 lg:container gap-x-[3%] mx-auto`}>
            <div className={`hidden sm:block min-h-screen border bg-white`}>
                <p className={`text-center`}>Appointment</p>
                <Link to={'/users'} className={`text-center my-10 ${data?.userStatus === 'admin' ? 'block' : 'hidden'}`}>All Users</Link>
            </div>
            <div className={`col-span-3 p-5`}>
                <AlluserTable data={allusersDT}></AlluserTable>
            </div>
        </section>
    );
};

export default AllUsers;