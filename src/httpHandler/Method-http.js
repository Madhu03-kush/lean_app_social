import axios from "axios"
import { getLocalStorage } from "../helper/local"
const BASE_URL = "http://localhost:3001/api/v1/"

function setHeaders() {
  const user = getLocalStorage()
  let headers = {
    headers: {
      "Content-Type": "application/json",
    },
  }
  if (user) {
    const { token = "" } = user
    if (token) {
      headers.headers["authorization"] = token
    }
  }
  return headers
}
function get(path) {
  const headers = setHeaders()
  return axios.get(BASE_URL + path, headers)
}

async function post(path, body) {
  const headers = setHeaders()
  return axios.post(BASE_URL + path, JSON.stringify(body), headers)
}

function put(path, body) {
  return axios.put(BASE_URL + path, body)
}

export { get, post, put }
