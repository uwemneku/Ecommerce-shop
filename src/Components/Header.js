import React from 'react'
import {Link} from "react-router-dom"
import {useSelector, useDispatch} from "react-redux"
import {logout} from '../actions'
import {auth} from '../firebaseconfig'

export default function Header() {
    const isLoggedIn = useSelector(state => state.isLoggedIn) 
    const dispact = useDispatch()
    const handleLogout = () => {
        auth.signOut().then(e => dispact(logout()))
    }
    return (
            <header className="flex-0 z-10 shadow-lg drop-shadow-lg bg-white py-3 px-6 flex flex-row text-white justify-between">
                <Link to="/">
                    <p className="font-bold text-blue-300 text-3xl "> 
                        TRIFF SHOP
                    </p>
                </Link>
                {
                    isLoggedIn?
                                <Link to="/" onClick={handleLogout}>
                                    <Button text="Log out" />
                                </Link>
                            :

                                <nav className="text-black hidden sm:block ">
                                    <Link to="/login" >
                                        <Button text="Log in" />
                                    </Link>
                                    <Link to="/signup" >
                                        <Button text="Get started" />
                                    </Link>
                                </nav>
                }
            </header>
    )
}


const Button = ({text}) => (
    <button  className="bg-blue-400 text-white rounded py-1 px-3 mx-2 mr-5 font-medium hover:shadow-md hover:bg-blue-300 focus:outline-none active:bg-blue-700">
        {text}
    </button>
)
