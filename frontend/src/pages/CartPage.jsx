import React from "react";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Alert from 'react-bootstrap/Alert';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import { LinkContainer } from "react-router-bootstrap";
import CartItemComponent from "../components/CartItemComponent";


const CartPage = () => {
    return (
        <Container fluid>
            <Row className="mt-4">
                <Col md={8}>
                    <h1>Shopping cart</h1>
                    {Array.from({length:3}).map((_ , idx)=>{
                        return (
                            <>
                            
                            <ListGroup variant="flush" key={idx}>
                                <CartItemComponent item={{image: {path:""}, 
                                name: "Product name", price:10, count:10, quantity:10}}/>
                            </ListGroup>
                            
                            </>
                            
                        )
                    })}
                    <Alert variant="info">Your cart is empty</Alert>
                </Col>
                <Col md={4}>
                    <ListGroup>
                        <ListGroup.Item>
                            <h3>Subtotal (2 items)</h3>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            Price: <span className="fw-bold">€200</span>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <LinkContainer to="/user">
                                <Button variant="primary">Proceed to Checkout</Button>
                            </LinkContainer>
                            
                        </ListGroup.Item>
                        
                    </ListGroup>
                </Col>
            </Row>
        </Container>
        
    )
}

export default CartPage;