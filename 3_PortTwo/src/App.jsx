import { BrowserRouter, Routes, Route, Link, Navigate } from 'react-router-dom';

function Profile() {
  return (
    <>
      <div className="marquee">
        <h1 className="scroll-text">Welcome to My Profile</h1>
      </div>

      <div className="center-container">
        <h1>R. Grushnesh</h1>
        <h2>Full Stack Developer</h2>
      </div>
    </>
  );
}

function Dashboard() {
  return (
    <div className="center-container">
      <h1>Skills</h1>
      <h2>HTML</h2>
      <h2>CSS</h2>
      <h2>JavaScript</h2>
      <h2>React.js</h2>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <div className="app-container">

        <Routes>
          {/* default route */}
          <Route path="/" element={<Navigate to="/profile" />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>

        <div className="buttons">
          <Link to="/profile"><button>Go To Profile</button></Link>
          <Link to="/dashboard"><button>Go To Dashboard</button></Link>
        </div>

      </div>
    </BrowserRouter>
  );
}

export default App;
