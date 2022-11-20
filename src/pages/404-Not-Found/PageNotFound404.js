import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import NotFound404 from './404-Not-Found.svg';

const PageNotFound404 = () => {

    const location = useLocation().state;

    const navigate = useNavigate();

    return (
        <>
            <section className={`flex flex-col justify-center items-center min-h-screen`}>
                <div className={`w-2/5 mx-auto`}><img src={NotFound404} alt="404 Vector" /></div>
                <div>
                    <button onClick={()=>navigate(location ? location : '/')} className={`bg-gradient-to-l text-white p-2 rounded-lg bg-[#19D3AE] from-[#0FCFEC] hover:shadow-md hover:bg-[#0FCFEC] hover:from-[#19D3AE] duration-150`}>Go Back</button>
                </div>
            </section>
        </>
    );
};

export default PageNotFound404;