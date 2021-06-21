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
        <div className="flex-0 z-10 shadow-lg drop-shadow-lg  ">
            <header className="bg-white py-3 px-6 flex flex-row text-white justify-between">
                <Link to="/">
                    <p className="font-bold text-3xl text-blue-300 text-lg "> 
                        TRIFF SHOP
                    </p>
                </Link>
                {
                    isLoggedIn?
                                <Link to="/">
                                    <button onClick={handleLogout} className="bg-blue-400 text-white rounded py-1 px-3 mx-2 mr-5 font-medium hover:shadow-md hover:bg-blue-300 focus:outline-none active:bg-blue-700">
                                        Log out
                                    </button>
                                </Link>
                            :

                                <nav className="text-black hidden sm:block ">
                                    <Link to="/login" >
                                        <button className="bg-blue-400 text-white rounded py-1 px-3 mx-2 mr-5 font-medium hover:shadow-md hover:bg-blue-300 focus:outline-none active:bg-blue-700">
                                            Log in
                                        </button>
                                    </Link>
                                    <Link to="/signup" >
                                        <button className="bg-white rounded py-1 px-2 mx-2 font-medium shadow-md drop-shadow-md hover:shadow-md hover:bg-blue-300  focus:outline-none active:bg-blue-700">
                                            Get started
                                        </button>
                                    </Link>
                                </nav>
                }
            </header>
        </div>
    )
}
