import React from "react";
import Form from 'react-bootstrap/Form';

const AttributesFilterComponent = (props) => {
    return (

        <>
            {[{color:["red", "blue", "green"]}, {ram:["1 TB", "2 TB"]}].map((item, idx)=>{
                return (
                    <div key={idx} className="mb-3"> 
                        <Form.Label>
                            <b>{Object.keys(item)}</b>
                        </Form.Label>

                        {item[Object.keys(item)].map((i, idx) => {
                        return (
                            <Form.Check key={idx} type="checkbox" id="default-checkbox" label={i}></Form.Check>
                        )
                    })

                    }

                    </div>
                    
                )
                
                

            })}
            

            
        </>
    )
}

export default AttributesFilterComponent;

