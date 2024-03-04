import React, { useEffect, useRef, useState } from 'react';
import "./styles.css";
import { Todo } from './model';
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { IoCheckmarkDoneCircleOutline } from "react-icons/io5";

interface Props{
    todo:Todo;
    todos: Todo[];
    setTodos:React.Dispatch<React.SetStateAction<Todo[]>>

}

const SingleTodo = ({todo,todos,setTodos} :Props ) => {
    const [edit, setEdit] = useState<boolean>(false)
    const [editTodo, setEditTodo] = useState<string>(todo.todo);

    const handleDone=(id:number) =>{
        setTodos(
            todos.map((todo)=>
            todo.id===id ? {...todo,isDone:!todo.isDone}:todo  
        )
        );
    };

    const handleDelete = (id:number) => {
        setTodos(todos.filter((todo)=>todo.id !== id));
    };

    const handleEdit = (e: React.FormEvent, id:number)=>{
        e.preventDefault();

        setTodos(todos.map((todo)=>( 
            todo.id===id?{...todo,todo:editTodo}:todo //if it doesnt match it is going to return to do
        )
        ));
        setEdit(false);
    };




    const inputRef = useRef<HTMLInputElement>(null)

        //whenever edit changes, it will use this...
        useEffect(()=> {
            inputRef.current?.focus();
        }, [edit])

    return ( 
    <form className="todos_single" onSubmit={(e)=>handleEdit(e,todo.id)}>
{
    edit?(
        <input value={editTodo} ref={inputRef} onChange={(e)=>setEditTodo(e.target.value)} className="todos_single_text" />
    ) : todo.isDone? (
            <s className="todos_single_text">{todo.todo}</s>
        ):(
            <span className="todos_single_text">{todo.todo}</span>
        )}

        <div>
            <span className="icon">
            <FaEdit onClick={()=>{if(!edit && !todo.isDone)
            setEdit(!edit)}  }/>
            </span>
            <span className="icon">
            <MdDelete onClick={()=>handleDelete(todo.id)} />
                </span>
            <span className="icon">
            <IoCheckmarkDoneCircleOutline onClick={()=>handleDone(todo.id)}>
            </IoCheckmarkDoneCircleOutline>
            </span>
        </div>
       </form>
       
    )
}

export default SingleTodo;