import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import {FaBars} from 'react-icons/fa';

const Navbar = () => {

    const[toggle,setToggle] = useState(false);

    return (
        <section className={`shadow-md`}>
            <nav className={`container flex-wrap justify-between flex p-3 items-center mx-auto`}>
                {/* Brand Logo/Text */}
                <div className={``}>
                    <h1 className={`p-1.5 text-3xl font-bold`}>Doctors Portal</h1>
                </div>

            {/* Bars Icon */}
                <div className={``}>
                    <FaBars onClick={()=>setToggle(!toggle)} className={`text-2xl cursor-pointer block lg:hidden`}></FaBars>
                </div>

                {/* Nav Link */}
                <div id={`nav-expand`} style={{height: `${toggle ? '300px' : '0px'}`,transition: `height 0.7s linear`}} className={`basis-full lg:basis-auto lg:flex overflow-hidden justify-center text-center`}>
                    <Link className={`block border-b mx-2 lg:border-0 text-black p-1.5 rounded-md hover:bg-slate-800 duration-150 hover:text-[#D4D9E3]`} to={`/`}>Home</Link>
                    <Link className={`block border-b mx-2 lg:border-0 text-black p-1.5 rounded-md hover:bg-slate-800 duration-150 hover:text-[#D4D9E3]`} to={`/`}>About</Link>
                    <Link className={`block border-b mx-2 lg:border-0 text-black p-1.5 rounded-md hover:bg-slate-800 duration-150 hover:text-[#D4D9E3]`} to={`/appoinment`}>Appoinments</Link>
                    <Link className={`block border-b mx-2 lg:border-0 text-black p-1.5 rounded-md hover:bg-slate-800 duration-150 hover:text-[#D4D9E3]`} to={`/`}>Reviews</Link>
                    <Link className={`block border-b mx-2 lg:border-0 text-black p-1.5 rounded-md hover:bg-slate-800 duration-150 hover:text-[#D4D9E3]`} to={`/`}>Contact Us</Link>
                    <Link className={`block border-b mx-2 lg:border-0 text-black p-1.5 rounded-md hover:bg-slate-800 duration-150 hover:text-[#D4D9E3]`} to={`/`}>Login</Link>
                </div>
            </nav>
        </section>
    );
};

export default Navbar;