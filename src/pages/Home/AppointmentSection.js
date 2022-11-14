import React from 'react';
import CommonButton from '../../components/common-button/CommonButton';
import bgImg from '../../images/appointment.png';

const AppointmentSection = () => {

    const backgroundImg = {
        backgroundImage: `url(${bgImg})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover'

    }
    return (
        <section style={backgroundImg} className={`my-[10%] flex bg-center justify-center items-center`}>
            <div className={`-mt-[7%] basis-1/2 hidden lg:block`}>
                <img src="https://i.ibb.co/grH5fLv/doctor-small.png" className={`w-9/12 mx-auto`} alt="Thumb" />
            </div>
            <div className={`lg:basis-1/2 px-[5%]`}>
                <h4 className={`text-[#19D3AE] text-xl my-3 font-semibold`}>Appointment</h4>
                <h3 className={`text-neutral-100 my-3 text-2xl`}>Make an appointment Today</h3>
                <p className={`text-neutral-300 my-3`}>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                <CommonButton text={'Get Started'}></CommonButton>
            </div>
        </section>
    );
};

export default AppointmentSection;