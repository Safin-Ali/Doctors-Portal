import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { format } from 'date-fns';
import React, { useContext, useState } from 'react';
import { AuthUser } from '../../context/AuthContext';
import CubeSpinner from '../cube-spinner/CubeSpinner';

const AllDoctors = () => {

    const currentDate = new Date();

    const {userData} = useContext(AuthUser);

    const [isLoading,setLoading] = useState(false)

    const {data: allDoctors,refetch} = useQuery({
        queryKey:['currentUserAppointments',userData?.email],
        queryFn: () => axios.get(`http://localhost:5000/doctors`,{headers: {authorization: `Bearer ${localStorage.getItem('jwt-encrypt-key')}`}})
        .then(res => {
            return res.data
        })
        .catch(e => setLoading(true))
    })

    function removeDoctor (email,id) {
        axios.delete(`http://localhost:5000/doctors`,{headers: {authorization: `Bearer ${localStorage.getItem('jwt-encrypt-key')}`},data:{email,id}})
        .then(res => {
            if(res.data.deletedCount > 0){
                alert('Doctors Removed SuccessFull')
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
                            Avatar
                        </th>
                        <th scope="col" className={`py-3 px-6`}>
                            Name
                        </th>
                        <th scope="col" className={`py-3 px-6`}>
                            Speility
                        </th>
                        <th scope="col" className={`py-3 px-6`}>
                            Action
                        </th>
                    </tr>
                </thead>
                <tbody className={`text-zinc-800`}>
                    {
                        allDoctors?.map((elm,idx) => {
                            return <tr key={elm._id} className={`bg-[#fffdfd] even:bg-[#f3f8fe] border-b`}>
                            <td className={`p-3 pl-4`}>
                                    {idx+1}
                                </td>
                                <th scope="row" className={`py-4 px-6 font-medium text-gray-900 whitespace-nowrap`}>
                                    <div className={`w-[100px] rounded-[50%]`}>
                                        <img className={`w-full rounded-[50%]`} src={elm.doctorAvatar} alt="" />
                                    </div>
                                </th>
                                <td className={`py-4 capitalize px-6`}>
                                    DR. {elm.doctorName}
                                </td>
                                <td className={`py-4 capitalize px-6`}>
                                    {elm.speciality}
                                </td>
                                <td className={`py-4 px-6`}>
                                <button onClick={()=>removeDoctor(elm.doctorEmail,elm._id)} className={`bg-gradient-to-l text-white p-2 rounded-lg bg-[#19D3AE] from-[#0FCFEC] hover:shadow-md hover:bg-[#0FCFEC] hover:from-[#19D3AE] duration-150`}>Delete</button>
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

export default AllDoctors;