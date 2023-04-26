import Button from "react-bootstrap/Button"
import Footer from "../footer/Footer"
import Card from "react-bootstrap/Card"
import { getLocalStorage } from "../helper/local"
import { useState, useEffect } from "react"
function Home() {
  const [user, setUser] = useState({})

  useEffect(() => {
    const userDetails = getLocalStorage()
    setUser(userDetails)
  }, [])
  return (
    <>
      {user.full_name}
      {user.email}

      <Card style={{ width: "18rem" }}>
        <Card.Img
          variant="top"
          src="https://images.pexels.com/photos/2913125/pexels-photo-2913125.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
      <Footer />
    </>
  )
}
export default Home
