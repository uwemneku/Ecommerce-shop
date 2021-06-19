import React, { useState } from 'react'
import faker from 'faker'
import Preloader from './Preloader'

export default function Landing() {
    const [isLoading, setisLoading] = useState(true)
    const handleLoading =  () => setisLoading(false)
    return (
        <div className="flex-1  bg-blue-300 py-16 px-16 flex flex-col-reverse sm:flex-row justify-between items-center">
           <div className="text-black block  sm:hidden ">
                    <button className="bg-white rounded py-1 px-3 mx-2 mr-5 font-medium shadow-md drop-shadow-md hover:shadow-md hover:bg-blue-300 focus:outline-none active:bg-blue-700">
                        Log in
                    </button>
                    <button className="bg-white rounded py-1 px-2 mx-2 font-medium shadow-md drop-shadow-md hover:shadow-md hover:bg-blue-300  focus:outline-none active:bg-blue-700">
                        Get started
                    </button>
            </div>
            <div className=" ">
                <p className=" text-3xl text-center sm:text-4xl md:text-6xl text-white font-bold">All you need this
                    <br />
                    SUMMER
                </p>
                
            </div>
            <div className={`w-80 sm:w-96 sm:h-96 flex-grow-0 flex-shrink-0  shadow-lg drop-shadow-lg overflow-hidden flex justify-center items-center rounded bg-gray-50`}>
                {isLoading && <Preloader />}
                <img className={`w-full transition-all duration-200 opacity-${isLoading?"0":"100"}`} 
                     onLoad={handleLoading}
                     src={faker.image.animals(384, 384)} 
                />
            </div>
            

        </div>
    )
}
