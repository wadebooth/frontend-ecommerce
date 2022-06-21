import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Carousel, Image } from 'react-bootstrap'
import LoadingScreen from './LoadingScreen'
import '../App.css'

const ProductCarousel = ({ product }) => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    fetch('https://ecommerce-backend-wb.web.app/products')
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error(err))
  }, [])

  return (
    <Carousel pause='hover'>
      {products.map((product) => (
        <Carousel.Item key={product._id}>
          {/* <Link to={`/${product._id}`}> */}
          <div className='center'>
            <Image src={product.image} alt={product.name} />
          </div>
          <Carousel.Caption className='carousel-caption'>
            <h2>
              {product.name} (${product.price})
            </h2>
          </Carousel.Caption>
          {/* </Link> */}
        </Carousel.Item>
      ))}
    </Carousel>
  )
}

export default ProductCarousel
