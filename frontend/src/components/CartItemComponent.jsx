import React from "react";
import Button from "react-bootstrap/esm/Button";
import Col from "react-bootstrap/esm/Col";
import Image from "react-bootstrap/esm/Image";
import ListGroupItem from "react-bootstrap/esm/ListGroupItem";
import Row from "react-bootstrap/esm/Row";
import Form from 'react-bootstrap/Form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faCommentDots, faTrash } from '@fortawesome/free-solid-svg-icons';
 

const CartItemComponent = ({item, orderCreated=false}) => {
    return (
        <>
            <ListGroupItem>
                <Row>
                    <Col md={2}>
                        <Image src={item.image ? (item.image.path ?? null) : null} 
                                fluid 
                                crossOrigin="anonynous"/>
                    </Col>
                    <Col md={2}>
                        {item.name} <br />
                        
                    </Col>
                    <Col md={2}>
                        <b>€{item.price}</b>
                    </Col>
                    <Col md={3}>
                    <Form.Select aria-label="Default select example" 
                                    disabled = {orderCreated}
                                    value={item.quantity}
                                    onChange={()=>{}}>
                        {/* <option>Open this select menu</option> */}
                        { [...Array(item.count).keys()].map((x) => (
                            <option value={x+1}>{x+1}</option>
                        )) }
                        
                        
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