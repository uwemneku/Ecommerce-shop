import React from 'react'
import { FcGoogle } from 'react-icons/fc'
import { auth, facebookProvider, googleProvider } from '../firebaseconfig'
import {useDispatch} from 'react-redux'
import {login} from '../actions'
import PropTypes from 'prop-types';
import { FaFacebook } from 'react-icons/fa'



export default function SignInButton({authType}) {

    const getDetails = () => {
        switch (authType.toLowerCase()) {
            case "google":
                return {provider:googleProvider, icon:<FcGoogle/>, text:"Google"}
                break;

            case "facebook":
                return {provider:facebookProvider, icon:<FaFacebook className="text-blue-600" />, text:"Facebook"}
                break;
        
            default:
                break;
        }
    }
    const {provider, icon, text} = getDetails()
    const dispact = useDispatch()
    const handleClick =()=>{
        auth.signInWithPopup(provider)
        .then(e => dispact(login()))
        .catch(alert)
    }
    return (
            <button onClick={handleClick} className="my-2 bg-white rounded shadow-md drop-shadow-md p-2 font-medium flex items-center justify-center" >
                                {icon}
                                <p className="px-2" >
                                    Sign In with {text}
                                </p>
            </button>
    )
}

SignInButton.prototype = {
    authType: PropTypes.string
}