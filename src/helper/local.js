function getLocalStorage(object) {
  const app = localStorage.getItem("app")
  if (app) {
    return JSON.parse(app)
  } else {
    return ""
  }
}

function setLocalStorage(object) {
  localStorage.setItem("app", JSON.stringify(object))
}

function removeLocalStorage(object) {
  localStorage.removeItem("app")
}
export { getLocalStorage, setLocalStorage, removeLocalStorage }
