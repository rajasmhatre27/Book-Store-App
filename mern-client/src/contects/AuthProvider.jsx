import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.config';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, updateCurrentUser } from 'firebase/auth';

// Create the context
export const AuthContext = createContext();
const auth = getAuth(app);
const googleprovider = new GoogleAuthProvider();



const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // Function to create a new user
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                setUser(userCredential.user);
                setLoading(false);
                return userCredential;
            })
            .catch((error) => {
                setLoading(false);
                throw error;
            });
    };

    const loginwithGoogle=()=>{
        setLoading(true)
        return signInWithPopup(auth ,googleprovider)
    } 
    useEffect(()=>{
        const unsubcribe =onAuthStateChanged(auth , currentUser =>{
            console.log(currentUser)
            setUser(currentUser)
            setLoading(false)
        })
        return () => {
            return unsubcribe();
        }
    },[])

    // Context value to be provided to the children
    const authInfo = {
        user,
        createUser,
        loginwithGoogle
    };

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
