import React from 'react';
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className={`container flex p-3 items-center mx-auto`}>
            {/* Brand Logo/Text */}
            <div className={`basis-1/2`}>
                <h1 className={`p-1.5`}>Doctors Portal</h1>
            </div>
            
            {/* Nav Link */}
            <div className={`flex basis-1/2`}>
                <Link className={`mx-2 text-black p-1.5 rounded-md hover:bg-slate-800 duration-150 hover:text-[#D4D9E3]`} to={`/`}>Home</Link>
                <Link className={`mx-2 text-black p-1.5 rounded-md hover:bg-slate-800 duration-150 hover:text-[#D4D9E3]`} to={`/`}>About</Link>
                <Link className={`mx-2 text-black p-1.5 rounded-md hover:bg-slate-800 duration-150 hover:text-[#D4D9E3]`} to={`/`}>Appoinments</Link>
                <Link className={`mx-2 text-black p-1.5 rounded-md hover:bg-slate-800 duration-150 hover:text-[#D4D9E3]`} to={`/`}>Reviews</Link>
                <Link className={`mx-2 text-black p-1.5 rounded-md hover:bg-slate-800 duration-150 hover:text-[#D4D9E3]`} to={`/`}>Contact Us</Link>
                <Link className={`mx-2 text-black p-1.5 rounded-md hover:bg-slate-800 duration-150 hover:text-[#D4D9E3]`} to={`/`}>Login</Link>
            </div>
        </nav>
    );
};

export default Navbar;