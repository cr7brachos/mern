import React from "react";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Table from 'react-bootstrap/Table';
import AdmninLinksComponent from "../../components/admin/AdminLinksComponent";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faPencilSquare, faXmarkCircle } from '@fortawesome/free-solid-svg-icons';
import { LinkContainer } from "react-router-bootstrap";
import Button from "react-bootstrap/esm/Button";

const deleteHandler = () => {
    
    if (window.confirm("are you sure?")) {
        alert("Product deleted"); 
    }

}

const AdminUsersPage = () => {
    return (
        <Row className="mt-5">
            <Col md={2}>
                <AdmninLinksComponent />
            </Col>
            <Col md={10}>
                <h1>My users</h1>
                    <Table striped bordered hover responsive>
                        <thead>
                            <tr>
                            
                            <th>First name</th>
                            <th>Last name</th>
                            <th>Email</th>
                            <th>Is admin</th>
                            <th>Edit-Delete</th>
                            
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Vassilis</td>
                                <td>Brachos</td>
                                <td>cr7brachos@gmail.com</td>
                                <td>
                                <FontAwesomeIcon icon={faCheck} className="text-success"/>   
                                </td>
                                <td>
                                <LinkContainer to="/admin/edit-user">
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
                            
                            
                        </tbody>
                    </Table>

            </Col>
        </Row>
    )
}

export default AdminUsersPage;