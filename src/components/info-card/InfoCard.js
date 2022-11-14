import React from 'react';

const InfoCard = ({data}) => {
    const {name,description,icon} = data;
    return (
        <div className={`flex text-white shadow-sm gap-x-[5%] p-6 rounded-lg justify-center items-center h-full ${data.bgClass}`}>
            <div>
                <img src={icon} alt="Info Icon" />
            </div>
            <div>
                <h4 className={`font-medium`}>{name}</h4>
                <p className={`font-light`}>{description}</p>
            </div>
        </div>
    );
};

export default InfoCard;