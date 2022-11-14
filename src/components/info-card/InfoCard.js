import React from 'react';
import { MdOutlineWatchLater } from 'react-icons/md';

const InfoCard = ({data}) => {
    const {name,description,icon} = data;
    return (
        <div className={`flex text-white shadow-sm gap-x-[5%] p-6 rounded-lg justify-center items-center h-full ${data.bgClass}`}>
            <div>
                <img src={icon} alt="Info Icon" />
            </div>
            <div>
                <h4>{name}</h4>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default InfoCard;