import { useState } from 'react'
import './App.css'

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [uid, setUid] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className='app'>
      <h1>Simple Form</h1>
      <p className='by'>by Grushnesh</p>

      <form onSubmit={handleSubmit}>
        <input type="text"
          placeholder='Enter Name' 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
          required 
        />

        <input type="text"
          placeholder='Enter Email' 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          required 
        />

        <input type="text"
          placeholder='Enter UID' 
          value={uid} 
          onChange={(e) => setUid(e.target.value)} 
          required 
        />

        <button type='submit'>Submit</button>
      </form>

      {submitted && (
        <div className='output'>
          <h3>Submitted Data</h3>
          <p>Name: {name}</p>
          <p>Email: {email}</p>
          <p>UID: {uid}</p>
        </div>
      )}
    </div>
  );
}

export default App;
