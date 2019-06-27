import React, { useRef, useState } from "react";
export default function(){
  const input = useRef('')
  const [todoList, setTodoList] = useState([])
  function handleClick() {
    setTodoList([...todoList, input.current.value])
    input.current.value = ''
  }
  return <div>
    <input ref={input} />
    <button onClick={handleClick}>create</button>
    {todoList.map(todo => <div key={todo}>{todo}</div>)}
  </div> 
}