import React from "react";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Table from 'react-bootstrap/Table';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencilSquare, faXmarkCircle } from '@fortawesome/free-solid-svg-icons';
import AdmninLinksComponent from "../../components/admin/AdminLinksComponent";
import Button from "react-bootstrap/esm/Button";
import { LinkContainer } from "react-router-bootstrap";


const deleteHandler = () => {
    
        if (window.confirm("are you sure?")) {
            alert("Product deleted"); 
        }
   
}

const AdminOrdersPage = () => {

    

    return (
        <Row className="mt-5">
            <Col md={2}>
                <AdmninLinksComponent />
            </Col>
            <Col md={10}>
                <h1>
                    Admin Products List {" "}
                    <LinkContainer to="/admin/create-product">
                        <Button variant="primary" size="lg">Create new product</Button>
                    </LinkContainer>
                    
                </h1>
                    <Table striped bordered hover responsive>
                        <thead>
                            <tr>
                            <th>#</th>
                            <th>Product name</th>
                            <th>Price</th>
                            <th>Category</th>
                            <th>Edit/Delete</th>
                            
                            </tr>
                        </thead>
                        <tbody>
                            {[
                                {name:"Panasonic", price: "€124", category:"TV"}, 
                                {name:"Lenovo", price: "€324", category:"Laptops"}, 
                                {name:"Lenovo", price: "€324", category:"Laptops"}
                            ].map((item, idx) => {
                                return (
                                    <tr key={idx}>
                                        <td>{idx+1}</td>
                                        <td>{item.name}</td>
                                        <td>{item.price}</td>
                                        <td>{item.category}</td>
                                        <td>
                                            <LinkContainer to="/admin/edit-product">
                                                <Button className="btn-sm">
                                                    <FontAwesomeIcon icon={faPencilSquare}/> 
                                                </Button>                                            
                                            </LinkContainer>
                                            { " / "}
                                            
                                            <Button className="btn-sm" variant="danger" onClick={deleteHandler}>
                                                <FontAwesomeIcon icon={faXmarkCircle}/> 
                                            </Button>                                            
                                            

                                            
                                        </td>
                                        
                                        
                                    </tr>
                                )
                            })}
                            
                            
                            
                        </tbody>
                    </Table>

            </Col>
        </Row>
    )
}

export default AdminOrdersPage;