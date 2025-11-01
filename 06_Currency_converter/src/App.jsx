import { useState } from 'react'
import './App.css'
import InputBox from './Components/input'

function App() {

  return (
    <>
      <h1>Currency Converter</h1>
      <InputBox />
    </>
  )
}

export default App
// api -> https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json