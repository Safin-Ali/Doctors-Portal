import { useQuery } from '@tanstack/react-query';
import React, { useContext, useState } from 'react';
import Dashtable from '../../components/dashboard-table/Dashtable';
import { AuthUser } from '../../context/AuthContext';
import axios from 'axios';
import SideNav from '../../components/side-nav/SideNav';
import { BsArrowRightCircle } from 'react-icons/bs';
import '../../components/side-nav/side-nav.css';


const Dashboard = () => {

    const {userData} = useContext(AuthUser);

    const getJWTToken = localStorage.getItem('jwt-encrypt-key');

    // side nav toggle
    const[toggleSideNav,setDriSNav] = useState(false);

    const {data:apntedAppliedData = []} = useQuery({
        queryKey: ['apntedAppliedData',userData?.email],
        queryFn: async () =>{
            const res = await axios.get(`http://localhost:5000/dashboard/myappointments?email=${userData?.email}`,{headers: {authorization: `Bearer ${getJWTToken}`}});
            const data = await res.data;
            return data;
        }
    })

    return (
        <>
            <section className={`grid hide-scrollbar overflow-y-scroll md:overflow-auto md:grid-cols-5 gap-x-[3%]`}>
                <div className={`col-span-1`}>
                    <SideNav setDriSNav={setDriSNav} toggleSideNav={toggleSideNav}></SideNav>
                </div>
                <div className={`col-span-4 ${toggleSideNav ? 'ml-[140px]' : 'ml-0'} p-5`}>
                    <Dashtable data={apntedAppliedData}></Dashtable>
                </div>
            </section>
            <div className={`fixed top-1/2  left-[1%] ${toggleSideNav ? 'hidden' : 'block'} transform -translate-y-1/2 md:hidden`}>
                <BsArrowRightCircle onClick={()=>setDriSNav(!toggleSideNav)} className={`text-2xl`}></BsArrowRightCircle>
            </div>
        </>
    );
};

export default Dashboard;