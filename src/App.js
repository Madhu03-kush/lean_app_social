import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css"
import Navbar from "./header/Navbar"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Login from "./component/Login"
import Home from "./pages/Home"
import About from "./pages/About"
import Contact from "./pages/Contact"
import SignUser from "./component/SignUser"
import Profile from "./component/Profile"

import EditProfile from "./component/EditProfile"
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signUser" element={<SignUser />} />
          <Route path="/profile/" element={<Profile />} />
          <Route path="/EditProfile" element={<EditProfile />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
