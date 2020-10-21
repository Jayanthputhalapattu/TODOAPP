import React, { useReducer} from "react";
import {Container} from "reactstrap";


import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import  {TodoContext} from "./context/TodoContext";
import todoReducer from "./context/reducer";
import TodoForm  from "./components/todoForm";
import Todos from "./components/todos";


const App = () =>{
  const [todos,dispatch] = useReducer(todoReducer,[])
  return(
     <TodoContext.Provider value = {{todos,dispatch}}>
       <Todos />
              <TodoForm />
     </TodoContext.Provider>
  )
}

export default App
