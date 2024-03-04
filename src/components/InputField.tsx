import React, { useRef } from 'react';
import './styles.css';

interface Props{
    todo: string;
    setTodo: React.Dispatch<React.SetStateAction<string>>;
    handleAdd: (e: React.FormEvent) => void; //returns nothing
}

const InputField: React.FC<Props> = ({todo,setTodo, handleAdd}:Props) => {
    const inputRef = useRef<HTMLInputElement>(null);

    return (  
    <form className='input' 
    onSubmit ={(e)=> {
        handleAdd(e);
        inputRef.current?.blur(); //undos blur on enter press
    }}
    >
        <input 
        type='input' placeholder="Enter a Task" 
        value={todo}
        onChange={
            (e)=>setTodo(e.target.value)}
        className='input_box'
        ref={inputRef}
            />
        <button className="input_submit" type="submit"> Go</button>
    </form>
    )
}
export default InputField;