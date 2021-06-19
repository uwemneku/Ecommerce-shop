import React, { useEffect, useState } from 'react'
import { FcGoogle } from 'react-icons/fc';
import { FaFacebook } from 'react-icons/fa';
import {Link} from "react-router-dom"


export default function Login() {
    const [opacity, setopacity] = useState(0)
    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")
    useEffect(() => {
        setopacity(1)
    }, [])
    return (
        <section className={`flex-1 bg-blue-500 flex justify-center items-start py-20 opacity-${opacity} transition-opacity duration-300 `}>
            <div className="bg-white rounded w-full sm:w-96 p-5 " >
                <p className="text-center font-bold text-gray-600 text-2xl" >Welcome Back</p>
                <p className="text-center text-md text-gray-500" >Enter your credentials to acess your account</p>
                
                <form className="mt-6 flex flex-col" >
                            <input placeholder="Enter your email" className="focus:outline-none m-3 shadow-sm rounded drop-shadow-sm p-2" type="email"  />
                            <input placeholder="Enter your password" className="focus:outline-none m-3 shadow-sm rounded drop-shadow-sm p-2" type="password"  />
                            <button className="bg-blue-600 p-1 rounded text-white" >
                                Sign In
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
                <p className="text-center" > Don't have an account?  <Link to="/signup" > <a className="text-blue-700 font-medium" >Sign up</a> </Link> </p>
            </div>
        </section>
    )
}
