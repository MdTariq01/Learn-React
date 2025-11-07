import { createContext , useContext } from "react";

export const TodoContext = createContext({
  todos :[ {
    id: 1 , 
    Todo_task : "todo-msg" ,
    Completed : false
  }] , 
  addTodo : (Todo_task) => {} , 
  updateTodo : ( id , Todo_task) => {} , 
  deleteTodo : (id) => {} ,
  toggleTodo : (id) => {}
})

export const TodoProvider = TodoContext.Provider

export const useTodo = () => {
  return useContext(TodoContext)
}
