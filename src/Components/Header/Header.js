import React from 'react'
import {Navbar,Container} from 'react-bootstrap'

function Header() {
  return (
    <header>
        <Navbar bg="warning">
        <Container>
          <Navbar.Brand href="#home" className='text-light' variant="light">
            <i className='fa-solid fa-users fa-flip'></i>{' '}
            EMS Application
          </Navbar.Brand>
        </Container>
      </Navbar>
    </header>
  )
}

export default Header