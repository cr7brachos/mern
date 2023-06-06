import React from "react";
import { useState } from 'react';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import { LinkContainer } from "react-router-bootstrap";

const ProductDismissinngAlert = () => {
  const [show, setShow] = useState(true);

  if (show) {
    return (
      <Alert variant="success" onClose={() => setShow(false)} dismissible>
        <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
        <p>
          <Button variant="success">Go back</Button> {""} 
          <LinkContainer to="/cart">
            <Button variant="danger">Go to cart</Button>
          </LinkContainer>
          
        </p>
      </Alert>
    );
  }
  
}

export default ProductDismissinngAlert;