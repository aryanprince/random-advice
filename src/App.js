import axios from 'axios'
import React, { useEffect, useState } from 'react'

import './App.css'

function App() {
    const [advice, setAdvice] = useState({})

    useEffect(() => {
        axios.get('https://api.adviceslip.com/advice').then((res) => {
            setAdvice(res.data.slip)
        })
    }, [])

    if (!advice) return null

    return (
        <div className="flex h-screen justify-center items-center bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 background-animate">
            <div className="p-10 m-10 bg-white bg-opacity-20 backdrop-blur-lg rounded-lg drop-shadow-lg w-[40rem] font-sans font-medium text-lg">
                <p className="pb-5 text-[#242424] text-md">
                    Random Slips of Advice
                    {/* <span className="pl-1 text-sm italic">
                        from <a href="https://api.adviceslip.com/">AdviceSlip.com</a>
                    </span> */}
                </p>
                {/* <p className="text-[#242424] text-2xl">{advice.advice}</p> */}
                <p className="text-[#242424] text-2xl">Plant a tree</p>
            </div>
        </div>
    )
}

export default App
