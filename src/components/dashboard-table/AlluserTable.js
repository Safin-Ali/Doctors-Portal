import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { format } from 'date-fns';
import React, { useContext, useEffect, useState } from 'react';
import { AuthUser } from '../../context/AuthContext';
import CubeSpinner from '../cube-spinner/CubeSpinner';

const AlluserTable = () => {

    const currentDate = new Date();

    const {userData} = useContext(AuthUser);

    const [isLoading,setLoading] = useState(false)

    const {data: allUsers,refetch} = useQuery({
        queryKey:['currentUserAppointments',userData?.email],
        queryFn: () => axios.get(`http://localhost:5000/users`,{headers: {authorization: `Bearer ${localStorage.getItem('jwt-encrypt-key')}`}})
        .then(res => {
            setLoading(false);
            return res.data
        })
        .catch(e => isLoading(true))
    })

    function MakeAdmin (email) {
            axios.post(`http://localhost:5000/users/role`,{email,status:'mk'},{headers: {authorization: `Bearer ${localStorage.getItem('jwt-encrypt-key')}`}})
            .then(res => {
                if(res.data.matchedCount > 0){
                    alert('Admin Added SuccessFull')
                    return refetch()

                }
            })
    }

    function RemoveAdmin (email) {
        axios.post(`http://localhost:5000/users/role`,{email,status:'dt'},{headers: {authorization: `Bearer ${localStorage.getItem('jwt-encrypt-key')}`}})
        .then(res => {
            if(res.data.matchedCount > 0){
                alert('Admin Removed SuccessFull')
                return refetch()
            }
        })
    }

    if(isLoading) return <CubeSpinner></CubeSpinner>

    return (
    <>     
        <div className={`flex flex-col md:flex-row justify-between items-center m-4`}>
            <h1 className={`text-2xl order-2 my-1 md:order-none`}>All Users</h1>
            <div className={`border border-black order-1 p-3 rounded-lg my-1 md:order-none`}>
                <p>{format(currentDate,'PP')}</p>
            </div>
        </div>     
        <div className={`relative shadow-md rounded-lg`}>
            <table className={`w-full text-sm text-left text-gray-500`}>
                <thead className={`text-gray-700 uppercase bg-[#D0DEF2]`}>
                    <tr>
                        <th scope="col" className={`p-3`}>
                            Serial
                        </th>
                        <th scope="col" className={`py-3 px-6`}>
                            Name
                        </th>
                        <th scope="col" className={`py-3 px-6`}>
                            Email
                        </th>
                        <th scope="col" className={`py-3 px-6`}>
                            Status
                        </th>
                        <th scope="col" className={`py-3 px-6`}>
                            Set Role
                        </th>
                    </tr>
                </thead>
                <tbody className={`text-zinc-800`}>
                    {
                        allUsers?.map((elm,idx) => {
                            return <tr key={elm._id} className={`bg-[#fffdfd] even:bg-[#f3f8fe] border-b`}>
                            <td className={`p-3 pl-4`}>
                                    {idx+1}
                                </td>
                                <th scope="row" className={`py-4 px-6 font-medium text-gray-900 whitespace-nowrap`}>
                                    {elm.fullName}
                                </th>
                                <td className={`py-4 px-6`}>
                                    {elm.email}
                                </td>
                                <td className={`py-4 px-6 capitalize`}>
                                    {elm.userStatus || 'User'}
                                </td>
                                <td className={`py-4 px-6`}>
                                <button onClick={()=>elm?.userStatus ? RemoveAdmin(elm.email) : MakeAdmin(elm.email)} className={`bg-gradient-to-l text-white p-2 rounded-lg bg-[#19D3AE] from-[#0FCFEC] hover:shadow-md hover:bg-[#0FCFEC] hover:from-[#19D3AE] duration-150`}>{elm?.userStatus ? 'Remove' : 'Admin'}</button>
                                </td>
                            </tr>     
                        })
                    }               
                </tbody>
            </table>
        </div>
    </>
    );
};

export default AlluserTable;