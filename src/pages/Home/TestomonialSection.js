import React from 'react';
import quoteImg from '../../images/quote.svg';
import people1 from '../../images/people1.png';
import people2 from '../../images/people2.png';
import people3 from '../../images/people3.png';
import TestomonialCard from '../../components/Testomonial/TestomonialCard';

const TestomonialSection = () => {
    const reviewsData = [
        {
            _id: 1, 
            name: 'Winson Herry',
            img: people1,
            review: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            location: 'California'
        },
        {
            _id: 2, 
            name: 'Winson Herry',
            img: people2,
            review: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            location: 'California'
        },
        {
            _id: 3, 
            name: 'Winson Herry',
            img: people3,
            review: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            location: 'California'
        },
    ]
    return (
        <section className={`container mx-auto`}>
            <div className={`mb-[10%]`}>
                <h4 className={`text-[#19D3AE] text-xl font-bold `}>Testimonial</h4>
                <h6 className={`text-3xl`}>What Our Patients Says</h6>
            </div>
        <section className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center items-center gap-x-[3%]`}>
            {
                reviewsData.map(elm => <TestomonialCard data={elm}></TestomonialCard>)
            }
        </section>
        </section>
    );
};

export default TestomonialSection;