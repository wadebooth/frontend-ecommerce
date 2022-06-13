import React, { useState, useEffect } from 'react'
import { Row, Col } from 'react-bootstrap'
import Product from '../components/Product'
import axios from 'axios'

const HomeScreen = () => {
  const [products, setProducts] = useState([])

  // useEffect(() => {
  //   const fetchProducts = async () => {
  //     // fetch('https://ecommerce-backend-wb.web.app/api/products')
  //     const data = await axios.get(
  //       'https://ecommerce-backend-wb.web.app/api/products'
  //     )
  //     console.log('this is data', data)
  //     setProducts(data)
  //   }
  //   fetchProducts()
  //   // fetch()
  // }, [])

  useEffect(() => {
    fetch('https://ecommerce-backend-wb.web.app/api/products')
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error(err))
  }, [])
  return (
    <>
      <h1>Latest Products</h1>
      <Row>
        {products.map((product) => {
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
