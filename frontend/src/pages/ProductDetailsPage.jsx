import React, { useEffect } from "react";
import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import AddToCartMessageComponent from "../components/AddToCartMessageComponent";
import Image from 'react-bootstrap/Image';
import ListGroup from 'react-bootstrap/ListGroup';
import { Rating } from "react-simple-star-rating";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Alert from 'react-bootstrap/Alert';
import ImageZoom from "js-image-zoom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/actions/cartActions";






const ProductDetailsPage = () => {

    const dispatch = useDispatch();

    const addToCartHandler = () => {
        dispatch(addToCart());
    }

    const products = useSelector((state) => state.cart.value);

    // options  για το πακέτο ImageZoom
    let options = {
        scale: 2,
        width: 400,
        zoomWidth: 500,
        // fillContainer: true,
        // zoomPosition: "bottom",              
        offset:{
            vertical: 0,
            horizontal: 0
        }
    }

    // δημιουργεί καινούργια αντικείμενα βάσει των id
    useEffect(()=>{
        new ImageZoom(document.getElementById("first"), options);
        new ImageZoom(document.getElementById("second"), options);
        new ImageZoom(document.getElementById("third"), options);
        new ImageZoom(document.getElementById("fourth"), options);
    })

    return (
        <Container style={{marginBottom:150}}>
            <AddToCartMessageComponent />
            <Row className="mt-5" >
                <Col md={4} style={{zIndex:1}}>
                    <div id="first">
                        <Image src="/images/carousel/GBP.jpg" fluid crossOrigin="anonymous"/>
                    </div>
                    <div id="second">
                        <Image src="/images/carousel/GBP.jpg" fluid crossOrigin="anonymous"/>
                    </div>
                    <div id="third">
                        <Image src="/images/carousel/GBP.jpg" fluid crossOrigin="anonymous"/>
                    </div>
                    <div id="fourth">
                        <Image src="/images/carousel/GBP.jpg" fluid crossOrigin="anonymous"/>
                    </div>
                </Col>
                <Col md={8}>
                    <Row>
                        <Col md={8}>
                            <ListGroup variant="flush">
                                <ListGroup.Item>
                                    <h1>Product Name {products}</h1>
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    <Rating readonly size={20} initialValue={4} /> (1)
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    Price: 
                                    <span className="fw-bold">€250</span>
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    Porta ac consectetur ac Porta ac consectetur acPorta ac consectetur acPorta ac consectetur acPorta ac consectetur ac
                                    </ListGroup.Item>
                            </ListGroup>
                        </Col>
                        <Col md={4}>
                            <ListGroup variant="flush">
                                <ListGroup.Item>Status: in stock</ListGroup.Item>
                                <ListGroup.Item>
                                    Price: 
                                    <span className="fw-bold">€250</span>
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    Quantity:
                                    <Form.Select aria-label="Default select example" size="lg">
                                        <option>1</option>
                                        <option value="1">2</option>
                                        <option value="2">3</option>
                                        <option value="3">4</option>
                                    </Form.Select>
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    <Button variant="danger" onClick={addToCartHandler}>Add to Cart</Button>
                                </ListGroup.Item>
                                
                            </ListGroup>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="mt-5">
                            <h5 className="fw-bold">REVIEWS</h5>
                            <ListGroup variant="flush">
                                {
                                    Array.from({length:10}).map((_,idx)=>{
                                        return (
                                            <ListGroup.Item key={idx}>
                                                Vassilis Brachos <br />
                                                <Rating readonly size={20} initialValue={4}/> (1) <br />
                                                01-06-2023 <br />
                                                test text review text test text review texttest text review texttest text review text
                                                test text review texttest text review texttest text review text 
                                            </ListGroup.Item>
                                        )
                                    })
                                }
                                
                                
                            </ListGroup>
                        </Col>
                    </Row>
                    <hr />
                    send review form
                    <Alert variant="danger">Login first to write a review</Alert>
                    <Form>
                        
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Write review text</Form.Label>
                            <Form.Control as="textarea" rows={3} />
                        </Form.Group>
                    </Form>
                    <Form.Select aria-label="Default select example" size="lg">
                        <option>Your rating</option>
                        <option value="5">5 (very good)</option>
                        <option value="4">4 (good)</option>
                        <option value="3">3 (average)</option>
                        <option value="2">2 (bad)</option>
                        <option value="1">1 (awful)</option>
                    </Form.Select>
                    <Button variant="primary" className="mb-3 mt-3">Submit</Button>
                </Col>
            </Row>
        </Container>
    )

}

export default ProductDetailsPage;