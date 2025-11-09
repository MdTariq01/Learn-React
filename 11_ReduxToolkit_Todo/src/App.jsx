import './App.css'
import Todos from './components/Todos'
import AddTodo from './components/addTodo'

function App() {
  
  return (
    <>
      <h1 className='bg-red-700 text-3xl text-center m-10 p-10 text-white'>Learing Redux Toolkit</h1>
      <AddTodo/>
      <Todos />
    </>
  )
}

export default App
