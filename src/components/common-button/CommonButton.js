import React from 'react';

const CommonButton = ({func,text}) => {
    return (
        <button onClick={func?()=>func():null} className={`bg-gradient-to-l text-white p-2 rounded-lg bg-[#19D3AE] from-[#0FCFEC] hover:shadow-md transition-shadow`}>{text}</button>
    );
};

export default CommonButton;