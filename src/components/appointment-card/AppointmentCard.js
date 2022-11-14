import React from 'react';
import CommonButton from '../common-button/CommonButton';

const AppointmentCard = ({data}) => {

    const {name,slots} = data;

    return (
        <div className={`border p-5 rounded-lg my-[5%] shadow-[0px_1px_20px_-10px_#00000052]`}>
            <h4 className={`text-[#19D3AE] text-xl my-[5%] font-medium text-center`}>{name}</h4>
            {
                slots.length > 0 ? 
                (<select className={`my-2 bg-transparent p-2 border rounded-lg focus:outline-none cursor-pointer`}>
                {
                    slots?.map((optn,idx) => <option key={idx} value={optn}>{optn}</option>)
                }
            </select>)
            :  <h4 className={`text-xl my-[5%] text-center`}>Try Another Day</h4>
            }
            <h4 className={`text-lg my-[5%] text-center`}>{slots.length} {slots.length > 0 ? 'Spaces' : 'Space' } Available</h4>
            <div className={`text-center`}>
                <CommonButton text={'BOOK APPOINMENT'}></CommonButton>
            </div>
        </div>
    );
};

export default AppointmentCard;