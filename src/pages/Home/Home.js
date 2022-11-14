import React from 'react';
import Chair from '../../images/chair.png';
import bgPoster from '../../images/bg.png';
import CommonButton from '../../components/common-button/CommonButton';
import InfoCard from '../../components/info-card/InfoCard';
import clock from '../../images/clock.svg';
import marker from '../../images/marker.svg';
import phone from '../../images/phone.svg';
import fluoride from '../../images/fluoride.png';
import cavity from '../../images/cavity.png';
import whitening from '../../images/whitening.png';
import ServiceCard from '../../components/Service-Card/ServiceCard';

const Home = () => {

    const bgImage = {
        backgroundImage: 
        `url(${bgPoster})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
    }

    // Info card Data
    const cardData = [
        {
            id: 1,
            name: 'Opening Hours',
            description: 'Open 9.00 am to 5.00pm everyday',
            icon: clock,
            bgClass: 'bg-gradient-to-l bg-[#19D3AE] from-[#0FCFEC]'
        },
        {
            id: 2,
            name: 'Our Locations',
            description: 'Open 9.00 am to 5.00pm everyday',
            icon: marker,
            bgClass: 'bg-[#3A4256]'
        },
        {
            id: 3,
            name: 'Contact Us',
            description: 'Open 9.00 am to 5.00pm everyday',
            icon: phone,
            bgClass: 'bg-gradient-to-l bg-[#19D3AE] from-[#0FCFEC]'
        },
    ];

    // Services Card
    const servicesData = [
        {
            id: 1,
            name: 'Fluoride Treatment',
            description: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
            img: fluoride
        },
        {
            id: 2,
            name: 'Cavity Filling',
            description: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
            img: cavity
        },
        {
            id: 3,
            name: 'Teeth Whitening',
            description: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
            img: whitening
        },
    ];

    return (
        <>
            {/* Hero Area */}
            <section className={`mx-[5%] lg:container lg:mx-auto`}>
                <div style={bgImage}>
                    <div className={`flex py-[10%] flex-col lg:flex-row gap-y-[60px] gap-x-[30px] items-center h-full`}>
                            <div className={`order-2 lg:order-1`}>
                                <h2 className={`text-2xl sm:text-4xl lg:text-5xl font-bold my-3 leading-[130%]`}>Your New Smile Starts <br /> Here</h2>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the</p>
                                <div className={`mt-3`}>
                                    <CommonButton text={'Get Started'}></CommonButton>
                                </div>
                            </div>
                            <div className={`order-1 lg:order-2`}>
                                <img src={Chair} alt="background Banner" />
                            </div>
                    </div>
                </div>

            {/* Card Info */}
                <section className={`grid my-[10%] grid-cols-1 gap-y-[5%] md:gap-[5%] md:grid-cols-2 lg:grid-cols-3 lg:gap-y-0 gap-x-[5%]`}>
                    {
                        cardData.map(elm => <InfoCard key={elm.id} data={elm}></InfoCard>)
                    }
                </section>

                {/* Our Services */}
                <section>
                    <h4 className={`text-[#19D3AE] text-xl font-bold text-center`}>Our Services</h4>
                    <h6 className={`text-center text-3xl`}>Services We Provide</h6>
                        <div className={`grid gap-y-[3%] grid-cols-1 lg:grid-cols-3 lg:gap-x-[3%] my-[3%]`}>
                            {
                            servicesData.map(elm => <ServiceCard key={elm.id} data={elm}></ServiceCard>)
                            }
                        </div>
                </section>
            </section>
        </>
    );
};

export default Home;