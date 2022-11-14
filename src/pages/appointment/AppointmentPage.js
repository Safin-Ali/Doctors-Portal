import React, { useEffect, useState } from 'react';
import bgPoster from '../../images/bg.png';
import Chair from '../../images/chair.png';
import { format } from 'date-fns';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import './AppointmentPage.css';
import AppointmentCard from '../../components/appointment-card/AppointmentCard';

const AppointmentPage = () => {
    const bgImage = {
        backgroundImage: 
        `url(${bgPoster})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
    }
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [appointmentData,setAppointmentData] = useState([]);

    useEffect(()=>{
        fetch(`appointmentsData.json`)
        .then(res => res.json())
        .then(data => setAppointmentData(data));
    },[])

    return (
        <div className={`mb-[55%]`}>
        <section className={`mx-[5%] mb-[5%] lg:container lg:mx-auto`}>
            {/* Hero Area */}
                <div style={bgImage}>
                    <div className={`flex py-[10%] flex-col lg:flex-row gap-y-[60px] gap-x-[30px] items-center h-full`}>
                            <div className={`order-2 basis-full lg:order-1`}>
                                <DayPicker
                                mode="single"
                                selected={selectedDate}
                                onSelect={setSelectedDate}
                                />
                            </div>
                            <div className={`order-1 lg:order-2`}>
                                <img src={Chair} alt="background Banner" />
                            </div>
                    </div>
                </div>
        </section>

        <section className={`mx-[5%] lg:container lg:mx-auto`}>
            <h4 className={`text-[#19D3AE] text-xl my-[5%] font-bold text-center`}>Available Appointments on {format(selectedDate,'PP')}</h4>
            <div className={`grid grid-cols-1 text-center gap-y-[2%] md:grid-cols-2 md:gap-[10%] lg:grid-cols-3 `}>
                {
                    appointmentData.map(elm => <AppointmentCard key={elm._id} data={elm}></AppointmentCard>)
                }
            </div>
        </section>
        </div>
    );
};

export default AppointmentPage;