import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Badge from 'react-bootstrap/Badge';
import Form from 'react-bootstrap/Form';
import DropButton from "./bootstrap/DropButton";
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import { LinkContainer } from 'react-router-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom";


       

const Header = ()=> {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        
        <LinkContainer to="/"> 
            <Navbar.Brand>BEST ONLINE SHOP</Navbar.Brand>
        </LinkContainer>
        
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
                <InputGroup>
                    <DropButton />
                    <Form.Control type="text" placeholder="Search to shop..." />
                    <Button variant="warning"><FontAwesomeIcon icon={faMagnifyingGlass} />  </Button> 
                    
                </InputGroup>
            </Nav>

            <Nav className="me-auto">
                <LinkContainer to="/admin/orders">
                    <Nav.Link>
                        Admin
                        {/* το πιο κάτω εμφανίζει τη κόκκινη τελεία πάνω από αντικείμενο */}
                        <span className="position-absolute top-1 start-10 translate-middle p-2 bg-danger border border-light rounded-circle"></span>
                    </Nav.Link>
                </LinkContainer>
                
                
                

                <NavDropdown title="John Doe" id="collasible-nav-dropdown">
                    {/* το δηλώνουμε ως Link που οδηγεί στο  /user/my-orders, ενω το eventKey="/user/my-orders" κάνει μπλε τη σελίδα στην οποία είμαστε*/}
                    <NavDropdown.Item as={Link} to="/user/my-orders" eventKey="/user/my-orders">My orders</NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/user" eventKey="/user">My profile</NavDropdown.Item>
                    <NavDropdown.Item>Logout</NavDropdown.Item>
                </NavDropdown>

                <LinkContainer to="/login">
                    <Nav.Link>Login</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/register">
                    <Nav.Link>Register</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/cart">
                    <Nav.Link>
                        <Badge pill bg="danger">r</Badge>
                        <FontAwesomeIcon icon={faCartShopping} />
                        <span className="ms-l">Cart</span> 
                        
                    </Nav.Link>
                </LinkContainer>

            </Nav>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}



export default Header;