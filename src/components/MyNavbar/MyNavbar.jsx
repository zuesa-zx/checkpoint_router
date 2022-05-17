import React from 'react'
import {Navbar,Nav,Container} from 'react-bootstrap'
import ReactStars from 'react-rating-stars-component'
import {Link} from 'react-router-dom'
function MyNavbar({setSearch,setRating}) {
    const starsHandler = (myrate) => {
        setRating(myrate)
    }
  return (
    <div>
        <Navbar bg="primary" variant="dark">
    <Container>
    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link as={Link} to="/">Home</Nav.Link>
      <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
      
    </Nav>
    <Nav>
        <input onChange={(e)=> setSearch(e.target.value)}/>
        <ReactStars
                style='margin:0 auto'
                count={5}
                size={24}
                defaultValue={0}
                onChange={starsHandler}
                activeColor="#ffd700"
            />
    </Nav>
    </Container>
  </Navbar> 
    </div>
  )
}

export default MyNavbar