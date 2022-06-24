import React, { useState, useEffect } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { Row, Col, Image, ListGroup, Card, Button } from 'react-bootstrap'
import Rating from '../components/Rating'

//setup for the product screen

const ProductScreen = ({ data }) => {
  const navigate = useNavigate()

  const [productItem, setProductItem] = useState('')
  let { id } = useParams()

  useEffect(() => {
    fetch(`https://ecommerce-backend-wb.web.app/products`)
      .then((res) => res.json())
      .then((data) => {
        setProductItem(data.find((p) => p._id === id))
      })
      .catch((err) => console.error(err))
  }, [])

  const handleClick = (e, item) => {
    let previousItems = JSON.parse(localStorage.getItem('cart')) || []
    previousItems.push(item)
    console.log(`my previous items ${previousItems}`)
    localStorage.setItem('cart', JSON.stringify(previousItems))
    navigate('/')
  }
  return (
    <>
      <Link className='btn btn-light my-3' to='/'>
        Go Back
      </Link>
      <Row>
        <Col md={6}>
          <Image
            key={productItem.id}
            src={productItem.image}
            alt={productItem.name}
            fluid
          />
        </Col>
        <Col md={3}>
          <ListGroup variant='flush'>
            <ListGroup.Item>
              <h3>{productItem.name}</h3>
            </ListGroup.Item>
            <ListGroup.Item>
              <Rating
                value={productItem.rating}
                text={`${productItem.numReviews} reviews`}
              />
            </ListGroup.Item>
            <ListGroup.Item>Price: ${productItem.price}</ListGroup.Item>
            <ListGroup.Item>
              Description: {productItem.description}
            </ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={3}>
          <Card>
            <ListGroup variant='flush'>
              <ListGroup.Item>
                <Row>
                  <Col>Price:</Col>
                  <Col>
                    <strong>${productItem.price}</strong>
                  </Col>
                </Row>
              </ListGroup.Item>

              <ListGroup.Item>
                <Row>
                  <Col>Status:</Col>
                  <Col>
                    {productItem.countInStock > 0 ? 'In stock' : 'Out of stock'}
                  </Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Button onClick={(e) => handleClick(e, productItem)}>
                  {' '}
                  Add To Cart
                </Button>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </>
  )
}

export default ProductScreen
