import React from 'react';
import Form from 'react-bootstrap/Form';

const ProductFormCheckBoxes = () => {
  return (
    <Form>
      {Array.from({lenght:5}).map((type) => (
        <div key={`default-${type}`} className="mb-3">
          <Form.Check // prettier-ignore
            type={type}
            id={`default-${type}`}
            label={`default ${type}`}
          />

          <Form.Check
            disabled
            type={type}
            label={`disabled ${type}`}
            id={`disabled-default-${type}`}
          />
        </div>
      ))}
    </Form>
  );
}

export default ProductFormCheckBoxes;