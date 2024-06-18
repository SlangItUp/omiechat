import React, { useState } from 'react'
import toast from 'react-hot-toast';
import { useAuthContext } from '../context/AuthContext.jsx';

const useSignup = () => {
    const [loading, setLoading] = useState(false);
    const { setAuthUser} = useAuthContext()    

    const signup = async({username, gender, age}) =>{
        const success = handleInputErrors({username,gender,age})
        if(!success) return;
        try{
        const res = await fetch("/api/auth/start", {
            'method' : 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            'body': JSON.stringify({username, gender, age})
        })
        const data = await res.json();
        if(data.error){
            throw new Error(data.error)
        }
        localStorage.setItem("user", JSON.stringify(data))
        setAuthUser(data)
    }
    catch(error){
        toast.error(error.message)
    }
    }
    
    return({loading, signup})
}

function handleInputErrors({username, gender, age}){
    if(!username || !gender || !age){
        console.log(username)
        toast.error("Fill all the fields")
        return false
    }
    if(username.length<4){
        toast.error("Username shoud be 3+ Characters")
        return false
    }
    if(username.includes(' ')){
        toast.error("Username should not contain space")
        return false
    }
    return true;
}

export default useSignup;

