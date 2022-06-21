import { initializeApp } from 'firebase/app'
import React, { useState, useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Form, Button, Row, Col } from 'react-bootstrap'
import FormContainer from '../components/FormContainer'
import {
  getAuth,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from 'firebase/auth'
import GoogleButton from 'react-google-button'
import { UserContext } from '../App'
import firebaseConfig from '../secrets/secrets'

function connectAuth() {
  return getAuth(firebaseConfig)
}

const LoginScreen = () => {
  const navigate = useNavigate()
  const { user, setUser } = useContext(UserContext)

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = ({ email, password }) => {
    const app = initializeApp(firebaseConfig)
    const auth = getAuth(app)
    signInWithEmailAndPassword(auth, email, password)
      .then((res) => setUser(res.user))
      .then(navigate(!user ? '/login' : '/'))
      .catch(console.error)
  }

  function handleGoogleLogin() {
    const auth = connectAuth()
    const provider = new GoogleAuthProvider()
    signInWithPopup(auth, provider)
      .then((res) => {
        console.log(res)
        const name = res.user.displayName
        const profilePic = res.user.photoURL
        localStorage.setItem('name', name)
        localStorage.setItem('profilePic', profilePic)
        setUser(res.user)
        navigate('/')
      })
      .catch(console.error)
  }
  // useEffect(() => {
  //   if (user) {
  //     navigate('/reviews/add')
  //   }
  // }, [user])

  return (
    <FormContainer>
      <h1>Sign In</h1>
      <Form onSubmit={handleLogin}>
        <Form.Group controlId='email'>
          <Form.Label>Email Address</Form.Label>
          <Form.Control
            type='email'
            placeholder='Enter Email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></Form.Control>

          <Form.Group controlId='password'>
            <Form.Label>Password</Form.Label>
            <Form.Control
              type='password'
              placeholder='Enter Password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            ></Form.Control>
          </Form.Group>
        </Form.Group>

        <Button type='Submit' variant='primary'>
          Sign In
        </Button>

        <GoogleButton
          className='google-login'
          onClick={handleGoogleLogin}
          type='light'
          htmltype='submit'
        >
          Google
        </GoogleButton>
      </Form>

      <Row className='py-3'>
        <Col>
          New Customer?{' '}
          {/* <Link to={redirect ? `/register?redirect=${redirect}` : '/register'}>
            Register
          </Link> */}
        </Col>
      </Row>
    </FormContainer>
  )
}

export default LoginScreen
