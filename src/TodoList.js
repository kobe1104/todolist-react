import React from 'react';
import Todo from './Todo';

export default function TodoList({todos, toggleTodo}) {
  return (
    todos.map((todo, i) => {
      return <Todo key={i} todo={todo} toggleTodo={toggleTodo}/>
    })
  )
}
