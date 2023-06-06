import React from 'react';
import Form from 'react-bootstrap/Form';

function ProductFormSelect() {
  return (
    <Form.Select aria-label="Default select example">
      <option>SORT BY</option>
      <option value="price_1">Price: Low to High</option>
      <option value="price_-1">Price: Hight to Low</option>
      <option value="rating_1">Customer Rating</option>
      <option value="name_1">Name A-Z</option>
      <option value="name_-1">Name Z-A</option>
    </Form.Select>
  );
}

export default ProductFormSelect;