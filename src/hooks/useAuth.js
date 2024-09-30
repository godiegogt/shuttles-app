import React, { useState } from 'react'
import { auth } from '../firebase/firebase'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { useDispatch } from 'react-redux';
import { SignIn, SignOut } from '../redux/features/configurations/configurationsSlice';
const useAuth = () => {
    const [isLoading, setIsLoading] = useState(false);
    const dispatch = useDispatch();
    const signIn = async (email, password) => {
        try {
            setIsLoading(true)
            const firebaseauth = await signInWithEmailAndPassword(auth, email, password);
            setIsLoading(false);
            console.log(firebaseauth);
            dispatch(SignIn(firebaseauth.user))
        } catch (error) {
            console.log('User error')
        }
    }

    const signUp = async (email, password) => {
        try {
            const resonse = await createUserWithEmailAndPassword(auth, email, password);
            console.log(response)
            return
        } catch (error) {
            console.log('Error trying to SignUp')
            return null
        }

    }

    const _signOut =  () => {
        signOut(auth)
      .then(() => {
        // Successfully signed out
        dispatch(SignOut()); // Optional: Reset auth state in your store
        console.log('User signed out');
      })
      .catch((error) => {
        // An error occurred
        console.error('Sign out error', error);
      });

    }

    return (
        {
            signIn,
            signUp,
            isLoading,
            signOut: _signOut
        }
    )
}

export default useAuth
