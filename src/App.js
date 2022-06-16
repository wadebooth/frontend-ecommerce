import Header from './components/Header'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Footer from './components/Footer'
import { Container } from 'react-bootstrap'
import HomeScreen from './screens/HomeScreen'
import ProductScreen from './screens/ProductScreen'
import LoginScreen from './screens/LoginScreen'

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      {/* <main className='py-3'> */}
      <Container>
        <Routes>
          <Route path='/' element={<HomeScreen />} />
          <Route path='/product/:id' element={<ProductScreen />} />
          <Route path='/login' element={<LoginScreen />} />
        </Routes>
      </Container>
      {/* </main> */}
      <Footer />
    </BrowserRouter>
  )
}

export default App
