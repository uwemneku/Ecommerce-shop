import React, { useEffect, useRef, useState } from 'react'
import { FcGoogle } from 'react-icons/fc';
import { FaFacebook } from 'react-icons/fa';
import { FaEye } from 'react-icons/fa';
import { FaEyeSlash } from 'react-icons/fa';
import {Link} from "react-router-dom"
import {auth, facebookProvider, googleProvider} from '../firebaseconfig'
import {login} from '../actions'
import {useDispatch} from 'react-redux'

export default function Signup() {
    const formRef = useRef(null)
    const nameRef = useRef(null)
    const emailRef = useRef(null)
    const phoneNumberRef = useRef(null)
    const passwordRef = useRef(null)
    const verifypasswordRef = useRef(null)
    const [opacity, setopacity] = useState(0)
    const [showPassword, setshowPassword] = useState(false)
    const [isPasswordOK, setIsPasswordOK] = useState(true)
    const dispact = useDispatch()
    const showError = (node) => {
        node.classList.add("inputError")
        setTimeout(() => {
            node.classList.remove("inputError")
        }, 2000);
    }
    const handleClick = (e) => {
        e.preventDefault()
        formRef.current.reportValidity()
        if (nameRef.current.value === ""){
            showError(nameRef.current)}
        if (phoneNumberRef.current.value === "") showError(phoneNumberRef.current)
        if (emailRef.current.value === "") showError(emailRef.current)
        if (passwordRef.current.value === ""){
            showError(passwordRef.current)
        }else{
            setIsPasswordOK(verifypasswordRef.current.value === passwordRef.current.value)
        }

        if(formRef.current.checkValidity() && isPasswordOK){
            auth.createUserWithEmailAndPassword(emailRef.current.value, passwordRef.current.value)
            .then(e => dispact(login()))
            .catch(error => alert(error.message))
        };
    }
    const handleShowPassword = () => {
        setshowPassword(!showPassword)
    }
    const handleGoogleSignUp =()=>{
        auth.signInWithPopup(googleProvider)
        .then(e => dispact(login()))
        .catch(alert)
    } 
    const handlefacebookSignUp =()=>{
        auth.signInWithPopup(facebookProvider)
        .then(e => dispact(login()))
        .catch(alert)
    } 
    
    
    useEffect(() => {
        setopacity(1)
    }, [])
    return (
        <section className={`flex-1 bg-blue-500 flex justify-center items-start sm:py-20 opacity-${opacity} transition-opacity duration-300 `}>
            <div className="bg-white rounded w-full sm:w-96 p-5 " >
                <p className="text-center font-bold text-gray-600 text-2xl" >Welcome</p>
                <p className="text-center text-md text-gray-500" >Enter your credentials to create your account</p>
               
                <form ref={formRef} className="mt-6 flex flex-col" >
                            <input ref={nameRef} minLength={3} placeholder="Name" className="focus:outline-none m-3 shadow-sm rounded drop-shadow-sm p-2 " type="text"  />
                            <input ref={phoneNumberRef} minLength={10} placeholder="Phone number" className="focus:outline-none m-3 shadow-sm rounded drop-shadow-sm p-2" type="tel"  />
                            <input ref={emailRef} placeholder="Enter your email" className="focus:outline-none m-3 shadow-sm rounded drop-shadow-sm p-2" type="email"  />
                            <div className="flex items-center">
                                <input ref={passwordRef} placeholder="Enter your password" className="focus:outline-none m-3 shadow-sm rounded drop-shadow-sm p-2 flex-1" type={showPassword? "text" : "password"}  />
                                <div className="flex-0 py-5">
                                     { showPassword ? <FaEye onClick={handleShowPassword}  /> : <FaEyeSlash onClick={handleShowPassword}/>}
                                </div>
                            </div>
                            <input ref={verifypasswordRef} placeholder="Confirm password" className="focus:outline-none m-3 shadow-sm rounded drop-shadow-sm p-2" type={showPassword? "text" : "password"}   />
                            {!isPasswordOK && <p className="text-center text-red-600 py-3" >Password does not match</p>}
                            <button type="submit" className="bg-blue-600 p-1 rounded text-white" onClick={handleClick} >
                                Create account
                            </button>
                </form>
                <div className="flex flex-col mt-4">
                    <button onClick={handleGoogleSignUp} className="my-2 bg-white rounded shadow-md drop-shadow-md p-2 font-medium flex items-center justify-center" >
                                <FcGoogle/>
                                <p className="px-2" >
                                    Sign up with Google
                                </p>
                    </button>
                    <button onClick={handlefacebookSignUp} className=" my-2 bg-white rounded shadow-md drop-shadow-md p-2 font-medium flex items-center justify-center" >
                                <FaFacebook className="text-blue-600" />
                                <p className="px-2" >
                                    Sign up with Facebook
                                </p>
                    </button>
                </div>
                <p className="text-center" > Have an account?  <Link to="/login" > <span className="text-blue-700 font-medium" >Sign In</span> </Link> </p>
            </div>
        </section>
    )
}
