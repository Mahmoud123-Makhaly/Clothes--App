import React, { useState } from 'react'
import { Container, Form , Button, Navbar } from 'react-bootstrap'

const Navs = ({filterBySearch}) => {
  const [text , setText] = useState("");
  const onSearch = ()=>{
    filterBySearch(text)
  }
  return (
    <Navbar bg="dark" expand="lg" variant='dark'>
      <Container>
        <Navbar.Brand href="#">
            <span className='nav-brand'>Clothes</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
        
          <Form className="d-flex ms-auto mt-2 mt-lg-0">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              value={text}
              onChange={(e)=>{setText(e.target.value)}}
            />
            <Button onClick={()=>{onSearch()}} className='btn-style'>Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Navs
