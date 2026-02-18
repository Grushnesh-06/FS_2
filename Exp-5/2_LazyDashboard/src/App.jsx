import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  Navigate,
  useLocation,
} from "react-router-dom";
import { lazy, Suspense } from "react";

const delayImport = (component) =>
  new Promise((resolve) => {
    setTimeout(() => resolve(component()), 1500);
  });

const Profile = lazy(() => delayImport(() => import("./pages/Profile")));
const Contact = lazy(() => delayImport(() => import("./pages/Contact")));
const About = lazy(() => delayImport(() => import("./pages/About")));

function AppWrapper() {
  return (
    <BrowserRouter>
      <MainApp />
    </BrowserRouter>
  );
}

function MainApp() {
  const location = useLocation();

  return (
    <div className="app-container">
      <Suspense
        fallback={<h2 style={{ textAlign: "center" }}>Loading Page...</h2>}
        key={location.pathname}
      >
        <Routes location={location}>
          <Route path="/" element={<Navigate to="/profile" />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Suspense>

      <div className="buttons">
        <Link to="/profile"><button>Go To Profile</button></Link>
        <Link to="/contact"><button>Contact Me</button></Link>
        <Link to="/about"><button>About Me</button></Link>
      </div>
    </div>
  );
}

export default AppWrapper;
