import React from "react";
import Button from "react-bootstrap/esm/Button";
import Col from "react-bootstrap/esm/Col";
import Image from "react-bootstrap/esm/Image";
import ListGroupItem from "react-bootstrap/esm/ListGroupItem";
import Row from "react-bootstrap/esm/Row";
import Form from 'react-bootstrap/Form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faCommentDots, faTrash } from '@fortawesome/free-solid-svg-icons';
 

const CartItemComponent = () => {
    return (
        <>
            <ListGroupItem>
                <Row>
                    <Col md={2}>
                        <Image src="/images/carousel/GBP.jpg" fluid crossOrigin="anonynous"/>
                    </Col>
                    <Col md={2}>
                        Logotech series <br />
                        Gaming mouse
                    </Col>
                    <Col md={2}>
                        <b>€56</b>
                    </Col>
                    <Col md={3}>
                    <Form.Select aria-label="Default select example">
                        {/* <option>Open this select menu</option> */}
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                    </Form.Select>
                    </Col>
                    <Col md={3}>
                        <Button 
                            variant="secondary" 
                            onClick={()=>{
                                    return (
                                        window.confirm("Are you sure") //βγάζει μήνυμα στην οθόνη
                                    )
                                }
                            }><FontAwesomeIcon icon={faTrash}/>
                        </Button>
                    </Col>
                </Row>
            </ListGroupItem>
            <br />
        </>
    )
}

export default CartItemComponent;