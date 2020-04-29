import React, {useState, useRef, useEffect} from 'react';
import TodoList from './TodoList';
import { v4 as uuidv4 } from 'uuid';

const LOCAL_STOAGE_KEY = 'todoApp.todos';
function App() {
  const [todos, setTodos] = useState([
    // {id: 1, name: 'todo 1', completed: true},
    // {id: 2, name: 'todo 2', completed: false}
  ])
  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STOAGE_KEY));
    if (storedTodos) setTodos(storedTodos);
  },[])
  useEffect(() => {
    localStorage.setItem(LOCAL_STOAGE_KEY, JSON.stringify(todos))
  }, [todos])
  const todoNameRef = useRef();
  const handleAddTodo = function(e) {
    const name = todoNameRef.current.value;
    console.log(name);
    if (name === '') {
      return;
    }
    setTodos(prevTodos => {
      return [...prevTodos, {id: uuidv4(), name: name, completed: false}];
    })
    todoNameRef.current.value = null;
  };
  const toggleTodo = function(id) {
    let todoCopy = todos.slice();
    for(let i=0;i<todoCopy.length;i++) {
      if (todoCopy[i].id === id) {
        todoCopy[i].completed = !todoCopy[i].completed;
      }
    };
    setTodos(todoCopy);
  };
  const clearCompleted = function() {
    let incompleted = todos.filter(todo => !todo.completed);
    setTodos(incompleted);
  }
  return (
    <>
      <TodoList todos={todos} toggleTodo={toggleTodo}/>
      <input ref={todoNameRef} type="text"></input>
      <button onClick={handleAddTodo}>add todo</button>
      <button onClick={clearCompleted}>clear completed todos</button>
      <div>{todos.filter(todo => !todo.completed).length} left to do</div>
    </>
  );
}

export default App;
