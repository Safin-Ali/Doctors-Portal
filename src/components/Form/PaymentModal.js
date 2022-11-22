import React from 'react';
import {CardCvcElement, CardElement, CardExpiryElement, CardNumberElement, Elements, useElements, useStripe} from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import CubeSpinner from '../cube-spinner/CubeSpinner';

const stripePromise = loadStripe('pk_test_51M6f3lE4zqv3Gon5S5kBwapy9jiC6v7LvytktIFuiEfL2BaPUYs88EtG3TjZGhzlTRKZ7Ovr3GbipnOlG8t2o59r00SnvY5pmh');

// Form Design
function PaymentForm ({data}) {

    const {price,appointmentsDate,userName,slot,name} = data;

    const stripe = useStripe();

    const elements = useElements();

    async function onPayment (event) {
        event.preventDefault()
        if (elements == null) {
            return alert('Error Tuki');
          }    
        const {error, paymentMethod} = await stripe.createPaymentMethod({
            type: 'card',
        });
    }

    return(
        <section className={`fixed top-1/2 w-[30%] left-1/2 transform -translate-x-1/2 -translate-y-1/2`}>
            <form onSubmit={onPayment}>
                <div className={`bg-white  rounded-lg p-[5%] shadow-md`}>
                    <h4 className={`text-[#19D3AE] font-medium`}>Hello, {userName}</h4>
                    <h3 className={`my-1 font-semibold font-2xl`}>Please pay for {name}</h3>
                    <p className={`my-1 font-light`}>Your Appointmnet: <span className={`text-[#F0AA22]`}>{appointmentsDate}</span> at {slot}</p>
                    <h3 className={`font-bold border-b-2 my-2 pb-4`}>Please Pay $100</h3>
                        <CardNumberElement className='border p-4 my-5 rounded-lg'></CardNumberElement>
                        <CardExpiryElement className='border p-4 my-5 rounded-lg'></CardExpiryElement>
                        <button className={`w-full text-slate-50 rounded-lg hover:bg-[#2f3d64] duration-150 bg-[#3A4256] p-4 mb-3`}>PAY</button>
                </div>
            </form>
        </section>
    )
}


const PaymentModal = ({id}) => {

    const{data:currentService,isLoading} = useQuery({
        queryKey: ['currentServices',id],
        queryFn: () => axios.get(`http://localhost:5000/payment-intent?id=${id}`,{headers: {authorization: `Bearer ${localStorage.getItem('jwt-encrypt-key')}`}})
        .then(res => res.data)
    })

    if(isLoading) return <CubeSpinner></CubeSpinner>
    
    return (
        <Elements stripe={stripePromise}>
            <PaymentForm data={currentService}></PaymentForm>
        </Elements>
    );
};

export default PaymentModal;