import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar';

const Main = () => {
    return (
        <main className={`pb-[5%]`}>
            <Navbar></Navbar>
            <Outlet></Outlet>
        </main>
    );
};

export default Main;