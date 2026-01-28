import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';

function Profile(){
  return(
    <>
      <h1>R. Grushnesh</h1>
      <h2>Full Stack Developer</h2>
    </>
  )
}

function Dashboard(){
  return(
    <>
      <h1>Skills</h1>
      <h2>HTML</h2>
      <h2>CSS</h2>
      <h2>JavaScript</h2>
      <h2>React.js</h2>
    </>
  )
}

function App(){
  return(
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/profile' element={<Profile/>} />
        <Route path='/dashboard' element={<Dashboard/>}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App