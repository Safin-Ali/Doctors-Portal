import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React, { useContext} from 'react';
import { IoMdClose } from 'react-icons/io';
import { Link } from 'react-router-dom';
import { AuthUser } from '../../context/AuthContext';

const SideNav = ({setDriSNav,toggleSideNav}) => {

    const {userData} = useContext(AuthUser);

    const {data: activeUserData} = useQuery({
        queryKey:['activeUserData',userData?.email],
        queryFn: () => axios.get(`http://localhost:5000/user/${userData?.email}`)
        .then(res => res.data)
    })
    
    return (
        <>
            <div style={{transition: 'all 0.3s'}} className={`min-h-screen ${toggleSideNav ? 'w-[140px]' : 'w-0'} fixed overflow-hidden border bg-white`}>

                <div className={`flex justify-end my-2 mr-2`}>
                    <IoMdClose onClick={()=>setDriSNav(!toggleSideNav)} className={`text-2xl border rounded-md`}></IoMdClose>
                </div>

                <div className={`${toggleSideNav ? 'px-3' : 'px-0'}`}>
                    <Link to={'/dashboard/myappointments'} className={`text-center text-[13px]`}>My Appointment</Link>
                    <Link to={'/users'} className={`text-center my-10 ${activeUserData?.userStatus === 'admin' ? 'block' : 'hidden'} text-[13px]`}>All Users</Link>
                </div>
            </div>
        </>
    );
};

export default SideNav;