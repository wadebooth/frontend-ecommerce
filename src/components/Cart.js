import React, { useState, useEffect } from 'react'
import { useContext } from 'react'
import { Row, Col, Button } from 'react-bootstrap'
import Product from './Product'
import { CartContext } from './CartContext'

const Cart = () => {
  const [products, setProducts] = useState([])
  const items = useContext(CartContext)
  const [isInitiallyFetched, setIsInitiallyFetched] = useState(false)

  useEffect(() => {
    let prev_items = JSON.parse(localStorage.getItem('cart')) || []
    setProducts(prev_items)
    setIsInitiallyFetched(true)
  }, [])

  useEffect(() => {
    if (isInitiallyFetched) {
      localStorage.setItem('cart', JSON.stringify(items))
    }
  }, [items])
  return (
    <>
      <h1>Shopping Cart</h1>
      <Row>
        {products.map((product) => {
          return (
            <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
              <Product product={product} />
            </Col>
          )
        })}
      </Row>
      <Button type='Submit' variant='primary' to='/checkout'>
        Continue to checkout
      </Button>
    </>
  )
}

export default Cart
