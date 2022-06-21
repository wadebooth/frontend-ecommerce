import React, { useContext } from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import { Navbar, Nav, Container } from 'react-bootstrap'
import { UserContext } from '../App'

const Header = () => {
  const { user, setUser } = useContext(UserContext)

  return (
    <>
      <header>
        <Navbar bg='clear' variant='dark' expand='lg' collapseOnSelect>
          <Container>
            <LinkContainer to='/'>
              <Navbar.Brand>Elektric Boutique</Navbar.Brand>
            </LinkContainer>
            <Navbar.Toggle aria-controls='basic-navbar-nav' />
            <Navbar.Collapse id='basic-navbar-nav'>
              <Nav className='ms-auto'>
                <LinkContainer to='/cart'>
                  <Nav.Link>
                    <i className='fas fa-shopping-cart'></i>Cart
                  </Nav.Link>
                </LinkContainer>

                {!user ? (
                  <LinkContainer to='/login'>
                    <Nav.Link>
                      <i className='fas fa-user'></i>Sign In
                    </Nav.Link>
                  </LinkContainer>
                ) : (
                  <div>Hello, {user.displayName}</div>
                )}
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
    </>
  )
}

export default Header
