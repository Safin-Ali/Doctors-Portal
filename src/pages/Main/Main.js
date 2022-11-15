import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../../components/footer/Footer';
import Navbar from '../../components/Navbar/Navbar';

const Main = () => {
    return (
        <>
            <Navbar></Navbar>
            <main className={`my-[10%] relative`}>
                <Outlet></Outlet>
            </main>
            <Footer></Footer>
        </>
    );
};

export default Main;