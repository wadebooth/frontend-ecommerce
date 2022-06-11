import React, { useState, useEffect } from 'react'
import { Row, Col } from 'react-bootstrap'
import Product from '../components/Product'
import axios from 'axios'

const HomeScreen = () => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    const fetchProducts = async () => {
      fetch('http://localhost:5050/api/products')
      const data = await axios.get('http://localhost:5050/api/products')
      console.log('this is data', data)
      setProducts(data)
    }
    fetchProducts()
    // fetch()
  }, [])

  return (
    <>
      <h1>Latest Products</h1>
      <Row>
        {products?.map((product) => {
          return (
            <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
              <Product product={product} />
            </Col>
          )
        })}
      </Row>
    </>
  )
}

export default HomeScreen
