import React, { useEffect, useState } from 'react';
import bgPoster from '../../images/bg.png';
import Chair from '../../images/chair.png';
import { format } from 'date-fns';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import './AppointmentPage.css';
import AppointmentCard from '../../components/appointment-card/AppointmentCard';
import ModalForm from '../../components/Form/ModalForm';
import Footer from '../../components/footer/Footer';
import {useQuery} from '@tanstack/react-query'

const AppointmentPage = () => {
    const bgImage = {
        backgroundImage: 
        `url(${bgPoster})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
    }
    const [selectedDate, setSelectedDate] = useState(new Date());

    // modal toggle function and state
    const [toggleModal,setToggleModal] = useState(false);
    const [modalDT,setModalDT] = useState();
    const [selTime,setSelTIme] = useState();

    function handleModal () {
        setModalDT(format(selectedDate,'PP'));
        setToggleModal(!toggleModal);
    }

    const {data: appointmentData,isLoading} = useQuery({
        queryKey: ['appointmentData'],
        queryFn: () => fetch(`http://localhost:5000/appointmentsData`)
        .then(res => res.json())
    })

    console.log(appointmentData)

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

            <section className={`mx-[5%] lg:container my-[5%] lg:mx-auto`}>
                <h4 className={`text-[#19D3AE] text-xl my-[5%] font-bold text-center`}>Available Appointments on {format(selectedDate,'PP')}</h4>
                <div className={`grid grid-cols-1 text-center gap-y-[2%] md:grid-cols-2 md:gap-[10%] lg:grid-cols-3 `}>
                    {
                        appointmentData?.map(elm => <AppointmentCard setSelTIme={setSelTIme} handleModal={handleModal} key={elm._id} data={elm}></AppointmentCard>)
                    }
                </div>
            </section>
            <Footer></Footer>
            <ModalForm toggleModal={toggleModal} selectedDate={selectedDate} selTime={selTime} handleModal={handleModal} modalDT={modalDT}></ModalForm>
        </>
    );
};

export default AppointmentPage;