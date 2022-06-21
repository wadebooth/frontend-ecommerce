import React, { useState, useEffect } from 'react'
import { useContext } from 'react'
import { Row, Col } from 'react-bootstrap'
import Product from '../components/Product'
import { CartContext, RemoveCartContext, AddCartContext } from './CartContext'

const Cart = () => {
  const [products, setProducts] = useState([])
  const items = useContext(CartContext)
  const removeItem = useContext(RemoveCartContext)
  const [cartTotal, setCartTotal] = useState(0)
  const [isInitiallyFetched, setIsInitiallyFetched] = useState(false)

  // useEffect(() => {
  //   fetch('https://ecommerce-backend-wb.web.app/products')
  //     // fetch(`https://ecommerce-backend-wb.web.app/products/${_id}`)
  //     .then((res) => res.json())
  //     .then((data) => setProducts(data))
  //     .catch((err) => console.error(err))
  // }, [])

  const addItems = useContext(AddCartContext)
  useEffect(() => {
    let prev_items = JSON.parse(localStorage.getItem('cart')) || []
    addItems(prev_items)
    setProducts(prev_items)
    setIsInitiallyFetched(true)
  }, [])

  useEffect(() => {
    if (isInitiallyFetched) {
      localStorage.setItem('cart', JSON.stringify(items))
    }
  }, [items])
  // const cartItems = items.map((item, index) => (
  //   <div>
  //     <span key={index}>{`${item.name}: £${item.price}`}</span>
  //     <input type='button' value='-' onClick={(e) => removeItem(item)} />
  //   </div>
  // ))
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
    </>
  )
}

export default Cart
