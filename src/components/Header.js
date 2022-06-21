import React, { useContext } from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import { Navbar, Nav, Container } from 'react-bootstrap'
import { UserContext } from '../App'
import Logo from '../Logo.png'
import '../App.css'

const Header = () => {
  const { user, setUser } = useContext(UserContext)

  return (
    <>
      <header>
        <Navbar bg='clear' variant='dark' expand='lg' collapseOnSelect>
          <Container>
            <LinkContainer to='/'>
              <Navbar.Brand>
                <img
                  src={Logo}
                  className='Home-Logo'
                  alt='Logo'
                  width='50'
                  height='60'
                />{' '}
              </Navbar.Brand>
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
