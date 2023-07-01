import React, { Fragment } from "react";
import ListGroup from 'react-bootstrap/ListGroup';
import Button from "react-bootstrap/esm/Button";
import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import ShortOptionsComponent from "../ShortOptionsComponent";
import PriceFilterComponent from "../PriceFilterComponent";
import RatingFilterComponent from "../RatingFilterComponent";
import ProductFormCheckBoxes from "./ProductFormCheckBoxes";
import ProductCheckBox from "./ProductCheckBox";
import ProductListComponent from "../ProductListComponent";
import PaginationComponent from "../PaginationComponent";
import CategoryFilterComponent from "../CategoryFilterComponent";
import AttributesFilterComponent from "../AttributesFilterComponent";
import axios from "axios";

const ProductListGroup = () => {
    //axios.get("/api/products").then((res)=>console.log(res));
  return (

    <Container fluid>
        <Row style={{marginBottom:200, marginTop:20}}>
            <Col md={3}>
                <ListGroup variant="flush">
                    <ListGroup.Item>
                        <ShortOptionsComponent />
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <PriceFilterComponent />
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <span style={{display:"block"}}><strong>Rating</strong></span>
                        {Array.from({length:5}).map((_,index)=>{
                            return <RatingFilterComponent key={index} inValue={5-index} item={index}/>
                        })
                        
                        }
                        
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <span className="fw-bold" style={{display:"block"}}>Category</span>
                        <CategoryFilterComponent />
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <AttributesFilterComponent label="color"/>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <Button variant="primary" style={{display:"block"}}>Filter</Button>
                        <Button variant="danger" style={{display:"block"}}>Reset filters</Button>
                    </ListGroup.Item>
                </ListGroup>
            </Col>
            <Col md={9}>
                {
                    Array.from({length:5}).map((_,idx) => {
                        return (
                            
                                <ProductListComponent key={idx}/>
                            
                        )
                    })
                }
                
                
               
                <PaginationComponent />
                
            </Col>
        </Row>
        
    </Container>

    
  );
}

export default ProductListGroup;