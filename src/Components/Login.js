import React, { useEffect, useRef, useState, } from 'react'
import { FcGoogle } from 'react-icons/fc';
import { FaEye, FaEyeSlash, FaFacebook } from 'react-icons/fa';
import { VscLoading } from 'react-icons/vsc'
import {Link} from "react-router-dom"
import {auth} from '../firebaseconfig'
import {login} from '../actions'
import { useDispatch } from 'react-redux';



export default function Login() {
    const passwordRef = useRef("")
    const emailRef = useRef("")
    const formRef = useRef("")
    const dispact = useDispatch()
    const [opacity, setopacity] = useState(0)
    const [loading, setLoading] = useState(false)
    const [showPassword, setshowPassword] = useState(false)
    const handleShowPassword = () => {
        setshowPassword(!showPassword)
    }
    const showError = (node) => {
        node.classList.add("inputError")
        setTimeout(() => {
            node.classList.remove("inputError")
        }, 2000);
    }

    const handleSignIn = (e) => {
        e.preventDefault()
        formRef.current.reportValidity()
        if(emailRef.current.value === "") showError(emailRef.current)
        if(passwordRef.current.value === "") showError(passwordRef.current)

        if(formRef.current.checkValidity()){
            const email = emailRef.current.value
            const password = passwordRef.current.value
            setLoading(true)
            auth.signInWithEmailAndPassword(email, password)
            .then(e => dispact(login()))
            .catch(error => setLoading(false))
        }
    }
    useEffect(() => {
        setopacity(1)
    }, [])
    return (
        <section className={`flex-1 bg-blue-500 flex justify-center items-start py-20 opacity-${opacity} transition-opacity duration-300 `}>
            <div className="bg-white rounded w-full sm:w-96 p-5 " >
                <p className="text-center font-bold text-gray-600 text-2xl" >Welcome Back</p>
                <p className="text-center text-md text-gray-500" >Enter your credentials to acess your account</p>
                
                <form ref={formRef} className="mt-6 flex flex-col" >
                            <input ref={emailRef} placeholder="Enter your email" className="focus:outline-none m-3 shadow-sm rounded drop-shadow-sm p-2" type="email"  />
                            <div className="flex items-center">
                                <input ref={passwordRef} placeholder="Enter your password" className="focus:outline-none m-3 shadow-sm rounded drop-shadow-sm p-2 flex-1" type={showPassword?"text":"password"}  />
                                <div className="flex-0 py-5">
                                     { showPassword ? <FaEye onClick={handleShowPassword}  /> : <FaEyeSlash onClick={handleShowPassword}/>}
                                </div>
                            </div>
                            <button onClick={handleSignIn} className="bg-blue-600 p-1 rounded text-white flex justify-center items-center" >
                                {loading ? <VscLoading className='text-lg animate-spin' /> : "Sign In" }
                            </button>
                </form>
                <div className="flex flex-col mt-2">
                    <button className="my-2 bg-white rounded shadow-md drop-shadow-md p-2 font-medium flex items-center justify-center" >
                                <FcGoogle/>
                                <p className="px-2" >
                                    Sign In with Google
                                </p>
                    </button>
                    <button className=" my-2 bg-white rounded shadow-md drop-shadow-md p-2 font-medium flex items-center justify-center" >
                                <FaFacebook className="text-blue-600" />
                                <p className="px-2" >
                                    Sign In with Facebook
                                </p>
                    </button>
                </div>
                <p className="text-center" > Don't have an account?  <Link to="/signup" > <span className="text-blue-700 font-medium" >Sign up</span> </Link> </p>
            </div>
        </section>
    )
}
