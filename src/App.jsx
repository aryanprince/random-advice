import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { GoLightBulb } from 'react-icons/go'

import './App.css'

function App() {
    const [advice, setAdvice] = useState("")

    useEffect(() => {
        axios.get('https://api.adviceslip.com/advice').then((res) => {
            setAdvice(res.data.slip.advice)
        })
    }, [])

    if (!advice) return null

    return (
        <div className="flex h-screen justify-center items-center bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 background-animate">
            <div className="p-10 m-10 bg-white bg-opacity-20 backdrop-blur-lg rounded-lg drop-shadow-xl w-[40rem] font-sans font-medium text-lg">
                <div className="flex items-center pb-4">
                    <GoLightBulb className="mr-2" />
                    <p className=" text-[#242424] text-md">Random Advice</p>
                </div>
                <p className="text-[#242424] text-2xl">{advice}</p>
            </div>
        </div>
    )
}

export default App
