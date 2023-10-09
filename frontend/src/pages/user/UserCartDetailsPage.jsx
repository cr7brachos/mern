import React from "react";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Form from 'react-bootstrap/Form';
import Alert from 'react-bootstrap/Alert';
import ListGroup from 'react-bootstrap/ListGroup';
import CartItemComponent from "../../components/CartItemComponent";
import ListGroupItem from "react-bootstrap/esm/ListGroupItem";
import Button from "react-bootstrap/esm/Button";

const UserCartDetailsPage = () => {
    return (
        <Container fluid>
            <Row className="mt-4">
                <h1 className="fw-bold">Order cart details</h1>
                <Col md={8}>
                    <br />
                    <Row>
                        <Col md={6}>
                            <h2 className="fw-bold">Shipping</h2>
                            <b>Name:</b>: Vassilis Brachos <br />
                            <b>Address:</b>: Konpoleos 79 <br />
                            <b>Phone:</b>: 69786757 <br />
                            


                        </Col>
                        <Col md={6}>
                            <h2 className="fw-bold">Payment method</h2>
                            <Form.Select aria-label="Default select example">
                                <option value="pp">Paypal</option>
                                <option value="cod">Cash on delivery</option>
                            </Form.Select>                            
                        </Col>
                        <Row>
                            <Col>
                            <Alert variant="danger" className="mt-3">
                                Not delivered. In order to make order, fill out your profile with correct address, city etc
                            </Alert>
                            </Col>
                            <Col>
                            <Alert variant="success" className="mt-3">Not paid yet</Alert>
                            </Col>
                        </Row>
                    </Row>
                    <br />
                    <h2 className="fw-bold">Order items</h2>
                    <ListGroup variant="flush">

                        {Array.from({length:3}).map((item, idx)=>{
                            return (
                                <CartItemComponent key={idx} item={{image: {path:""}, 
                                name: "Product name", price:10, count:10, quantity:10}}/>    
                            )
                        })}

                    </ListGroup>
                    
                    

                </Col>
                <Col md={4}>
                
                <ListGroup>
                    <ListGroupItem>
                        <h3 className="fw-bold">Order summary</h3>
                    </ListGroupItem>
                    <ListGroupItem>
                        <h3>Items price (after tax): <span className="fw-bold">€980</span></h3>
                    </ListGroupItem>
                    <ListGroupItem>
                        <h3>Shipping: <span className="fw-bold">included</span></h3>
                    </ListGroupItem>
                    <ListGroupItem>
                        <h3>Tax: <span className="fw-bold">included</span></h3>
                    </ListGroupItem>
                    <ListGroupItem className="text-danger">
                        <h3>Total price: <span className="fw-bold">€990</span></h3>
                    </ListGroupItem>
                    <ListGroupItem >
                        <div className="d-grid gap-2">
                            <Button size="lg" variant="danger" type="button">Pay for the order</Button>
                        </div>
                        
                    </ListGroupItem>
                </ListGroup>
                </Col>   
            </Row>
        </Container>
        
    )
}

export default UserCartDetailsPage;