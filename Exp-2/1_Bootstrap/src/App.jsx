import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  return (
    <div className="container fluid">
      <h2 className="text-center">Learning bootstrap</h2>
      <div className='card text-bg-dark mb-3'>
        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label">Name</label>
          <input type="name" class="form-control" id="exampleFormControlInput1" placeholder="Enter your Name"/>
        </div>
        <div class="mb-3">
          <label for="exampleFormControlInput2" class="form-label">Email address</label>
          <input type="email" class="form-control" id="exampleFormControlInput2" placeholder="name@example.com" />
        </div>
        <button class="btn btn-outline-primary" type="submit">Submit</button>
      </div>
    </div>
  )
}

export default App
