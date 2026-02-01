import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.config';
export const AuthContext = createContext();
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";


const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);

    }

    const provider = new GoogleAuthProvider;

    const googleLogin=()=>{
        return signInWithPopup(auth, provider);
    }

    const updateUser = (updatedData)=>{
        return updateProfile(auth.currentUser, updatedData);
    }

    useEffect(() => {
        const subs = onAuthStateChanged(auth, (user) => {
            setUser(user);
        })
        return () => {
            subs();
        }
    }, []);

    const logInUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    const logoutUser = () => {
        const logout = () => {
            signOut(auth).then(() => {

            }).catch((error) => {

            });
        }
        return logout();
    }

    const authData = {
        user,
        setUser,
        auth,
        createUser,
        logoutUser,
        logInUser,
        updateUser,
        googleLogin,

    }

    return <AuthContext value={authData}>{children}</AuthContext>;
};

export default AuthProvider;