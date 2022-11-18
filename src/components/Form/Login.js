import React, { useContext, useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import { Link, Navigate, useLocation, useNavigate, } from 'react-router-dom';
import { AuthUser } from '../../context/AuthContext';
import useTokenVerify from '../../hook/useTokenVerify';

const Login = () => {

    const navigate = useNavigate();
    const location = useLocation();
    const [enteredEmail,setEntiredEmail] = useState(null);

    const from = location.state ? location.state : '/';

    const token = useTokenVerify(enteredEmail);

    const { register, handleSubmit } = useForm();
    const {logIn,signUpWithGoogle,userData} = useContext(AuthUser);

    function handleLogin ({email,password}) {
        logIn(email,password)
        .then( res => {
            setEntiredEmail(email)
            navigate(from)
        })
        .catch(e => {
            console.log(e.message)
        })
    }

    function handleGoogleLogin () {
        signUpWithGoogle()
        .then(res => {
            navigate(from)
        })
        .catch(e => {
            console.log(e.message)
        })
    }

    if(userData?.email) return <Navigate to={from}></Navigate>

    return (
        <>
        <section className={`flex justify-center flex-col items-center min-h-[calc(100vh-10vh)] max-h-full`}>
            <div className={`w-1/2 lg:w-2/6 mx-auto rounded-xl shadow-md bg-white px-10`}>
                <h4 className={`text-3xl my-10 text-center`}>Login</h4>
                <form onSubmit={handleSubmit(handleLogin)}>
                    <div className={`my-3`}>
                        <label className={`font-medium ml-2`}>Email</label>
                        <input {...register("email")} type={`email`} className={`p-2 rounded-lg bg-transparent border block w-full`} />
                    </div>
                    <div className={`mt-3`}>
                        <label className={`font-medium ml-2`}>Password</label>
                        <input {...register("password")} type={`password`} className={`p-2 rounded-lg bg-transparent border block w-full`} />
                    </div>
                    <div><Link className={`text-sm font-medium`} to={'/'}>Forgot Password ?</Link></div>
                    <div className={`my-3`}>
                        <button className={`w-full text-slate-50 rounded-lg hover:bg-[#2f3d64] duration-150 bg-[#3A4256] p-4 mb-3`}>LOGIN</button>
                    </div>
                    <div><p className={`my-3 text-md font-medium`}>New to Doctors Portal? <Link to={'/signup'} className={`text-[#19D3AE]`}>Create new account</Link></p></div>
                    <div className='flex justify-center my-3 items-center'>
                        <span className={`inline-block h-[2px] bg-gray-200 w-full`}></span>
                        <span className={`mx-2 text-sm font-medium`}>Or</span>
                        <span className={`inline-block h-[2px] bg-gray-200 w-full`}></span>
                    </div>
                </form>
                <div className={`text-center text-black pb-5`}>
                    <button onClick={handleGoogleLogin} className={`p-3 rounded-xl border border-black w-full`}>CONTINUE WITH GOOGLE</button>
                </div>
            </div>
        </section>
        </>
    );
};

export default Login;