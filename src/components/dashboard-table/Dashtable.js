import { format } from 'date-fns';
import React from 'react';

const Dashtable = ({data}) => {

    const currentDate = new Date();

    return (
    <>     
        <div className={`flex flex-col md:flex-row justify-between items-center m-4`}>
            <h1 className={`text-2xl order-2 my-1 md:order-none`}>My Appointment</h1>
            <div className={`border border-black order-1 p-3 rounded-lg my-1 md:order-none`}>
                <p>{format(currentDate,'PP')}</p>
            </div>
        </div>     
        <div className={`relative shadow-md rounded-lg`}>
            <table className={`w-full text-sm text-left text-gray-500`}>
                <thead className={`text-gray-700 uppercase bg-[#D0DEF2]`}>
                    <tr>
                        <th scope="col" className={`p-3`}>
                            Serial
                        </th>
                        <th scope="col" className={`py-3 px-6`}>
                            Name
                        </th>
                        <th scope="col" className={`py-3 px-6`}>
                            Service
                        </th>
                        <th scope="col" className={`py-3 px-6`}>
                            Time
                        </th>
                    </tr>
                </thead>
                <tbody className={`text-zinc-800`}>
                    {
                        data.map((elm,idx) => {
                            return <tr key={elm._id} className={`bg-[#fffdfd] even:bg-[#f3f8fe] border-b`}>
                            <td className={`p-3 pl-4`}>
                                    {idx+1}
                                </td>
                                <th scope="row" className={`py-4 px-6 font-medium text-gray-900 whitespace-nowrap`}>
                                    {elm.userName}
                                </th>
                                <td className={`py-4 px-6`}>
                                    {elm.name}
                                </td>
                                <td className={`py-4 px-6`}>
                                    {elm.slot}
                                </td>
                            </tr>     
                        })
                    }               
                </tbody>
            </table>
        </div>
    </>
    );
};

export default Dashtable;