import React from 'react';
import {IoCloseOutline} from 'react-icons/io5';
import { format } from 'date-fns';

const ModalForm = ({selTime,selectedDate,toggleModal,handleModal}) => {
    return (
        <div className={`${toggleModal ? 'block' : 'hidden'} w-2/5 z-[2] mx-auto absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 top-1/2 bg-[#fbfbfb] rounded-2xl px-5 py-3 border`}>
            <div className={`flex items-center mb-10 justify-between`}>
                <h5 className={`text-2xl font-medium`}>Cavity Protection</h5>
                <IoCloseOutline onClick={handleModal} className={`text-4xl text-white cursor-pointer rounded-[50%] bg-[#3A4256]`}></IoCloseOutline>
            </div>
            <p className={`text-black my-10 rounded-lg bg-neutral-300 p-5`}>{format(selectedDate,'PP')}</p>
            <p className={`text-black my-10 rounded-lg bg-neutral-300 p-5`}>{selTime}</p>
            <div className={`my-10`}>
                <input type="text" className={`w-full text-black border rounded-lg bg-transparent p-5`} name={`fullName`} placeholder={`FullName`} />
            </div>
            <div className={`my-10`}>
                <input type="text" className={`w-full text-black border rounded-lg bg-transparent p-5`} name={`phoneNum`} placeholder={`Phone Number`} />
            </div>
            <div className={`my-10`}>
                <input type="text" className={`w-full text-black border rounded-lg bg-transparent p-5`} name={`email`} placeholder={`Email`} />
            </div>
            <button className={`w-full text-slate-50 rounded-lg hover:bg-[#2f3d64] duration-150 bg-[#3A4256] p-4 mb-3`}>Submit</button>
        </div>
    );
};

export default ModalForm;