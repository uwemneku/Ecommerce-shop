import React, { useEffect,  useState } from 'react'

export default function Preloader() {
    const [marginTop, setmarginTop] = useState(true)
    useEffect(() => {
        const animating = setInterval(() => {
                    setmarginTop(!marginTop)
                }, 500);
        return () => clearInterval(animating)
    })
    return (
        <div className="absolute"> 
            <div className={`transition-all duration-500 mt-${marginTop?2:6} w-12 h-2 bg-${marginTop?"blue-400":"white"} m-2 rounded`}/>
            <div className={`transition-all delay-200 duration-500 mt-${marginTop?2:6} bg-${marginTop?"blue-400":"white"} w-8 h-2 bg-white m-2 rounded`}/>
            <div className={`transition-all delay-300 duration-500 mt-${marginTop?2:6} bg-${marginTop?"blue-400":"white"} w-4 h-2 bg-white m-2 rounded`}/>
        </div>
    )
}
