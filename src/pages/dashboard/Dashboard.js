import React from 'react';
import Dashtable from '../../components/dashboard-table/Dashtable';

const Dashboard = () => {
    return (
        <section className={`grid grid-cols-1 sm:grid-cols-4 lg:container gap-x-[3%] mx-auto`}>
            <div className={`hidden sm:block min-h-screen border bg-white`}>
                <p className={`text-center`}>Appointment</p>
            </div>
            <div className={`col-span-3 p-5`}>
                <Dashtable></Dashtable>
            </div>
        </section>
    );
};

export default Dashboard;