import React, { useState ,useContext} from "react";
import {Form, FormGroup ,Button, InputGroup,Input, InputGroupAddon } from "reactstrap"
import {v4} from "uuid";
import {TodoContext} from "../context/TodoContext";
import {ADD_TODO} from "../context/action_types"

const TodoForm = () =>{
   const {dispatch } = useContext(TodoContext);
   const [todoString, setTodoString] = useState("");
   const HandleSubmit = (e) =>{
         e.preventDefault();
         if (todoString===""){
            return alert("Please enter todo")
         }
         const todo = {
             todoString,
             id : v4()
         };
         dispatch({
             type : ADD_TODO,
             payload :todo
         })
         setTodoString("")
   }
    return(
        <Form onSubmit = {HandleSubmit} > 
            <FormGroup>
                <InputGroup>
                   <Input type="text" placeholder="Enter todo" id= "todo" value={todoString}
                   
                   onChange={e =>setTodoString(e.target.value)}>
                   </Input>
                   <InputGroupAddon addonType="prepend">
                       <Button color="warning">
                                Add
                       </Button>
                   </InputGroupAddon>
                </InputGroup>
            </FormGroup>
        </Form>
    )
}

export default TodoForm