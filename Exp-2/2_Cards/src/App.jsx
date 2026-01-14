import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() {
  return (
    <div className='container-fluid d-flex gap-5'>
      <div className="card" style={{width: '30rem'}}>
        <img src="https://cdn.prod.website-files.com/6529762860f5d2796d4eb495/65e5c126888a2daba941ccc0_What%20is%20a%20full-stack%20development%20agency-full%20stack%20company-grorapidlabs.jpeg" className="card-img-top" alt="..."/>
          <div className="card-body">
            <h5 className="card-title">Full Stack Development</h5>
            <p className="card-text">Learn Full Stack Development at our workshop, Chandigarh University from our esteemed faculty: <br></br> Mr. Akash Mahadev Patil.</p>
            <a href="#" className="btn btn-outline-success">Register</a>
          </div>
      </div>

      <div className="card" style={{width: '30rem'}}>
        <img src="https://media.geeksforgeeks.org/wp-content/cdn-uploads/20191113185616/Best-Way-To-Start-With-Competitive-Programming-GeeksforGeeks-CP-Live-Course.png" className="card-img-top" alt="..."/>
          <div className="card-body">
            <h5 className="card-title">Competitive Programming</h5>
            <p className="card-text">Learn Competitive Programming at our workshop, Chandigarh University from our esteemed faculty:<br></br> Ms. Anchita Panjeta.</p>
            <a href="#" className="btn btn-outline-success">Register</a>
          </div>
      </div>
    </div>
  )
}

export default App
