import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Form from 'react-bootstrap/Form';
import Alert from 'react-bootstrap/Alert';
import ListGroup from 'react-bootstrap/ListGroup';
import CartItemComponent from "../../../components/CartItemComponent";
import ListGroupItem from "react-bootstrap/esm/ListGroupItem";
import Button from "react-bootstrap/esm/Button";
import { useParams } from "react-router-dom";

const OrderDetailsPageComponent = ({getOrder, markAsDelivered}) => {

    const { id } = useParams();
    const [userInfo, setUserInfo] = useState({});
    const [paymentMethod, setPaymentMethod] = useState("");
    const [isPaid, setIsPaid] = useState(false);
    const [isDelivered, setIsDelivered] = useState(false);
    const [cartSubTotal, setCartSubTotal] = useState(0);
    const [buttonDisabled, setButtonDisabled] = useState(false);
    const [orderButtonMessage, setOrderButtonMessage] = useState("Mark as delivered");
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        getOrder(id).then((order) => {
            setUserInfo(order.user);
            setPaymentMethod(order.paymentMethod);
            order.isPaid ? setIsPaid(order.paidAt) : setIsPaid(false);
            order.isDelivered ? setIsDelivered(order.deliveredAt) : setIsDelivered(false);
            setCartSubTotal(order.orderTotal.cartSubTotal);
            if (order.isDelivered) {
                setOrderButtonMessage("Order is finished");
                setButtonDisabled(true);
            }
            setCartItems(order.cartItems);
        })
                    .catch(err => console.log(err))
    },[isDelivered, id])

    return (
        <Container fluid>
            <Row className="mt-4">
                <h1 className="fw-bold">Admin Order Details</h1>
                <Col md={8}>
                    <br />
                    <Row>
                        <Col md={6}>
                            <h2 className="fw-bold">Shipping</h2>
                            <b>Name:</b> {userInfo?.name} {userInfo?.lastName}<br />
                            <b>Address:</b>
                                {userInfo?.address} 
                                {userInfo?.city} 
                                {userInfo?.state}
                                {userInfo?.zipCode}<br />
                            <b>Phone:</b>: {userInfo?.phoneNumber} <br />
                            


                        </Col>
                        <Col md={6}>
                            <h2 className="fw-bold">Payment method</h2>
                            <Form.Select 
                                    aria-label="Default select example" 
                                    value={paymentMethod} //default value and disabled
                                    disabled={true} > 

                                <option value="pp">Paypal</option>
                                <option value="cod">Cash on delivery</option>
                            </Form.Select>                            
                        </Col>
                        <Row>
                            <Col>
                            <Alert variant={isDelivered ? "success" : "danger" }
                                    className="mt-3">
                                    {isDelivered ? <>Delivered at: {isDelivered.substring(0,10)}</> : <>Not delivered</>}
                            </Alert>
                            </Col>
                            <Col>
                            <Alert variant={isPaid ? "success" : "danger" }
                                    className="mt-3">
                                    {isPaid ? <>Paid at: {isPaid.substring(0,10)}</> : <>Not paid yet</>}
                            </Alert>
                            </Col>
                        </Row>
                    </Row>
                    <br />
                    <h2 className="fw-bold">Order items</h2>
                    <ListGroup variant="flush">

                        {cartItems.map((item, idx)=>{
                            return (
                                <CartItemComponent key={idx} item={item} orderCreated={true}/>    
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
                        <h3>Items price (after tax): <span className="fw-bold">{cartSubTotal}</span></h3>
                    </ListGroupItem>
                    <ListGroupItem>
                        <h3>Shipping: <span className="fw-bold">included</span></h3>
                    </ListGroupItem>
                    <ListGroupItem>
                        <h3>Tax: <span className="fw-bold">included</span></h3>
                    </ListGroupItem>
                    <ListGroupItem className="text-danger">
                        <h3>Total price: <span className="fw-bold">{cartSubTotal}</span></h3>
                    </ListGroupItem>
                    <ListGroupItem >
                        <div className="d-grid gap-2">
                            <Button size="lg" 
                                    variant="danger" 
                                    type="button"
                                    disabled={buttonDisabled}
                                    onClick={() => markAsDelivered(id).then((res) => {
                                            if (res) {
                                                setIsDelivered(true);
                                            }
                                        }).catch((err) => console.log(err))
                                    
                                    }
                                    >
                                    {orderButtonMessage}
                            </Button>
                        </div>
                        
                    </ListGroupItem>
                </ListGroup>
                </Col>   
            </Row>
        </Container>
        
    )
}

export default OrderDetailsPageComponent;