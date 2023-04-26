import "./signup.css"
import { useState } from "react"

import { signUp } from "../services/Api"
import { useNavigate } from "react-router-dom"

function SignUser() {
  const navigate = useNavigate()
  const [userName, setUserName] = useState("")
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [mobile, setMobile] = useState("")
  const [password, setPassword] = useState("")
  const [valid, setValid] = useState({
    userName: "",
    name: "",
    email: "",
    mobile: "",
    password: "",
  })
  // function reset(){
  //   setUserName(null);
  //   setName(null);
  //   setEmail(null);
  //   setMobile(null);
  //   setPassword(null);
  //   return;
  // }
  async function createAccount(e) {
    const checkErr = validation()
    e.preventDefault()
    if (checkErr === true) {
      return
    }
    const data = {
      username: userName,
      full_name: name,
      email: email,
      mobile: mobile,
      password: password,
    }
    let result = await signUp(data)
      .then((res) => {
        console.log(res)
        navigate("/login")
      })
      .catch((e) => {
        const data = e.response.data
        alert(data.message)
      })

    console.log(result, "result")
  }

  function validation() {
    let error = false
    const errObj = { ...valid }
    errObj["name"] = ""
    errObj["userName"] = ""
    errObj["password"] = ""
    errObj["mobile"] = ""
    errObj["email"] = ""

    if (userName === "") {
      errObj["userName"] = "please enter  valid Username"
      setValid(errObj)
      debugger
      error = true
    } else if (name === "") {
      errObj["name"] = "please enter  valid Name"
      setValid(errObj)
      error = true
    } else if (email === "" || checkEmail(email) === false) {
      errObj["email"] = "please enter  valid Email"
      setValid(errObj)
      error = true
    } else if (mobile === "" || String(mobile).length !== 10) {
      errObj["mobile"] = "please enter  valid contact number"
      setValid(errObj)
      error = true
    } else if (password === "") {
      errObj["password"] = "please enter  strong password"
      setValid(errObj)
      error = true
    } else {
      setValid(errObj)
    }

    return error
  }

  const checkEmail = (email) => {
    var sign = /\S+@\S+\.\S+/
    const isSign = sign.test(email) // true or false test function will return
    return isSign
  }

  return (
    <>
      <div className=" body-signUp">
        <div className="signUp-container">
          <div className="sign-box">
            <form onSubmit={createAccount}>
              <div className=" seven-sign add">
                <input
                  onChange={(e) => setUserName(e.target.value)}
                  className="input"
                  type="text"
                  placeholder="Username"
                />
                {valid.userName}
              </div>
              <div className=" seven-sign add">
                <input
                  onChange={(e) => setName(e.target.value)}
                  className="input"
                  type="text"
                  placeholder="Name"
                />
                {valid.name}
              </div>

              <div className=" seven-sign add">
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  className="input"
                  type="text"
                  placeholder="Email"
                />
                {valid.email}
              </div>

              <div className=" seven-sign add">
                <input
                  onChange={(e) => setMobile(e.target.value)}
                  className="input"
                  type="number"
                  placeholder="mobile"
                />
                {valid.mobile}
              </div>
              <div className=" seven-sign add">
                <input
                  onChange={(e) => setPassword(e.target.value)}
                  className="input"
                  type="password"
                  placeholder="Password"
                />
                {valid.password}
              </div>
              <div className=" seven-sign">
                <button type="submit" className="but-style">
                  SignUp
                </button>
              </div>
            </form>

            <div className=" seven-sign ">
              <span>Already have an account? </span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default SignUser
