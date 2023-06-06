import React from "react";
import ProductCarousel from "../components/bootstrap/ProductCarousel";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ProductCard from "../components/bootstrap/ProductCard";

const HomePage = () => {

    const categories = [
        "Tablets", 
        "Monitors",
        "Games",
        "Printers"
    ];

    


    return (

        
            <>
                <ProductCarousel />

                <Container>
                    <Row style={{marginBottom:100}} xs={1} md={2} className="g-4 mt-5" >
                        {
                            categories.map((item, index)=> <ProductCard title={item} key={index} index={index}/>)
                        
                   
                        }
                
                    </Row>
                </Container>

                

            </>
                
                    
               
           
            
            
        


        
    
    
        )
}

export default HomePage;