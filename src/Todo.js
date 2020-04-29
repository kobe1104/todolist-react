import React from 'react'

export default function Todo({todo, toggleTodo}) {
  const handleToggle = function() {
    toggleTodo(todo.id);
  }
  return (
    <div>
      {todo.name}
      <input type="checkbox" checked={todo.completed} onChange={handleToggle}/>
    </div>
  )
}
