import React, { useState, useEffect } from "react";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Table from 'react-bootstrap/Table';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faX } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";
import AdmninLinksComponent from "../../../components/admin/AdminLinksComponent.jsx";


const AdminOrdersComponents = ({fetchAdminOrder}) => {

    const [orders, setOrders] = useState([]);

    useEffect(() => {
        const abctrl = new AbortController();
        fetchAdminOrder(abctrl).then( res => setOrders(res)).catch(err => console.log(err));
        return () => abctrl.abort;
    },[]);

   console.log(orders);

    return (
        <Row className="mt-5" style={{marginBottom:"150px"}}>
            <Col md={2}>
                <AdmninLinksComponent />
            </Col>
            <Col md={10}>
                <h1>My orders</h1>
                    <Table striped bordered hover responsive>
                        <thead>
                            <tr>
                            <th>#</th>
                            <th>User name</th>
                            <th>Date</th>
                            <th>Total</th>
                            <th>Delivered</th>
                            <th>Payment method</th>
                            <th>Order details</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                orders.map((order, idx) => {
                                    return (
                                        <tr key={idx}>
                                            <td>{idx+1}</td>
                                            {/* το ? ελεγχει εάν το object υπάρχει ή είναι null */}
                                            <td>{order.user?.name ? order.user.name : "null"}</td> 
                                            <td>{order.createdAt.substring(0, 10)}</td>
                                            <td>{order.orderTotal.cartSubTotal}</td>
                                            <td>
                                            {order.isDelivered ? <FontAwesomeIcon icon={faCheck} className="text-success"/> : <FontAwesomeIcon icon={faX} className="text-danger"/>}
                                                 
                                            </td>
                                            <td>PayPal </td>
                                            <td>
                                                <Link to={`/admin/order-details/${order._id}`}>go to order details</Link>
                                            </td>
                                        </tr>
                                    )
                                    
                                })
                            }
                            
                            
                            
                        </tbody>
                    </Table>

            </Col>
        </Row>
    )
}

export default AdminOrdersComponents;