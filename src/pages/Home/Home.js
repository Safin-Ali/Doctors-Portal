import React from 'react';
import Chair from '../../images/chair.png';
import bgPoster from '../../images/bg.png';
import CommonButton from '../../components/common-button/CommonButton';

const Home = () => {

    const bgImage = {
        backgroundImage: 
        `url(${bgPoster})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
    }

    return (
        <>
            <section style={bgImage} className={`py-[10%] mx-[5%] lg:container lg:mx-auto`}>
                <div className={`flex flex-col lg:flex-row gap-y-[60px] gap-x-[30px] items-center h-full`}>
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
            </section>
        </>
    );
};

export default Home;