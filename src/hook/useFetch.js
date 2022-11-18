import axios from 'axios';
import { useEffect, useState } from 'react';
function useFetch(method,url,email,postObj){
    const[data,setData] = useState('');
    useEffect(()=>{
        if(method === 'GET') {
            axios.get(url)
            .then(res => setData(res.data));
        };
        if(method === 'POST') {
            axios.post(url,postObj)
            .then(res => setData(res.data));
        }
    },[])

    return data
}

export default useFetch;