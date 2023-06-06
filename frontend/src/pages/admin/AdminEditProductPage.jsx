import React, {useState} from "react";
import Container from "react-bootstrap/esm/Container";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
import { LinkContainer } from "react-router-bootstrap";
import Button from "react-bootstrap/esm/Button";
import Form from 'react-bootstrap/Form';
import CloseButton from 'react-bootstrap/CloseButton';
import Table from "react-bootstrap/esm/Table";
import Alert from 'react-bootstrap/Alert';
import Image from "react-bootstrap/esm/Image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faX } from '@fortawesome/free-solid-svg-icons';

// δημιουργεί το style, πάνω στο εικονίδιο X και το βάζει τη πάνω αριστερά γωνία της φωτογραφίας, ενώ κάνει και το δείκτη pointer
// κάνει το αντικείμενο absolute, μέσα σε parent relative
const onHover = {
    cursor: "pointer",
    position: "absolute",
    left: "5px",
    top: "-10px",
    tranform: "scale(10)"

}


const AdminEditProductPage = () => {

    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
        }

        setValidated(true);
    };

    

    return (
        <Container style={{marginBottom:"150px"}}>
            <Row className="mt-5 justify-content-md-center">
                <Col md={1}>
                    <LinkContainer to="/admin/products">
                        <Button variant="primary" className="my-3">Go back</Button>
                    </LinkContainer>
                </Col>
                <Col md={6}>
                    <h1>Edit your product</h1>
                    <Form noValidate validated={validated} onSubmit={handleSubmit}>
                        
                        <Form.Group className="mb-3" controlId="productName">
                            <Form.Label>Product Name</Form.Label>
                            <Form.Control 
                            required 
                            type="text" 
                            name="procutName"
                            defaultValue="Panasonic"/>
                            <Form.Control.Feedback type="invalid">Please enter a product name</Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="productDescription">
                            <Form.Label>Description</Form.Label>
                            <Form.Control 
                            required 
                            type="text" 
                            defaultValue="Panasonic description"
                            name="productDescription"
                            as="textarea"
                            rows={3}/>
                            <Form.Control.Feedback type="invalid">Please enter a product description</Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="countInStock">
                            <Form.Label>Count in stock</Form.Label>
                            <Form.Control 
                            required 
                            type="number" 
                            defaultValue="2"
                            placeholder="Enter items in stock" 
                            name="count"/>
                            <Form.Control.Feedback type="invalid">Please correct number</Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="productPrice">
                            <Form.Label>Price</Form.Label>
                            <Form.Control 
                            required 
                            type="text" 
                            defaultValue="€ 250"
                            placeholder="Enter product price" 
                            name="procutPrice"/>
                            <Form.Control.Feedback type="invalid">Please enter product price</Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="productCategory">
                            <Form.Label>
                                Category
                                
                                </Form.Label>
                            <Form.Select required>
                                <option value="">Select category</option>
                                <option value="1">Laptops</option>
                                <option value="2">TV</option>
                                <option value="3">Games</option>
                            </Form.Select>
                        </Form.Group>

                        

                        <Row className="mt-5">
                            <Col md={6}>
                                <Form.Group className="mb-3" controlId="formBasicAttributes">
                                    <Form.Label>Choose attribute and set value</Form.Label>
                                    <Form.Select name="attrKey" aria-label="Default select example">
                                        <option>Choose attribute</option>
                                        <option value="red">color</option>
                                    </Form.Select>
                                </Form.Group>
                            </Col>
                            <Col md={6}>
                                <Form.Group className="mb-3" controlId="attrValue">
                                    <Form.Label>Choose attribute value</Form.Label>
                                    <Form.Select name="attrValue" aria-label="Default select example">
                                        <option>Choose attribute value</option>
                                        
                                    </Form.Select>
                                </Form.Group>
                            </Col>
                        </Row>

                        <Row>
                            <Table hover>
                            <Table hover>
                                    <thead>
                                        <tr>
                                            <th>Attribute</th>
                                            <th>Value</th>
                                            <th>Delete</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>attrKey</td>
                                            <td>attrValue</td>
                                            <td>
                                                <CloseButton/>
                                            </td>
                                            
                                        </tr>
                                        
                                    </tbody>
                                </Table>

                            </Table>
                        </Row>

                        <Row>
                            <Col md={6}>
                            <Form.Group className="mb-3" controlId="newAttribute">
                                <Form.Label>Create new attribute</Form.Label>
                                <Form.Control 
                                    type="text" 
                                    placeholder="First choose or create category" 
                                    name="newAttribute"
                                    disabled="false"/>
                                
                            </Form.Group>
                            
                            </Col>

                            <Col md={6}>

                            <Form.Group className="mb-3" controlId="newValue">
                                <Form.Label>Attribute value</Form.Label>
                                <Form.Control 
                                    type="text" 
                                    placeholder="First choose or create category" 
                                    name="newValue"
                                    disabled="false"/>
                                
                            </Form.Group>
                            
                            </Col>
                        </Row>

                        <Alert variant="primary">After typing attribute key and value press enter 
                        on the field</Alert>
                        

                        <Form.Group className="mb-3" controlId="productImage">
                            <Form.Label>Image file</Form.Label>
                            <Row>
                                <Col xs={3} style={{position:"relative"}}>
                                <Image src="/images/carousel/GBP.jpg" fluid crossOrigin="anonymous"></Image>
                                <FontAwesomeIcon icon={faX} className="text-danger" style={onHover}/> 
                                </Col>
                                <Col xs={3} style={{position:"relative"}}>
                                <Image src="/images/carousel/GBP.jpg" fluid crossOrigin="anonymous"></Image>
                                <FontAwesomeIcon icon={faX} className="text-danger" style={onHover}/> 
                                </Col>
                                
                            </Row>
                            <Form.Control 
                            required
                            type="file" 
                            name="procutImage"/>
                            <Form.Control.Feedback type="invalid">Please give an image</Form.Control.Feedback>
                        </Form.Group>
                        <Button variant="primary" type="submit">Update</Button>

                    </Form>
                
                </Col>

            </Row>
        </Container>
    )
}

export default AdminEditProductPage;