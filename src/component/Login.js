import "./login.css"
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { login } from "../services/Api"
import { setLocalStorage } from "../helper/local"

function Login() {
  const navigate = useNavigate()
  const [userName, setUserName] = useState("")
  const [password, setPassword] = useState("")
  const [isError, setIsError] = useState({
    userName: "",
    password: "",
  })
  async function LoggedIn(e) {
    const checkError = validateForm()
    e.preventDefault()
    if (checkError === true) {
      return
    }

    console.log(userName, password)

    await login({ username: userName, password: password })
      .then((res) => {
        console.log(res)
        setLocalStorage(res.data.data)
        //set in local store
        navigate("/")
        return res
      })
      .catch((e) => {
        const data = e.response.data
        alert(data.message)
      })
  }
  function validateForm() {
    let error = false
    const errorObj = { ...isError }
    errorObj["userName"] = ""
    errorObj["password"] = ""

    if (userName === "") {
      errorObj["userName"] = "Please Enter Valid Email"
      setIsError(errorObj)
      error = true
    } else if (password === "") {
      errorObj["password"] = "Please Enter Valid password"
      setIsError(errorObj)
      error = true
    }
    return error
  }

  function getUserName(e) {
    setUserName(e.target.value)
  }
  function getPassword(e) {
    setPassword(e.target.value)
  }
  return (
    <>
      <div className=" body">
        <div className="container">
          <div className="log-box">
            <form onSubmit={LoggedIn}>
              <div className="five-div add">
                <input
                  className="input"
                  onChange={getUserName}
                  type="text"
                  placeholder="UserName"
                />
                {isError.userName}
              </div>
              <div className="five-div add">
                <input
                  className="input"
                  onChange={getPassword}
                  type="password"
                  placeholder="Password"
                />
                {isError.password}
              </div>
              <div className="five-div">
                <button className="but-style" type="submit">
                  Login
                </button>
              </div>
            </form>
            <div className="five-div link">
              <span>Don't have any account?</span>
              <Link to="/SignUser">Signup</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default Login
