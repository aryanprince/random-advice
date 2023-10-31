import axios from 'axios'
import { useEffect, useState } from 'react'
import { GoLightBulb } from 'react-icons/go'

function App() {
  type Advice = {
    slip: {
      advice: string
      id: number
    }
  }

  const [advice, setAdvice] = useState('')

  const fetchAdvice = async () => {
    const { data: latestAdvice } = await axios.get<Advice>(
      'https://api.adviceslip.com/advice'
    )
    setAdvice(latestAdvice.slip.advice)
  }

  useEffect(() => {
    fetchAdvice()
  }, [])

  if (!advice) return null

  return (
    <div className="flex h-screen justify-center items-center bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 background-animate">
      <div className="p-8 flex-col gap-4 flex bg-white bg-opacity-20 backdrop-blur-lg rounded-lg drop-shadow-xl w-[40rem] font-sans font-medium text-lg">
        <div className="flex items-center">
          <GoLightBulb className="mr-2" />
          <p className="text-neutral-800 text-md">Random Advice</p>
        </div>
        <p className="text-neutral-800 text-2xl">{advice}</p>
      </div>
    </div>
  )
}

export default App
