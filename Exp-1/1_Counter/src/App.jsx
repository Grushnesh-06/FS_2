import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return ( 
    <div>
      <h1>Counter</h1>
      <p className='by'>by Grushnesh</p>
      <p className='cnt'>Count: {count}</p>
      <button className="plus" onClick={() => setCount(count+1)}>count + 1</button>
      <button className="minus" onClick={() => setCount(count-1)}>count - 1</button>
    </div>
    
  )
}

export default App
