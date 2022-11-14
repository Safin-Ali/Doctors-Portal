import React, { useState } from 'react';
import bgPoster from '../../images/bg.png';
import Chair from '../../images/chair.png';
import { format } from 'date-fns';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import './AppointmentPage.css';

const AppointmentPage = () => {
    const bgImage = {
        backgroundImage: 
        `url(${bgPoster})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
    }
    const [selectedDate, setSelectedDate] = useState(new Date());

    console.log(format(selectedDate,'PP'))

    return (
        <>
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
        <section>
            <h4 className={`text-[#19D3AE] text-xl font-bold text-center`}>Available Appointments on April 30, 2022</h4>
        </section>
        </>
    );
};

export default AppointmentPage;