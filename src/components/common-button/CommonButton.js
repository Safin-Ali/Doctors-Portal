import React from 'react';

const CommonButton = ({func,text}) => {
    return (
        <button className={`bg-gradient-to-l text-white p-2 rounded-lg bg-[#19D3AE] from-[#0FCFEC] hover:shadow-md hover:bg-[#0FCFEC] hover:from-[#19D3AE] duration-150`}>{text}</button>
    );
};

export default CommonButton;