import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../../components/footer/Footer';
import Navbar from '../../components/Navbar/Navbar';

const Main = () => {
    return (
        <main>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </main>
    );
};

export default Main;