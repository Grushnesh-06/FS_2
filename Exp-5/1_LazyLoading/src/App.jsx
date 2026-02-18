import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { lazy, Suspense } from "react";

const Dash = lazy(() =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve(import("./Components/Dashboard"));
    }, 3000); // 3000ms = 3 seconds delay
  })
);


function Profile() {
  return (
    <>
      <h1>R. Grushnesh</h1>
      <h2>Full Stack Developer</h2>
      <Link to="/dashboard">Go to Dashboard</Link>
    </>
  );
}

function App() {
  return (
      <Suspense fallback={<h1 className="lazy">Loading...</h1>}>
          <Dash/>
      </Suspense>
  );
}

export default App;
