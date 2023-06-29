import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import { useState } from "react";
import About from "./pages/About";

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

return(
  <div>
      <div>
        <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>
      </div>

    <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/dashboard" element={<Dashboard  isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>} />
        <Route path="/login" element={<Login isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} /> } />
        <Route path="/signup"  element={<Signup isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>} />
        <Route path="/about" element={<About isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>} />
    </Routes>
  </div>
)
}

export default App;
