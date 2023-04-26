import "./navbar.css"
import profile from "../images/profilepic.jpg"

import { Link } from "react-router-dom"

function Navbar() {
  return (
    <>
      <div className="nav">
        <div className="nav-left">
          <i className="nav-icon fa-brands fa-square-facebook"></i>
          <i className=" nav-icon fa-brands fa-square-twitter"></i>
          <i className=" nav-icon fa-brands fa-square-instagram"></i>
        </div>
        <div className="nav-center">
          <ul className="nav-list">
            <li className="list-item">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="list-item">
              <Link className="nav-link" to="/about">
                About
              </Link>
            </li>
            <li className="list-item">
              <Link className="nav-link" to="/contact">
                Contact
              </Link>
            </li>
            <li className="list-item">
              <Link className="nav-link" to="/login">
                Login
              </Link>
            </li>
          </ul>
        </div>
        <div className="nav-right">
          <Link to="/profile">
            <img className="nav-img" src={profile} alt="2" />
          </Link>
          <i className=" nav-search fa-solid fa-magnifying-glass"></i>
        </div>
      </div>
    </>
  )
}
export default Navbar
