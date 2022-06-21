import React, { createContext, useState, useEffect } from 'react'
import Header from './components/Header'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Footer from './components/Footer'
import { Container } from 'react-bootstrap'
import HomeScreen from './screens/HomeScreen'
import ProductScreen from './screens/ProductScreen'
import LoginScreen from './screens/LoginScreen'
import Cart from './components/Cart'
import LoadingScreen from './components/LoadingScreen'

export const UserContext = createContext(null)

const App = () => {
  const [user, setUser] = useState()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => setLoading(false), 3000)
  }, [])

  return (
    <>
      {loading === false ? (
        <BrowserRouter>
          <UserContext.Provider value={{ user, setUser }}>
            <Header />
            {/* <main className='py-3'> */}
            <Container>
              <Routes>
                <Route path='/' element={<HomeScreen />} />
                <Route path='/product/:id' element={<ProductScreen />} />
                <Route path='/login' element={<LoginScreen />} />
                <Route path='/cart' element={<Cart />} />
              </Routes>
            </Container>
            {/* </main> */}
            <Footer />
          </UserContext.Provider>
        </BrowserRouter>
      ) : (
        <LoadingScreen />
      )}
    </>
  )
}

export default App
