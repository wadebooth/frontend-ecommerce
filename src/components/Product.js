import React, { useEffect, useState } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom'
import { Card } from 'react-bootstrap'
import Rating from './Rating'

//creating a product

const Product = ({ product }) => {
  const [productItem, setProductItem] = useState([])
  let { productId } = useParams()
  useEffect(() => {}, [])
  console.log(product._id)

  const navigate = useNavigate()

  // onclick
  const handleClick = () => {
    fetch(`https://ecommerce-backend-wb.web.app/products/${product._id}`)
      .then((res) => res.json())
      .then((data) => setProductItem(data.find((p) => p.id === productId)))
      .catch((err) => console.error(err))
  }

  return (
    <Card
      className='my-3 p-3 rounded'
      onClick={() => navigate('/product/' + product.id)}
    >
      <Link to={`/product/${product._id}`}>
        <Card.Img src={product.image} variant='top' />
      </Link>

      <Card.Body>
        <Link to={`/product/${product._id}`}>
          <Card.Title as='div'>
            <strong>{product.name}</strong>
          </Card.Title>
        </Link>

        <Card.Text as='div'>
          <Rating
            value={product.rating}
            text={`${product.numReviews} reviews`}
          />
        </Card.Text>

        <Card.Text as='h3'>${product.price}</Card.Text>
      </Card.Body>
    </Card>
  )
}

export default Product
