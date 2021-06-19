import React from 'react'

export default function Header() {
    return (
        <div className="flex-0 z-10 shadow-lg drop-shadow-lg  ">
            <header className="bg-white py-3 px-6 flex flex-row text-white justify-between">
                <p className="font-bold text-3xl text-blue-300 text-lg "> 
                    TRIFF SHOP
                </p>
                <div className="text-black hidden sm:block ">
                    <button className="bg-blue-400 text-white rounded py-1 px-3 mx-2 mr-5 font-medium hover:shadow-md hover:bg-blue-300 focus:outline-none active:bg-blue-700">
                        Log in
                    </button>
                    <button className="bg-white rounded py-1 px-2 mx-2 font-medium shadow-md drop-shadow-md hover:shadow-md hover:bg-blue-300  focus:outline-none active:bg-blue-700">
                        Get started
                    </button>
                </div>
            </header>
        </div>
    )
}
