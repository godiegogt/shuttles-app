import React,{useState} from 'react'
import { auth } from '../firebase/firebase'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
const useAuth = () => {
    const [isLoading, setIsLoading] = useState(false);

    const signIn= async(email,password)=>{
        try {
            setIsLoading(true)
            const firebaseauth =await  signInWithEmailAndPassword(auth, email, password);
            setIsLoading(false)
             console.log(firebaseauth);
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

    return (
        {
            signIn,
            signUp,
            isLoading
        }
    )
}

export default useAuth
