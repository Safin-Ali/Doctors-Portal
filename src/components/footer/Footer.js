import React from 'react';
import {Link} from 'react-router-dom';
import bgImg from '../../images/footer.png';

const Footer = () => {

    const bgImage = {
        backgroundImage: `url(${bgImg})`
    }

    return (
        <footer style={bgImage} className={`py-10 bg-none bg-cover bg-center bg-no-repeat`}>
            <section className={`md:container mx-[5%] justify-between flex flex-col lg:flex-row ,d:mx-auto`}>
                <div>
                    <h5 className={`text-[#939393] font-bold mb-4`}>Services</h5>
                    <Link to={`/`} className={`my-2 block`}>Emergency Checkup</Link>
                    <Link to={`/`} className={`my-2 block`}>Monthly Checkup</Link>
                    <Link to={`/`} className={`my-2 block`}>Weekly Checkup</Link>
                    <Link to={`/`} className={`my-2 block`}>Deep Checkup</Link>
                </div>
                <div>
                    <h5 className={`text-[#939393] font-bold mb-4`}>ORAL HEALTH</h5>
                    <Link to={`/`} className={`my-2 block`}>Fluoride Treatment</Link>
                    <Link to={`/`} className={`my-2 block`}>Cavity Filling</Link>
                    <Link to={`/`} className={`my-2 block`}>Teath Whitening</Link>
                </div>
                <div>
                    <h5 className={`text-[#939393] font-bold mb-4`}>OUR ADDRESS</h5>
                    <Link to={`/`} className={`my-2 block`}>New York - 101010 Hudson</Link>
                </div>
            </section>
                <h5 className={`text-zinc-900 text-center font-medium`}>Copyright 2022 All Rights Reserved</h5>
        </footer>
    );
};

export default Footer;