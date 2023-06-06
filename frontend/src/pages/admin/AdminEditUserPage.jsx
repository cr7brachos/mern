import React, {useState} from "react";
import Container from "react-bootstrap/esm/Container";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
import { LinkContainer } from "react-router-bootstrap";
import Button from "react-bootstrap/esm/Button";
import Form from 'react-bootstrap/Form';





const AdminEditUserPage = () => {

    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
        }

        setValidated(true);
        event.preventDefault();
        event.stopPropagation();
    };

    

    return (
        <Container style={{marginBottom:"150px"}}>
            <Row className="mt-5 justify-content-md-center">
                <Col md={1}>
                    <LinkContainer to="/admin/users">
                        <Button variant="primary" className="my-3">Go back</Button>
                    </LinkContainer>
                </Col>
                <Col md={6}>
                    <h1>Edit user</h1>
                    <Form noValidate validated={validated} onSubmit={handleSubmit}>
                        
                        <Form.Group className="mb-3" controlId="userFirstName">
                            <Form.Label>First name</Form.Label>
                            <Form.Control 
                            required 
                            type="text" 
                            name="userName"
                            defaultValue="Vassilis"/>
                            <Form.Control.Feedback type="invalid">Please enter a user first name</Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="userLastName">
                            <Form.Label>Last name</Form.Label>
                            <Form.Control 
                            required 
                            type="text" 
                            defaultValue="Brachos"
                            name="userLastName"
                            />
                            <Form.Control.Feedback type="invalid">Please enter a product description</Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="userEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control 
                            required 
                            type="email" 
                            defaultValue="test@test.com"
                            name="userEmail"/>
                            <Form.Control.Feedback type="invalid">Please enter a valid email</Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="isAdmin">
                            <Form.Label>Admin</Form.Label>
                            <Form.Check 
                            
                            type="checkBox" 
                            defaultValue="true"
                            name="isAdmin"/>
                            
                        </Form.Group>

                        
                        <Button variant="primary" type="submit">Create</Button>

                    </Form>
                
                </Col>

            </Row>
        </Container>
    )
}

export default AdminEditUserPage;