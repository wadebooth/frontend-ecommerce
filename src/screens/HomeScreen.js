import React, { useState, useEffect } from 'react'
import { Row, Col } from 'react-bootstrap'
import Product from '../components/Product'
import ProductCarousel from '../components/ProductsCarousel'
// import MapContainer from '../components/Map'

const HomeScreen = () => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    fetch('https://ecommerce-backend-wb.web.app/products')
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error(err))
  }, [])
  return (
    <>
      <ProductCarousel />
      <h2>Latest Products</h2>
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
