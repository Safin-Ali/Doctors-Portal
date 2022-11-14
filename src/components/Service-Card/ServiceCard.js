import React from 'react';

const ServiceCard = ({data}) => {
    const {name,description,img} = data;
    return (
        <div className={`text-center px-5 py-3 shadow-[0px_1px_20px_0px_#00000052] rounded-lg`}>
            <div className={`p-3 my-2`}>
                <img className={`mx-auto`} src={img} alt="Card Logo" />
            </div>
            <h5>{name}</h5>
            <p>{description}</p>
        </div>
    );
};

export default ServiceCard;