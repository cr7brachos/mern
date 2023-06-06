import React from "react";
import ProductCheckBox from "./bootstrap/ProductCheckBox";


const CategoryFilterComponent = () => {
    return (
        
        Array.from({length:5}).map((_,index) => {
            const it="Category-" + index
            return (
                
                
                    <div> 
                 
                        <ProductCheckBox label={it} key={index} idx={index} ap="2"/>
                    </div>
                
                
            )
        })
       
        
    )
}

export default CategoryFilterComponent;