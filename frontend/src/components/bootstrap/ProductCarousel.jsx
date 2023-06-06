import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { LinkContainer } from 'react-router-bootstrap';



const ProductCarousel = () => {

    // χρησιμοποιείται για να περάσει ώς style στα caption του Carousel
    const cursorP = {
        cursor: "pointer"
    };

  return (

    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/images/carousel/GBP.jpg"
          alt="First slide"
          crossOrigin="anonymous"
          style={{objectFit:"cover"}}
        />
        <Carousel.Caption className='text-secondary'>
            <LinkContainer style={cursorP} to="/product-details">
                <h3>G-BEND PLUS Series</h3>
            </LinkContainer>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/images/carousel/GFX.jpg"
          alt="Second slide"
          crossOrigin="anonymous"
          style={{objectFit:"cover"}}
        />

        <Carousel.Caption className='text-secondary'>
            <LinkContainer style={cursorP} to="/product-details">
                <h3>G-FLEX Series</h3>
            </LinkContainer>
          
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/images/carousel/GHD.jpg"
          alt="Third slide"
          width="100"
          crossOrigin="anonymous"
          style={{objectFit:"cover"}}
        />

        <Carousel.Caption className='text-secondary'>
            <LinkContainer style={cursorP} to="/product-details">
                <h3>G-HD Series</h3>
            </LinkContainer>
          
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default ProductCarousel;