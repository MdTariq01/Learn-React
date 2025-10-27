import { useState } from 'react'
import './App.css'

function App() {
  const [color , setColor] = useState('olive')
  return (
    <div className='w-full h-screen flex flex-col justify-center items-center' style={{
      backgroundColor: color
    }}>
    <div>
      <h1 className='text-white text-2xl font-bold '>Background Changer</h1>
    </div>
    
    <div className='fixed flex flex-wrap justify-center bottom-14 inset-x-0 px-2'>
          <div className='flex flex-wrap justify-center bg-white px-3 py-2 rounded-4xl'>

            <button className='bg-red-800 text-white px-4 py-1 rounded-4xl align-text mx-1 cursor-pointer' 
              onClick={() => setColor("red")}>red</button>

            <button className='bg-green-700 text-white px-4 py-1 rounded-4xl align-text mx-1 cursor-pointer'
              onClick={() => setColor("green")}>green</button>
              
            <button className='bg-black text-white px-4 py-1 rounded-4xl align-text mx-1 cursor-pointer'
              onClick={() => setColor("black")} >black</button>

            <button className='bg-purple-700 text-white px-4 py-1 rounded-4xl align-text mx-1 cursor-pointer'
              onClick={() => setColor("purple")}>purple</button>

            <button className='bg-blue-700 text-white px-4 py-1 rounded-4xl align-text mx-1 cursor-pointer'
              onClick={() => setColor("blue")}>blue</button>

            <button className='bg-orange-500 text-white px-4 py-1 rounded-4xl align-text mx-1 cursor-pointer'
              onClick={() => setColor("orange")}>orange</button>

          </div>
    </div>
    </div>
  )
}

export default App
