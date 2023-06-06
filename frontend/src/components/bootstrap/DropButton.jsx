import React from "react";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

function DropButton() {
  return (
    <DropdownButton id="dropdown-basic-button" title="All">
      <Dropdown.Item>Electronics</Dropdown.Item>
      <Dropdown.Item>Cars</Dropdown.Item>
      <Dropdown.Item>Books</Dropdown.Item>
    </DropdownButton>
  );
}

export default DropButton;