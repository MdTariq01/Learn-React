
import './App.css'
import Login from './Componets/Login'
import Admin from './Componets/Admin'
import UserContextProvider from './Context/UsercontextProvider'

function App() {
  

  return (
    <UserContextProvider>
      <h1 className='text-white' >React with Chai and share is important</h1>
      <Login />
      <Admin />
    </UserContextProvider>
  )
}

export default App