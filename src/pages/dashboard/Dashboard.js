import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import Dashtable from '../../components/dashboard-table/Dashtable';
import { AuthUser } from '../../context/AuthContext';

const Dashboard = () => {

    const {userData} = useContext(AuthUser);

    const {data:apntedAppliedData = []} = useQuery({
        queryKey: ['apntedAppliedData',userData?.email],
        queryFn: async () =>{
            const res = await fetch(`http://localhost:5000/dashboard?email=${userData?.email}`);
            const data = res.json();
            return data;
        }
    })

    return (
        <section className={`grid grid-cols-1 sm:grid-cols-4 lg:container gap-x-[3%] mx-auto`}>
            <div className={`hidden sm:block min-h-screen border bg-white`}>
                <p className={`text-center`}>Appointment</p>
            </div>
            <div className={`col-span-3 p-5`}>
                <Dashtable data={apntedAppliedData}></Dashtable>
            </div>
        </section>
    );
};

export default Dashboard;