import React, { useState } from 'react'
import faker from 'faker'
import Preloader from './Preloader'

export default function Landing() {
    const [isLoading, setisLoading] = useState(true)
    const handleLoading =  () => setisLoading(false)
    return (
        <div className="flex-1  bg-blue-300 px-16 flex flex-row justify-between items-center">
            <div className="self-center">
                <p className="text-6xl text-white font-bold">All you need this
                    <br />
                    SUMMER
                </p>
            </div>
            <div className={`w-96 h-96 shadow-lg drop-shadow-lg overflow-hidden flex justify-center items-center rounded bg-gray-50`}>
                {isLoading && <Preloader />}
                <img className={`w-full transition-all duration-200 opacity-${isLoading?"0":"100"}`} 
                     onLoad={handleLoading}
                     src={faker.image.animals(240, 240)} 
                />
            </div>

        </div>
    )
}
