import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
import { LinkContainer } from "react-router-bootstrap";

const ProductCard = (props) => {
  return (
    <div>
    <Card style={{ marginTop:"50px", marginBottom:"50px"}}>

      {/* Δημιουργούμε τα πιο κάτω Row & columns, ώστε σε μεγάλη οθόνη να έχουμε το κείμενο δίπλα στη φωτογραφία
      ενώ σε μικρότερη οθόνη διπλώνεται αντιστοίχως */}
      <Row>
        <Col lg={5}>
          <Card.Img variant="top" src="/images/carousel/GBP.jpg" crossOrigin="anonymous"/>  
        </Col>

        <Col lg={7}>
          <Card.Body>
            <Card.Title><strong>{props.title}</strong></Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Card.Text>
              {props.rating} (1)
            </Card.Text>
            <Card.Text className="h4">
              €124 {""}
              <LinkContainer to="/product-details">
                <Button variant="danger">See product</Button>
              </LinkContainer>  
            </Card.Text>
            
            
          </Card.Body>
        </Col>

      </Row>

      
      
    </Card>
    </div>
  );
}

export default ProductCard;