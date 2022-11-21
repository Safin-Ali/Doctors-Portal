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
    
    function handleActiveNav (e) {
        const event = e.target;
        if(event.innerText === e.target.innerText) {
            const getAllButton = document.querySelectorAll('.side-nav');
            for(const navBtn of getAllButton){
                navBtn.classList.remove('text-[#19D3AE]')
            }
            event.classList.add('text-[#19D3AE]')
        }
    }
    
    return (
            <div style={{transition: 'all 0.3s'}} className={`min-h-screen max-h-full z-[1] ${toggleSideNav ? 'w-[140px]' : 'w-0'} md:w-full fixed md:static h-full overflow-hidden border bg-white md:px-2`}>

                <div className={`flex justify-end my-2 mr-2`}>
                    <IoMdClose onClick={()=>setDriSNav(!toggleSideNav)} className={`text-2xl border rounded-md md:hidden`}></IoMdClose>
                </div>

                <div className={`${toggleSideNav ? 'px-3' : 'px-0'} text-center`}>
                    <Link onClick={handleActiveNav} to={'/dashboard/myappointments'} className={` text-[13px] md:text-base side-nav text-[#19D3AE]`}>My Appointment</Link>
                    {
                        activeUserData?.userStatus && 
                        (
                            <>
                                <Link onClick={handleActiveNav} to={'/dashboard/users'} className={`my-10 text-[13px] block md:text-base side-nav`}>All Users</Link>
                                <Link onClick={handleActiveNav} state={'/dashboard/add/doctors'} to={'/dashboard/add/doctors'} className={`my-10 text-[13px] block md:text-base side-nav`}>Add Doctors</Link>
                            </>
                        )
                    }
                </div>
            </div>
    );
};

export default SideNav;