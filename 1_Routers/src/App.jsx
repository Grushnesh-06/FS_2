import { BrowserRouter, Routes, Route, Link} from 'react-router-dom';

function Home() {
  return(
    <>
      <h1>Home Page</h1>
      <Link to="/contact">Go to Contact</Link>
      <br></br>
      <Link to="/about">About</Link>
    </>
  )
}

function Contact() {
  return(
    <>
      <h1>Contact Page</h1>
      <Link to="/">Go to Home</Link>
    </>
  )
}

function About() {
  return(
    <>
      <h1>About</h1>
      <Link to="/">Go to Home</Link>
    </>
  )
}

function App(){
  return(
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/about' element={<About/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
