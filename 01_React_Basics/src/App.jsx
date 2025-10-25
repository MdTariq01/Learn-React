import './App.css'
import Item from './Componets/item'

export default function App() {
  return (
    <>
      <h1>Hello guys | Mohammad Tariq learning React 🚀</h1>
      <button>
        Click me
      </button>
      <p>
        hello world
      </p>
      <Item />
      <h2>Today we learned that the function build should always start with a capital letter</h2>
      <h3>The js injection happens manually in vite + react but in react default it gets already connected not a single line of code written there </h3>
      <h1>Day 3</h1>
      <p>so we build custom react for ourself and used it and learned a few things so here goes-</p>
      <p>1) we can't declare function in main file</p>
      <p>2) we can declare a function and but we use it as {} inside the paraenthese much like backticks `${}`</p>
      <p>3) we can't use if else or any manipulation inside the paranthesis{} because it is like a object and we can't do manipulation in object we must do this outside</p>
      <p>4) just like we created custom react react also do convert the jsx to type and all but in different syntax</p>
      <p>5) react use babel to convert jsx to js</p>
      <p>6) react use createElement to convert jsx to js</p>
      <p>7) react use render to render the element on the screen</p>

    </>
  )
}
