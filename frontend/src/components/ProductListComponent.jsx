import React from "react";
import ProductCard from "./bootstrap/ProductCard";
import {Rating} from "react-simple-star-rating";


const ProductListComponent = () => {
    return (
        <div>
            <ProductCard title="Test product" rating={<Rating readonly size={20} initialValue={5}/>}/>
        </div>
            
        
    )
}

export default ProductListComponent;