import { Button, FormControl, Input, InputLabel } from "@material-ui/core";
import React, { useState } from "react";
import "./styles.css";

function App() {
  const [todoValue, setTodoValue] = useState("");
  const [todos, setTodos] = useState([]);

  const addTodo = (e) => {
    e.preventDefault(); //will prevent refreshing.
    setTodos([...todos, todoValue]);
    setTodoValue("");
  };

  return (
    <div className='App'>
      <h2>Welcome to Programing</h2>
      <form>
        {/* <input
          type='text'
          value={todoValue}
          onChange={(e) => setTodoValue(e.target.value)}
        /> */}
        <FormControl>
          <InputLabel htmlFor='my-input'>Email address</InputLabel>
          <Input
            id='my-input'
            type='text'
            value={todoValue}
            onChange={(e) => setTodoValue(e.target.value)}
          />
        </FormControl>
        <Button
          type='submit'
          disabled={todoValue ? false : true}
          onClick={addTodo}
          variant='contained'
          color='primary'>
          add Todo
        </Button>
        {/* <button  >
         
        </button> */}
      </form>

      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
    </div>
  );
}
export default App;
