import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import { MdAddAPhoto } from 'react-icons/md';

const AddDoctors = () => {

    const {handleSubmit,register} = useForm();

    // onSubmit Doctor Data
    function onSubmit ({doctorEmail,doctorName,speciality,doctorAvatar}) {
        const formData = new FormData();
        formData.append('image',doctorAvatar[0]);
        const url = `https://api.imgbb.com/1/upload?key=${process.env.REACT_APP_IMGBB_API}`
        axios.post(url,formData)
        .then(res => {
            if(res.data.success){
                axios.post(`http://localhost:5000/doctors`,{doctorEmail,doctorName,speciality,doctorAvatar: `${res.data.data.url}`})
                .then(res => console.log(res))
                .catch(e => alert(e.message))
            }
        })

    }

    return (
        <>
            <section>

            <h1 className={`text-2xl order-2 my-1 md:order-none`}>Add Doctors</h1>

                <div className={`bg-white w-full md:w-2/3 lg:w-2/5 rounded-lg p-5`}>
                    <form onSubmit={handleSubmit(onSubmit)}>

                        {/* Doctor Name */}
                        <div className={`my-3`}>
                            <label className={`font-medium ml-2`}>Name</label>
                            <input {...register("doctorName")} type={`text`} className={`p-2 rounded-md bg-transparent border block w-full`} />
                        </div>

                        {/* Doctor Email */}
                        <div className={`my-3`}>
                            <label className={`font-medium ml-2`}>Email</label>
                            <input {...register("doctorEmail")} type={`email`} className={`p-2 rounded-md bg-transparent border block w-full`} />
                        </div>

                        {/* Doctor Speciality */}
                        <div className={`my-3`}>
                            <select className={`p-2 rounded-md bg-transparent border block w-full cursor-pointer`} {...register(`speciality`)}>
                                <option value="oncology">Oncology</option>
                                <option value="dermatology">Dermatology</option>
                                <option value="neurology">Neurology</option>
                            </select>
                        </div>

                        {/* Doctors Avatar */}
                        <div className="flex items-center justify-center w-full">
                            <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full border-2 border-gray-300 border-dashed rounded-lg cursor-pointer">
                                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                    <p className="mb-2 text-sm text-gray-500"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                                    <MdAddAPhoto className={`text-xl`}></MdAddAPhoto>
                                </div>
                                <input type="file" id="dropzone-file" className="hidden" {...register('doctorAvatar')} />
                            </label>
                        </div> 

                        {/* Doctor Submit Button */}
                        <div className={`my-3`}>
                            <button className={`w-full text-slate-50 rounded-lg hover:bg-[#2f3d64] duration-150 bg-[#3A4256] p-4 mb-3`}>Add</button>
                        </div>
                    </form>
                </div>
            </section>
        </>
    );
};

export default AddDoctors;