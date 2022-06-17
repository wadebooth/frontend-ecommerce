import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Row, Col, Image, ListGroup, Card, Button } from 'react-bootstrap'
import Rating from '../components/Rating'

const ProductScreen = ({ data }) => {
  const [productItem, setProductItem] = useState('')

  let { productId } = useParams()

  useEffect(() => {
    fetch(`https://ecommerce-backend-wb.web.app/products`)
      .then((res) => res.json())
      .then((data) => setProductItem(data.find((p) => p.id === productId)))
      .catch((err) => console.error(err))
  }, [])

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
                <Button
                  className='btn-block'
                  type='button'
                  disabled={productItem.countInStock === 0}
                >
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
