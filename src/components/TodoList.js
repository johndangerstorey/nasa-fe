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
    <ol>
      {todoList.map(todo => <li key={todo}>{todo}</li>)}
    </ol>
  </div> 
}