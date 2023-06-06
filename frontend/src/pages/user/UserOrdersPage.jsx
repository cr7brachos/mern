import React from "react";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Table from 'react-bootstrap/Table';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faX } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";


const UserOrdersPage = () => {
    return (
        <Row className="mt-5">
            <Col md={12}>
                <h1>My orders</h1>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                            <th>#</th>
                            <th>User name</th>
                            <th>Date</th>
                            <th>Total</th>
                            <th>Delivered</th>
                            <th>Order details</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Mark Doe</td>
                                <td>03-06-2023</td>
                                <td>€124</td>
                                <td>
                                    <FontAwesomeIcon icon={faCheck} className="text-success"/> 
                                </td>
                                <td>
                                    <Link to="/user/order-details">go to order details</Link>
                                </td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>John Doe</td>
                                <td>03-06-2023</td>
                                <td>€180</td>
                                <td>
                                    <FontAwesomeIcon icon={faX} className="text-danger"/> 
                                </td>
                                <td>
                                    <Link to="/user/order-details">go to order details</Link>
                                </td>
                            </tr>
                            
                        </tbody>
                    </Table>

            </Col>
        </Row>
    )
}

export default UserOrdersPage;