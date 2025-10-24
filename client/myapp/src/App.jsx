
import Register from './Pages/Register'
import Login from './Pages/Login';
import Home from './Pages/Home'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {

  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </Router>
        
    </>
  )
}

export default App
