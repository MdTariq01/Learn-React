  import { createSlice , nanoid } from "@reduxjs/toolkit";

  const initialState = {
    todos : [{
      id : 1,
      text_value : "Hello World"
    }]
  }

  export const todoSlice = createSlice({
    name : 'todo' , // name of slice
    initialState , 
    reducers : { // reducers contains properties and function 
      // we can also pass the reference too of function 
      addTodo : (state , action) => {
        const todo = {
          id : nanoid() , 
          text_value : action.payload
        }
        state.todos.push(todo)
      } , // the function gets two parameters state and action the first stores the state like initialState and the other one is the action 
      
      removeTodo : (state , action)  => {
        state.todos = state.todos.filter((todo) => (todo.id !== action.payload))
      } ,

      updateTodo : (state , action) => {
      const data = action.payload
      const existingTodo = state.todos.find((todo) => (data.id == todo.id))
      if (existingTodo) {
        existingTodo.text_value = action.payload.text_value
      }
      } 
    }
  })
  
export const { addTodo, removeTodo, updateTodo } = todoSlice.actions

export default todoSlice.reducer