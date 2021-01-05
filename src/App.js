import { Button, FormControl, Input, InputLabel } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import "./styles.css";
import Todo from "./Component/Todo";
import db from "./firebase";
import firebase from "firebase";

function App() {
  const [todoValue, setTodoValue] = useState("");
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    db.collection("todos")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapShot) => {
        setTodos(snapShot.docs.map((doc) => doc.data().todo));
      });
  }, []);
  // 🤦‍♀️🤷‍♀️🤳
  const addTodo = (e) => {
    e.preventDefault(); //will prevent refreshing.
    db.collection("todos").add({
      todo: todoValue,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setTodoValue("");
  };

  return (
    <div className='App'>
      <h2>Welcome to Programing</h2>

      <FormControl>
        <InputLabel htmlFor='my-input'>Todo </InputLabel>
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

      <ul>
        {todos.map((todo, index) => (
          <Todo key={index} todoprop={todo} />
        ))}
      </ul>
    </div>
  );
}
export default App;
