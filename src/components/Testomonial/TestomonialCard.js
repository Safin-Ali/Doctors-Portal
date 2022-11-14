import React, { useState } from 'react';

const TestomonialCard = ({data}) => {
    const {review,img,name,location} = data;

    const [textCollapse,setExpandText] = useState([50,false]);

    function handleTextExpand () {
        const getReviewTextLength = !textCollapse[1] ? review?.length : 50;
        setExpandText([getReviewTextLength,!textCollapse[1]]);
    }
    return (
        <div className={`text-center p-7 shadow-[0px_1px_20px_0px_#00000052] rounded-lg`}>
            <div>
                <h4 onClick={handleTextExpand} className={`font-medium cursor-pointer md:cursor-default text-black mb-5`}>
                    {window.screen.width <= 640 ? review.slice(0,textCollapse[0])+`${!textCollapse[1] && '...'}` : review}
                    </h4>
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