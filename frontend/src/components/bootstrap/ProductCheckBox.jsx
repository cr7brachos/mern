import { faDisplay } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import Form from 'react-bootstrap/Form';


const ProductCheckBox = (props) => {
  return (
    <>
        <Form.Label style={{cursor:"pointer"}}>{props.label}</Form.Label>
        {/* id={`check-api-${props.idx}`} : αυτό βλέπει πιο checkbox είναι κλικαρισμένο */}
        <Form.Check type="checkbox" id={`check-api${props.ap}-${props.idx}`} aria-label="option 1" style={{display:"inline"}}>
          <Form.Check.Input type="checkbox" isValid style={{cursor:"pointer"}}/>
          <Form.Check.Label style={{cursor:"pointer"}}>
            {props.rating}
          </Form.Check.Label>
          
          
          
        </Form.Check>

      
    </>
    
  );
}

export default ProductCheckBox;