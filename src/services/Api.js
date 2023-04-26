import { post, get } from "../httpHandler/Method-http"
function signUp(body) {
  return post("auth/create-account", body)
}
function login(body) {
  return post("auth", body)
}
function getProfile() {
  return get("user/profile")
}
export { signUp, login, getProfile }
