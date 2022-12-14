import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom'
import {FaBars} from 'react-icons/fa';
import { AuthUser } from '../../context/AuthContext';

const Navbar = () => {

    const[toggle,setToggle] = useState(false);

    const {userData,logOut} = useContext(AuthUser);

    function handleLogout () {
        logOut()
        .then(()=>{
            localStorage.removeItem('jwt-encrypt-key');
        })
        .catch(e => {
            console.log(e.message)
        })
    }

    function handleActiveNav (e) {
        const event = e.target;
        if(event.innerText === e.target.innerText) {
            const getAllButton = document.querySelectorAll('.header-nav');
            for(const navBtn of getAllButton){
                navBtn.classList.remove('bg-slate-800','text-[#D4D9E3]')
            }
            event.classList.add('bg-slate-800','text-[#D4D9E3]')
        }
    }

    return (
        <section className={`shadow-md`}>
            <nav className={`container flex-wrap justify-between flex p-3 items-center mx-auto`}>
                {/* Brand Logo/Text */}
                <div className={``}>
                    <h1 className={`p-1.5 text-3xl font-bold`}><Link to={`/`}>Doctors Portal</Link></h1>
                </div>

            {/* Bars Icon */}
                <div className={``}>
                    <FaBars onClick={()=>setToggle(!toggle)} className={`text-2xl cursor-pointer block lg:hidden`}></FaBars>
                </div>

                {/* Nav Link */}
                <div id={`nav-expand`} style={{transition: `height 0.4s ease-in-out`}} className={`basis-full h-0 lg:h-fit lg:basis-auto ${toggle ? 'h-[300px]' : 'h-[0]'} lg:flex overflow-hidden justify-center items-center text-center`}>
                    <Link onClick={handleActiveNav} className={`block header-nav border-b mx-2 lg:border-0 text-black p-1.5 rounded-md hover:bg-slate-800 duration-150 hover:text-[#D4D9E3]`} to={`/`}>Home</Link>
                    <Link onClick={handleActiveNav} className={`block header-nav border-b mx-2 lg:border-0 text-black p-1.5 rounded-md hover:bg-slate-800 duration-150 hover:text-[#D4D9E3]`} to={`/`}>About</Link>
                    <Link onClick={handleActiveNav} className={`block header-nav border-b mx-2 lg:border-0 text-black p-1.5 rounded-md hover:bg-slate-800 duration-150 hover:text-[#D4D9E3]`} to={`/appoinment`}>Appoinments</Link>
                    <Link onClick={handleActiveNav} className={`block header-nav border-b mx-2 lg:border-0 text-black p-1.5 rounded-md hover:bg-slate-800 duration-150 hover:text-[#D4D9E3]`} to={`/dashboard/myappointments`}>Dashboard</Link>
                    <Link onClick={handleActiveNav} className={`block header-nav border-b mx-2 lg:border-0 text-black p-1.5 rounded-md hover:bg-slate-800 duration-150 hover:text-[#D4D9E3]`} to={`/`}>Contact Us</Link>
                    
                    {
                        userData ? <button onClick={handleLogout} className={`shadow-md my-2 mx-2 lg:border-0 text-black p-1.5 rounded-md hover:bg-slate-800 duration-150 hover:text-[#D4D9E3]`} to={`/login`}>Signout</button>
                        :
                    <Link onClick={handleActiveNav} className={`block header-nav border-b mx-2 lg:border-0 text-black p-1.5 rounded-md hover:bg-slate-800 duration-150 hover:text-[#D4D9E3]`} to={`/login`}>Login</Link>
                    }
                    
                </div>
            </nav>
        </section>
    );
};

export default Navbar;