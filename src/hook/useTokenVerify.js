import { useEffect } from "react"
import axios from 'axios';

function useTokenVerify (email) {

    useEffect(()=>{
        axios.post(`http://localhost:5000/jwt`,{},{headers: {email: email}})
        .then(res => {
            localStorage.setItem('jwt-encrypt-key',res.data)
        })
    },[email])
    return
}

export default useTokenVerify;