import "./profile.css"
import profile from "../images/profilepic.jpg"
import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
// import { getLocalStorage } from "../helper/local"
import { getProfile } from "../services/Api"
function Profile() {
  const navigate = useNavigate()
  const [userProfile, setUserProfile] = useState({})

  useEffect(() => {
    getProfile().then((res) => {
      setUserProfile(res.data.data)
      //   console.log("res", res.data.data)
    })
    // const getInfo = getLocalStorage()
    // setInfo(getInfo)
  }, [])

  return (
    <>
      <div className=" justify-content-center align-items-center ">
        <div>
          <div className="card">
            <div
              className="rounded-top text-white d-flex flex-row"
              style={{ backgroundColor: "#000", height: "fit-content" }}
            >
              <div
                className="ms-4 mt-5 d-flex flex-column"
                style={{ width: "150px" }}
              >
                <img
                  src={profile}
                  alt="Generic placeholder "
                  className="img-fluid img-thumbnail mt-4 mb-2"
                  style={{ width: "150px" }}
                />
                <button
                  onClick={() => navigate("/EditProfile")}
                  type="button"
                  className="btn btn-outline-dark"
                  data-mdb-ripple-color="dark"
                >
                  Edit profile
                </button>
              </div>
              <div
                className="ms-3"
                style={{ marginTop: "130px", marginRight: "5em" }}
              >
                <h1>{userProfile.username}</h1>
                <h1>{userProfile.email}</h1>
                <h1> {userProfile.full_name}</h1>
                {/* <h5>{info.full_name}</h5>
                <h2>{info.mobile}</h2>
                <p>{info.email}</p> */}
              </div>
            </div>
            <div
              className="p-4 text-black"
              style={{ backgroundColor: "#f8f9fa" }}
            >
              <div className="d-flex justify-content-end text-center py-1">
                <div>
                  <p className="mb-1 h5">253</p>
                  <p className="small text-muted mb-0">Photos</p>
                </div>
                <div className="px-3">
                  <p className="mb-1 h5">1026</p>
                  <p className="small text-muted mb-0">Followers</p>
                </div>
                <div>
                  <p className="mb-1 h5">478</p>
                  <p className="small text-muted mb-0">Following</p>
                </div>
              </div>
            </div>
            <div className="card-body p-4 text-black">
              <div className="mb-5">
                <p className="lead fw-normal mb-1">About</p>
                <div className="p-4" style={{ backgroundColor: "#f8f9fa" }}>
                  <p className="font-italic mb-1">Web Developer</p>
                  <p className="font-italic mb-1">Lives in New York</p>
                  <p className="font-italic mb-0">Photographer</p>
                </div>
              </div>
              <div className="d-flex justify-content-between align-items-center mb-4">
                <p className="lead fw-normal mb-0">Recent photos</p>
                <p className="mb-0">
                  <a href="#!" className="text-muted">
                    Show all
                  </a>
                </p>
              </div>
              <div className="row g-2">
                <div className="col mb-2">
                  <img src="" alt=" 1" className="w-100 rounded-3" />
                </div>
                <div className="col mb-2">
                  <img src="" alt=" 1" className="w-100 rounded-3" />
                </div>
              </div>
              <div className="row g-2">
                <div className="col">
                  <img src="" alt=" 1" className="w-100 rounded-3" />
                </div>
                <div className="col">
                  <img src="" alt=" 1" className="w-100 rounded-3" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default Profile
