import React,{useState} from 'react';
import TodoList from './TodoList'

function App() {
	const [todos, setTodos] = useState(['Todo Task1', 'Todo Task2'])
	return (
	{/*This is an empty element or a fragment and is used to return multiple*/}
	<>
		<TodoList todos={todos}/>
		<input type="text" />
	  	<button>Add Todo</button>
	  	<button>Clear Completed Tasks</button>
	  	<div>O tasks left</div>

	</>
  )
}
export default App;
