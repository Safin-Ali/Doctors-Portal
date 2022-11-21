import axios from 'axios';

function TokenVerify (email) {
        axios.post(`http://localhost:5000/jwt`,{},{headers: {email: email}})
        .then(res => {
            localStorage.setItem('jwt-encrypt-key',res.data)
        })
    return
}

export default TokenVerify;