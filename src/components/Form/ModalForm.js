import React, { useContext } from 'react';
import {IoCloseOutline} from 'react-icons/io5';
import { format } from 'date-fns';
import { AuthUser } from '../../context/AuthContext';
import { Link, useLocation } from 'react-router-dom';

const ModalForm = ({selTime,selectedDate,toggleModal,handleModal,handleSubmit}) => {

    const {userData} = useContext(AuthUser);

    const currentLocation = useLocation();

    if(!userData) {
            return <div className={`${toggleModal ? 'block' : 'hidden'} text-center w-[90%] mx-auto md:w-3/4 lg:w-2/5 z-[2] fixed left-1/2 transform -translate-x-1/2 -translate-y-1/2 top-1/2 bg-[#fbfbfb] rounded-2xl px-5 py-3 border`}>
            <h1 className={`text-2xl`}>Please Login First</h1>
            <div><Link className={`text-blue-600 underline`} state={currentLocation.pathname} to={'/login'}>Login</Link></div>
    </div>
    }

    return (
        <div className={`${toggleModal ? 'block' : 'hidden'} w-[90%] mx-auto md:w-3/4 lg:w-2/5 z-[2] fixed left-1/2 transform -translate-x-1/2 -translate-y-1/2 top-1/2 bg-[#fbfbfb] rounded-2xl px-5 py-3 border`}>
            <form onSubmit={handleSubmit}>
                <div className={`flex items-center mb-10 justify-between`}>
                    <h5 className={`text-2xl font-medium`}>Cavity Protection</h5>
                    <IoCloseOutline onClick={handleModal} className={`text-4xl text-white cursor-pointer rounded-[50%] bg-[#3A4256]`}></IoCloseOutline>
                </div>
                <p className={`text-black my-10 rounded-lg bg-neutral-300 px-2 md:p-2 lg:p-5`} name={'appointmentDate'}>{format(selectedDate,'PP')}</p>
                <p className={`text-black my-10 rounded-lg bg-neutral-300 px-2 md:p-2 lg:p-5`}>{selTime}</p>
                <div className={`my-10`}>
                    <input type="text" className={`w-full text-black border rounded-lg bg-transparent px-2 md:p-2 lg:p-5`} name={`fullName`} placeholder={`FullName`} defaultValue={userData.displayName || 'No Name'} readOnly/>
                </div>
                <div className={`my-10`}>
                    <input type="text" className={`w-full text-black border rounded-lg bg-transparent px-2 md:p-2 lg:p-5`} name={`phoneNum`} placeholder={`Phone Number`} />
                </div>
                <div className={`my-10`}>
                    <input type="text" className={`w-full text-black border rounded-lg bg-transparent px-2 md:p-2 lg:p-5`} name={`email`} placeholder={`Email`} defaultValue={userData?.email} readOnly/>
                </div>
                <button className={`w-full text-slate-50 rounded-lg hover:bg-[#2f3d64] duration-150 bg-[#3A4256] p-4 mb-3`}>Submit</button>
            </form>
        </div>
    );
};

export default ModalForm;