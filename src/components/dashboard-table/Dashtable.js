import { format } from 'date-fns';
import React from 'react';

const Dashtable = () => {

    const currentDate = new Date()

    return (
    <>     
        <div className={`flex justify-between items-center m-4`}>
            <h1 className={`text-2xl`}>My Appointment</h1>
            <div className={`border border-black p-3 rounded-lg`}>
                <p>{format(currentDate,'PP')}</p>
            </div>
        </div>     
        <div className={`overflow-x-auto relative shadow-md rounded-lg`}>
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
                    <tr className={`bg-[#fffdfd] even:bg-[#f3f8fe] border-b`}>
                    <td className={`p-3 pl-4`}>
                            1
                        </td>
                        <th scope="row" className={`py-4 px-6 font-medium text-gray-900 whitespace-nowrap`}>
                            SA Safin Ali
                        </th>
                        <td className={`py-4 px-6`}>
                            Servicesssss
                        </td>
                        <td className={`py-4 px-6`}>
                            {10}
                        </td>
                    </tr>                    
                </tbody>
            </table>
        </div>
    </>
    );
};

export default Dashtable;