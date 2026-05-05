import React from 'react'
import { useState } from 'react'

function App() {
const[todo,setTodo]=useState([])
const[list,setList]=useState("")

 const addTodo =()=>{
  if(!list) return;
  setTodo([...todo,list]);
  setList("")
}

const remove = (index)=>{
  setTodo(todo.filter((_,i)=> i !== index))
}

  return (
    <div>
        <input
        value={list}
        onChange={(e) => setList(e.target.value)}
        placeholder="Enter todo"
      />
      <button onClick={addTodo}>Add</button>

      <ul>
        {todo.map((item, index) => (
          <li key={index}>
            {item}
            <button onClick={() => remove(index)}>❌</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App
