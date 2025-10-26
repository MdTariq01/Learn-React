import './App.css'
import Card from './Components/card.jsx'

function App() {

  return (
    <>
     <h1 className='bg-green-400 rounded-3xl text-5xl text-black text-center mb-4'>
      Hello Tailwind + Vite + React 💨
     </h1>
     
      <Card name="Tariq" price= "0.03$" number = "#23" />
      <Card />
     </>
  )
}

export default App
