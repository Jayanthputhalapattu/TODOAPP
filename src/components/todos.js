import React, { useContext } from "react";
import {ListGroup,ListGroupItem} from "reactstrap"
import { FaCheckDouble } from "react-icons/fa";
import { TodoContext } from "../context/TodoContext";
import { REMOVE_TODO } from "../context/action_types";
const Todos = () =>{
    const {todos,dispatch}  = useContext(TodoContext)
  return(
  <ListGroup style={{width:400,margin:"auto"}}>
      {todos.map(todo =>(
          <ListGroupItem key={todo.id}>
                     {todo.todoString}
                     <span onClick= {()=>dispatch({
                         type : REMOVE_TODO,
                         payload : todo.id
                     })} style={{float:"right"}}>
                         <FaCheckDouble />
                     </span>
          </ListGroupItem>
      ))}
  </ListGroup>

  )
}


export default Todos