import React from 'react';
import fluoride from '../../images/fluoride.png';
import cavity from '../../images/cavity.png';
import whitening from '../../images/whitening.png';
import ServiceCard from '../../components/Service-Card/ServiceCard';
import CommonButton from '../../components/common-button/CommonButton';


const ServicesSection = () => {
    
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
    <section className={`my-[5%]`}>
            <h4 className={`text-[#19D3AE] text-xl font-bold text-center`}>Our Services</h4>
            <h6 className={`text-center text-3xl`}>Services We Provide</h6>
            <div className={`grid gap-y-[3%] grid-cols-1 md:grid-cols-2 md:gap-[3%] lg:grid-cols-3 lg:gap-x-[3%] my-[7%]`}>
                {
                servicesData.map(elm => <ServiceCard key={elm.id} data={elm}></ServiceCard>)
                }
            </div>
            <div className={`flex flex-col py-[5%] sm:py-0 sm:my-[5%] md:flex-row my- justify-center items-center mx-[3%] gap-x-[3%]`}>
                <div className={`my-[10%] md:my-0 text-center`}>
                    <img src='https://i.ibb.co/pQjxrvF/treatment.png' className={`rounded-md mx-auto w-full md:w-3/4 inline-block`} alt="Treatment Banner" />
                </div>
                <div className={`md:w-4/5 lg:w-1/2`}>
                    <h2 className={`text-2xl sm:text-4xl lg:text-5xl font-bold my-3 leading-[130%]`}>Exceptional Dental Care, on Your Terms</h2>
                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                    <div className={`mt-3`}>
                                    <CommonButton text={'Get Started'}></CommonButton>
                    </div>
                </div>
            </div>

    </section>
    );
};

export default ServicesSection;