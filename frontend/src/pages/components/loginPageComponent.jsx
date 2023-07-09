import React, { useState } from "react";
import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import { Link, useNavigate } from "react-router-dom";
import Spinner from 'react-bootstrap/Spinner';
import Alert from 'react-bootstrap/Alert';

const LoginPageComponent = ({ loginUserApiRequest, reduxDispatch, setReduxUserState }) => {

        const navigate = useNavigate();

        const [validated, setValidated] = useState(false);
        const [loginUserResponseState, setLoginUserResponseState] = useState({
            success:"", error:"", loading: false
        })

        
        const handleSubmit = (event) => {
            event.preventDefault();
            event.stopPropagation();

            const form = event.currentTarget.elements; //διότι θέλω να διαβάσω τις τμές του κάθε element ξεχωριστά

            const email = form.email.value;
            const password = form.password.value;
            const doNotLogout = form.doNotLogout.checked;

            if (event.currentTarget.checkValidity() === true && email && password) {

                setLoginUserResponseState({loading: true});

                loginUserApiRequest(email, password, doNotLogout)
                .then((res) => {setLoginUserResponseState({
                    success: res.success,
                    loading: false,
                    error: ""
                })

                if (res.userLoggedIn) {
                    reduxDispatch(setReduxUserState(res.userLoggedIn));
                }

                if (res.success === "user logged in" && !res.userLoggedIn.isAdmin) {
                    window.location.href = "/user"
                } else {
                    window.location.href = "/admin/orders"
                }
            
            })
                .catch((err) => setLoginUserResponseState({
                    error: err.response.data.message ? err.response.data.message : err.response.data}))
            
            }

            setValidated(true);
        };

    return (
           
        <Container>
            <Row className="mt-5 justify-content-md-center">
                <Col md={6}>
                    <h1>Login</h1>

                    <Form noValidate validated={validated} onSubmit={handleSubmit}>
                     
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
                                
                            />
                            <Form.Control.Feedback type="invalid">Please enter a password with more than 6 characters</Form.Control.Feedback>
                            <Form.Text>Password should have at least 6 characters</Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicCheckBox">
                            {/* <Form.Label>Email</Form.Label> */}
                            <Form.Check 
                                type="checkbox" 
                                name="doNotLogout"
                                label="Do not logout"
                            />
                            
                        </Form.Group>

                        
                        <Row className="pb-2">
                            <Col>
                                Don't you have an account?
                                <Link to={"/register"}> Register </Link>
                            </Col>
                        </Row>
                            
                        <Button type="submit" variant="primary">
                            {loginUserResponseState && loginUserResponseState.loading === true
                            ? (
                                <Spinner
                                as="span"
                                animation="border"
                                size="sm"
                                role="status"
                                aria-hidden="true"
                            />
                            ) : ("")}
                            
                                Login
                        </Button>
                        <Alert show={loginUserResponseState && loginUserResponseState.error 
                         === "wrong credentials"} variant="danger">Wrong credentials</Alert>
                        
                    </Form>
                    
                </Col>
            </Row>
        </Container>
    
    )
}

export default LoginPageComponent;