import React, { useState } from "react";
import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";
import Spinner from 'react-bootstrap/Spinner';
import Alert from 'react-bootstrap/Alert';

const RegisterPage = () => {

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
           
        <Container>
            <Row className="mt-5 justify-content-md-center">
                <Col md={6}>
                    <h1>Register</h1>

                    <Form noValidate validated={validated} onSubmit={handleSubmit}>
                        
                        <Form.Group className="mb-3" controlId="formFirstName">
                            <Form.Label>Your first name</Form.Label>
                            <Form.Control required type="text" placeholder="Enter your first name" name="name"/>
                            <Form.Control.Feedback type="invalid">Please enter your first name</Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formLastName">
                            <Form.Label>Your last name</Form.Label>
                            <Form.Control required type="text" placeholder="Enter your last name" name="lastName"/>
                            <Form.Control.Feedback type="invalid">Please enter your last name</Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control required type="email" placeholder="Enter your email" name="email"/>
                            <Form.Control.Feedback type="invalid">Please enter a valid email address</Form.Control.Feedback>
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
                        <Row className="pb-2">
                            <Col>
                                Do you have an account already?
                                <Link to={"/login"}> Login </Link>
                            </Col>
                        </Row>
                            
                        <Button type="submit">
                            <Spinner
                                as="span"
                                animation="border"
                                size="sm"
                                role="status"
                                aria-hidden="true"
                            />
                                Submit
                        </Button>
                        <Alert show={true} variant="danger">User with this email already exist</Alert>
                        <Alert show={true} variant="info">User created !</Alert>
                    </Form>
                    
                </Col>
            </Row>
        </Container>
    
    )
}

export default RegisterPage;