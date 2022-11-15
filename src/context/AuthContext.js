import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth';
import app from '../Firebase/Firebase.init';

export const AuthUser = createContext();

const AuthContext = ({children}) => {

    const auth = getAuth(app);

    const [userData,setUserData] = useState(null);
    const [load,setLoaded] = useState(false);

    const logIn = (email,pass) => {
        return signInWithEmailAndPassword(auth,email,pass);
    }

    const createAcc = (email,pass) => {
        return createUserWithEmailAndPassword(auth,email,pass);
    }

    useEffect(()=>{
        const unsubs = onAuthStateChanged(auth,user =>{
            setUserData(user);
            setLoaded(true);
        })

        return () => unsubs()
    },[])

    console.log(userData)

    const authInfo = {logIn,createAcc,load,userData}

    return (
        <AuthUser.Provider value={authInfo}>
            {children}
        </AuthUser.Provider>
    );
};

export default AuthContext;