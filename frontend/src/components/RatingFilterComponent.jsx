import React from "react";
import ProductCheckBox from "./bootstrap/ProductCheckBox";
import {Rating} from "react-simple-star-rating";

const RatingFilterComponent = (props) => {
    return (
        <div>
            <ProductCheckBox idx={props.item} rating={<Rating readonly size={20} initialValue={props.inValue} ap="1"/>}/>
            
            
        </div>
    )
}

export default RatingFilterComponent;