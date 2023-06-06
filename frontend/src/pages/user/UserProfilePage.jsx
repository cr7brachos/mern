import React, { useState } from "react";
import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";
import Spinner from 'react-bootstrap/Spinner';
import Alert from 'react-bootstrap/Alert';

const UserProfilePage = () => {

        const [validated, setValidated] = useState(false);

        // ελέγχει εάν τα δύο password είναι ίδια
        const onChange = () => {
            const password = document.querySelector("input[name= password]"); //διαβάζει το input με name=password
            const confirm = document.querySelector("input[name = confirmPassword]"); //διαβάζει το input με name=confirmPassword
            if (confirm.value === password.value) { //εάν οι δύο τιμές είναι ίδιες τότε σετάρει το setCustomValidity του confirmPassword 
                confirm.setCustomValidity("");
            } else {
                confirm.setCustomValidity("Passwords do not match");
            }
        }

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
                <Col md={6}>
                    <h1>User profile</h1>

                    <Form noValidate validated={validated} onSubmit={handleSubmit}>
                        
                        <Form.Group className="mb-3" controlId="formFirstName">
                            <Form.Label>Your first name</Form.Label>
                            <Form.Control 
                            required type="text" 
                            defaultValue="John" 
                            name="name"/>
                            <Form.Control.Feedback type="invalid">Please enter your first name</Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formLastName">
                            <Form.Label>Your last name</Form.Label>
                            <Form.Control 
                            required type="text" 
                            defaultValue="Boe" 
                            name="lastName"/>
                            <Form.Control.Feedback type="invalid">Please enter your last name</Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control 
                            disabled
                            value="email" 
                            name="email"/>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPhone">
                            <Form.Label>Phone number</Form.Label>
                            <Form.Control 
                            type="text"
                            placeholder="enter your phone number"
                            defaultValue=""
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicAddress">
                            <Form.Label>Address</Form.Label>
                            <Form.Control 
                            type="text"
                            placeholder="enter your street name and house number"
                            defaultValue=""
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicCountry">
                            <Form.Label>Country</Form.Label>
                            <Form.Control 
                            type="text"
                            placeholder="enter your country"
                            defaultValue=""
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicZip">
                            <Form.Label>Zip code</Form.Label>
                            <Form.Control 
                            type="text"
                            placeholder="enter your zip code"
                            defaultValue=""
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicCity">
                            <Form.Label>City</Form.Label>
                            <Form.Control 
                            type="text"
                            placeholder="enter your city"
                            defaultValue=""
                            />
                        </Form.Group>     

                        <Form.Group className="mb-3" controlId="formBasicState">
                            <Form.Label>State</Form.Label>
                            <Form.Control 
                            type="text"
                            placeholder="enter your state"
                            defaultValue=""
                            />
                        </Form.Group>                      


                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Your password</Form.Label>
                            <Form.Control 
                                required 
                                type="password" 
                                placeholder="Enter your password" 
                                name="password"
                                minLength={6}
                                onChange={onChange}
                            />
                            <Form.Control.Feedback type="invalid">Please enter a password with more than 6 characters</Form.Control.Feedback>
                            <Form.Text>Password should have at least 6 characters</Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPasswordRepeat">
                            <Form.Label>Confirm password</Form.Label>
                            <Form.Control 
                                required 
                                type="password" 
                                placeholder="Repeat password" 
                                name="confirmPassword"
                                minLength={6}
                                onChange={onChange}
                            />
                            <Form.Control.Feedback type="invalid">Both passwords should match</Form.Control.Feedback>
                            <Form.Text>Password should have at least 6 characters</Form.Text>
                        </Form.Group>
                        
                            
                        <Button type="submit" variant="primary">
                            Update
                        </Button>

                        <Alert show={true} variant="danger">User with this email already exist</Alert>
                        <Alert show={true} variant="info">User updated !</Alert>
                    </Form>
                    
                </Col>
            </Row>
        </Container>
    
    )
}

export default UserProfilePage;