import React from 'react';
import { Outlet, useLocation,} from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar';

const Main = () => {

    const currentLocation = useLocation();

    const {pathname} = currentLocation;

    return (
        <>
            <Navbar></Navbar>
            <main className={`${pathname === '/login' || '/dashboard' ? 'pt-0' : 'pt-[5%]'} relative`}>
                <Outlet></Outlet>
            </main>
        </>
    );
};

export default Main;