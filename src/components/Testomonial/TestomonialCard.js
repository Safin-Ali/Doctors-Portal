import React from 'react';

const TestomonialCard = ({data}) => {
    const {review,img,name,location} = data;
    return (
        <div className={`text-center p-7 shadow-[0px_1px_20px_0px_#00000052] rounded-lg`}>
            <div>
                <h4 className={`font-medium text-black mb-5`}>{review}</h4>
                <div className={`flex items-center h-full gap-x-[5%]`}>
                    <div className={`border-[4px] w-[80px] border-[#19D3AE] rounded-full`}>
                        <img src={img} alt="User Avatar" />
                    </div>
                    <div>
                        <p className={`font-semibold`}>{name}</p>
                        <p className={`text-black`}>{location}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TestomonialCard;