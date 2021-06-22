import React, { useState } from 'react'
import faker from 'faker'
import Preloader from './Preloader'
import {Link} from "react-router-dom"


export default function Landing() {
    const [image_isLoaading, setimage_isLoaading] = useState(true)
    const handleLoading =  () => {setimage_isLoaading(false)}
    return (
        <section className=" flex-1  bg-blue-300 py-20 px-16 flex flex-col-reverse sm:flex-row justify-between items-center">
           <div className="w-screen flex justify-center text-black sm:hidden ">
               <Link to="/login">
                    <Button text="Log in" />
               </Link>
               <Link to="/signup">
                    <Button text="Get started" />
               </Link>   
            </div>
            <div className=" ">
                <p className=" text-3xl text-center sm:text-4xl md:text-6xl text-white font-bold">All you need this
                    <br />
                    SUMMER
                </p>
                
            </div>
            <div className={`w-80 sm:w-96 sm:h-96 flex-grow-0 flex-shrink-0  shadow-lg drop-shadow-lg overflow-hidden flex justify-center items-center rounded bg-gray-50`}>
                {image_isLoaading && <Preloader />}
                <img className={`w-full transition-all duration-200 opacity-${image_isLoaading?"0":"100"}`} 
                     onLoad={handleLoading}
                     src={faker.image.animals(384, 384)} 
                     alt="A dog"
                />
            </div>
            

        </section>
    )
}

const Button = ({text}) => (
    <button  className="bg-white rounded py-3 px-5 mx-2 font-medium shadow-md drop-shadow-md hover:shadow-md hover:bg-blue-300  focus:outline-none active:bg-blue-700">
        {text}
    </button>
)