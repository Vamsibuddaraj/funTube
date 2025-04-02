import React, { useEffect, useRef, useState } from 'react'
import formValidation from '../utils/formValidation'
import { auth } from '../utils/firebase'
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useDispatch, useSelector } from 'react-redux';
import { addUserDetails } from '../store/userSlice';
import { useNavigate } from 'react-router-dom';

const SignUpSignIn = () => {
    const [status,setStatus] = useState()
    const user = useSelector(store=>store.user)
    const navigate = useNavigate()
    if(user){
        navigate("/history")
    }
    const email = useRef()
    const password = useRef()
    const dispatch = useDispatch()
    const handleSubmit = () => {
        setStatus(formValidation(email.current.value,password.current.value))
    }
    const authenticate = async () => {
        createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          const user = userCredential.user;
          dispatch(addUserDetails({
              uid: user.uid,
              email: user.email,
              displayName: user.displayName || "", 
              photoURL: user.photoURL || "",
          }));
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setStatus(errorMessage)
          // ..
        });
    }
    useEffect(()=>{
        if(!user&&email.current.value&&password.current.value){
            authenticate()
        }
    },[status])

  return (
    <div className='w-full h-full bg-gray-300 absolute top-[70px]'>
        <div className='md:w-[25%] w-96 h-[60%] bg-white m-auto mt-32 flex justify-center'>
            <div className='m-10'>
                <span>Sign up to see your history</span>
                <form onSubmit={e=>{
                    e.preventDefault()
                }}>
                    <input ref={email} className='border border-gray-400 px-6 py-2 my-6 w-full' placeholder='Email'/>
                    <input ref={password} className='border border-gray-400 px-6 py-2 mb-6 w-full' type='password' placeholder='Password'/>
                    {status&&<p className='text-red-500 text-sm'>{status}</p>}
                    <button onClick={handleSubmit} className='bg-red-500 py-1 cursor-pointer text-white w-full '>Login</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default SignUpSignIn