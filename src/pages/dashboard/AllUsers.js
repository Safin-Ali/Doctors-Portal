import React, { useState } from 'react';
import Dashtable from '../../components/dashboard-table/Dashtable';
import SideNav from '../../components/side-nav/SideNav';
import { BsArrowRightCircle } from 'react-icons/bs';
import '../../components/side-nav/side-nav.css';
import { useLoaderData } from 'react-router-dom';


const AllUsers = () => {

    // side nav toggle
    const[toggleSideNav,setDriSNav] = useState(false);

    const apntedAppliedData = useLoaderData();

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
            <div className={`fixed top-1/2 left-[1%] ${toggleSideNav ? 'hidden' : 'block'} transform -translate-y-1/2 md:hidden`}>
                <BsArrowRightCircle onClick={()=>setDriSNav(!toggleSideNav)} className={`text-2xl`}></BsArrowRightCircle>
            </div>
        </>
    );
};

export default AllUsers;