import { useCallback , useState , useEffect , useRef } from 'react';
import './App.css'

function App() {
  const [length , setLength] = useState(8)
  const [charAllowed , setcharAllowed] = useState(false)
  const [numberAllowed , setnumberAllowed] = useState(false)
  const [password , setPassword] = useState('')

  const generater_password = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numberAllowed) str+= "0123456789"
    if(charAllowed) str+= "~!@#$%^&*()_{}[]?/+=`"

    for (let i = 1; i <= length; i++) {
    let random = Math.floor((Math.random() * str.length) + 1)
    pass += str.charAt(random)
    }

    setPassword(pass)
  } , [length , charAllowed ,  numberAllowed , setPassword])

  const passwordRef = useRef(null);

  const copytoclipboard = useCallback(() => {
    passwordRef.current?.select()
    passwordRef.current?.setSelectionRange(0,100)
    window.navigator.clipboard.writeText(password)
  } , [password])

  useEffect(() => {
    generater_password()
  } , [length , numberAllowed , charAllowed , generater_password])

  return (

      <div className='w-full max-w-md mx-auto my-8 py-3 px-4 bg-gray-700 text-orange-700 shadow-md rounded-lg'>
          <h1 className='text-orange-700 text-2xl text-center my-3'>Password generator</h1>
          <div className='flex shadow rounded-lg overflow-hidden mb-4'>
        <input type="text" readOnly placeholder='Password' value = {password} className='bg-white outlint-none w-full py-1 px-3' ref={passwordRef}/>
        <button className='outline-none bg-orange-700 text-white px-2 py-2 cursor-pointer hover:bg-orange-500 hover:not-focus:bg-orange-800' onClick={copytoclipboard}>Copy</button>
      </div>

      <div className='flex gap-x-5'>

          <div className='flex items-center gap-x-1'>
            <input type="range" min={6} max={100} className='cursor-pointer' onChange={ (e) => {setLength(e.target.value)} }/>
            <label>length: {length}</label>
          </div>

          <div  className='flex items-center gap-x-1'>
            <input type="checkbox" id = "numberInput" defaultChecked = {numberAllowed}  onChange={ () => {setnumberAllowed((prev) => !prev)}}/>
            <label htmlFor="numberInput" className='cursor-pointer'>Number</label>
          </div>

          <div  className='flex items-center gap-x-1'>
            <input type="checkbox" id = "characterInput" defaultChecked = {charAllowed} onChange={ () => {onchange(setcharAllowed((prev) => !prev))}}/>
            <label htmlFor="characterInput" className='cursor-pointer'>Character</label>
          </div>

      </div>

    </div>
  )
}

export default App;