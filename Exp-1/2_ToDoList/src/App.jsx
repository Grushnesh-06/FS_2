import { useState } from 'react'
import './App.css'

function App() {
  const [task, setTask] = useState("")
  const [tasks, setTasks] = useState([])
  const addTask = () => {
    if (task.trim() === "") return
    setTasks([...tasks, task])
    setTask("")
  };
  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index))
  }


  return (
    <div>
      <h1>To Do List</h1>
      <p className='by'>by Grushnesh</p>
      <input value={task} onChange={(e) => setTask(e.target.value)} />
      <button className='add' onClick={addTask}>Add Item</button>
      <ul>
        {tasks.map((task, index) => ( 
          <li key={index} className="todo-item">
            {task}
            <button className="cross" onClick={() => deleteTask(index)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App
