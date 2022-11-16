import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import app from '../Firebase/Firebase.init';

export const AuthUser = createContext();

const AuthContext = ({children}) => {

    const auth = getAuth(app);

    const [userData,setUserData] = useState(null);
    const [load,setLoaded] = useState(false);

    const googleProv = new GoogleAuthProvider(app);

    const logIn = (email,pass) => {
        return signInWithEmailAndPassword(auth,email,pass);
    }

    const logOut = () => {
        return signOut(auth);
    }

    const createAcc = (email,pass) => {
        return createUserWithEmailAndPassword(auth,email,pass);
    }

    const signUpWithGoogle = () => {
        return signInWithPopup(auth,googleProv)
    }

    useEffect(()=>{
        const unsubs = onAuthStateChanged(auth,user =>{
            setUserData(user);
            setLoaded(true);
        })

        return () => unsubs()
    },[])

    console.log(userData)

    const authInfo = {logIn,createAcc,load,userData,signUpWithGoogle,logOut}

    return (
        <AuthUser.Provider value={authInfo}>
            {children}
        </AuthUser.Provider>
    );
};

export default AuthContext;