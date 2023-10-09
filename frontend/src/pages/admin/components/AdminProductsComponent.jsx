import React, { useState, useEffect } from "react";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Table from 'react-bootstrap/Table';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencilSquare, faXmarkCircle } from '@fortawesome/free-solid-svg-icons';
import AdmninLinksComponent from "../../../components/admin/AdminLinksComponent";
import Button from "react-bootstrap/esm/Button";
import { LinkContainer } from "react-router-bootstrap";




const AdminProductComponents = ({fetchAdminProducts, deleteProduct}) => {

    const [products, setProducts] = useState([]);
    const [productDeleted, setProductDeleted] = useState(false);

    const deleteHandler = async (productId) => {
    
        if (window.confirm("are you sure 555?")) {
            const data = await deleteProduct(productId)
            if (data === "product removed") {
                setProductDeleted(!productDeleted);
            }
        }
   
}

    useEffect(() => {
        const abctrl = new AbortController();
        fetchAdminProducts(abctrl).then(res => setProducts(res)).catch((err) => console.log(err));
        return () => abctrl.abort;
    }, [productDeleted]);

    return (
        <Row className="mt-5" style={{marginBottom:"150px"}} > 
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
                            {products.map((item, idx) => {
                                return (
                                    <tr key={idx}>
                                        <td>{idx+1}</td>
                                        <td>{item.name}</td>
                                        <td>{item.price}</td>
                                        <td>{item.category}</td>
                                        <td>
                                            <LinkContainer to={`/admin/edit-product/${item._id}`}>
                                                <Button className="btn-sm">
                                                    <FontAwesomeIcon icon={faPencilSquare}/> 
                                                </Button>                                            
                                            </LinkContainer>
                                            { " / "}
                                            
                                            <Button className="btn-sm" 
                                                    variant="danger" 
                                                    onClick={() => deleteHandler(item._id)}>
                                                    
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

export default AdminProductComponents;