import {  GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, sendEmailVerification, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import { auth } from '../firebase/firebase.init';
import axios from 'axios';


export const AuthContext = createContext(null);
const googleProvider = new GoogleAuthProvider();


const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    
  
    const createUser = (email, password) => {
      setLoading(true);
      return createUserWithEmailAndPassword(auth, email, password)
    }
  
    const signIn = (email, password) => {
      setLoading(true)
      return signInWithEmailAndPassword(auth, email, password)
    }
  
    const signInWithGoogle = () => {
      setLoading(true)
      return signInWithPopup(auth, googleProvider)
    }
  
    const logOut = async () => {
      setLoading(true)
      const { data } = await axios(`${import.meta.env.VITE_API_URL}/logout`, {
        withCredentials: true,
      })
      console.log(data)
      return signOut(auth)
    }
  
    const updateUserProfile = (name, photo) => {
      return updateProfile(auth.currentUser, {
        displayName: name,
        photoURL: photo,
      })
    }
  
    // onAuthStateChange
    useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, currentUser => {
        setUser(currentUser)
        console.log('CurrentUser-->', currentUser)
        setLoading(false)
      })
      return () => {
        return unsubscribe()
      }
    }, [])
  
    const authInfo = {
      user,
      setUser,
      loading,
      setLoading,
      createUser,
      signIn,
      signInWithGoogle,
      logOut,
      updateUserProfile,
    }
    return (
       <AuthContext.Provider value={authInfo}>
          {children}
       </AuthContext.Provider>
    );
};

export default AuthProvider;
//updated...