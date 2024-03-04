import React, { useState } from 'react';
import './App.css';
import InputField from "./components/InputField";
import {Todo} from "./components/model";
import TodoList from './components/TodoList';

//returns jsx.element as a function
const App: React.FC = () =>{

  const [todo, setTodo] = useState<string>("");
  const [todos,setTodos] = useState<Todo[]> ([]);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();

    if(todo){
      setTodos([...todos,{id:Date.now(),todo,isDone:false} ])
      setTodo("")
    }
   
  };
  
  console.log(todos);

  return (
    <div className="App">
    
         <span className="heading">Task Manager</span>
         <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd}/>
      {/* {todos.map(t=><li>{t.todo}</li>)} */}
      <TodoList todos={todos} setTodos={setTodos}/>

    </div>
  );
}

export default App;
