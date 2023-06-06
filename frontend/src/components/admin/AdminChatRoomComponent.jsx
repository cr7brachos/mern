import React, { Fragment, useState } from "react";
import Toast from "react-bootstrap/esm/Toast";
import Form from "react-bootstrap/esm/Form";
import FormGroup from "react-bootstrap/esm/FormGroup";
import FormLabel from "react-bootstrap/esm/FormLabel";
import Button from "react-bootstrap/esm/Button";


const AdminChatRoomComponent = () => {

    const [toast1, closeToast1] = useState(true);
    const close1 = () => closeToast1(false);

    const [toast2, closeToast2] = useState(true);
    const close2 = () => closeToast2(false);

    return (
        <>
            <Toast className="ms-4 mb-5" show={toast1} onClose={close1} >
                <Toast.Header>
                    <strong className="me-auto">Chat with John Doe</strong>
                </Toast.Header>
                <Toast.Body>
                    <div style={{
                        maxHeight:"500px",
                        overflow:"auto"
                    }}>

                        {Array.from({length:3}).map((_ , idx)=>{
                        return (
                            <Fragment key={idx}>
                                <p className="bg-primary p-3 ms-4 text-light rounded-pill">
                                    <b>User wrote:</b> Hellow world, this is a chat message
                                </p>
                                <p >
                                    <b>Admin wrote:</b> i am admin
                                </p>
                            </Fragment>
                            )
                        })}

                        <Form>
                            <FormLabel>Write a text</FormLabel>
                            <FormGroup className="mb-3" controlId="controlTextArea">
                                <Form.Control 
                                as="textarea"
                                rows={2}

                                />
                            </FormGroup>
                            
                            <Button type="submit" variant="success">Submit</Button>
                        </Form>

                    </div>
                    
                    
                    
                    
                </Toast.Body>
            </Toast>


            <Toast className="ms-4 mb-5" show={toast2} onClose={close2}>
                <Toast.Header>
                    <strong className="me-auto">Chat with Vassilis</strong>
                </Toast.Header>
                <Toast.Body>
                    <div style={{
                        maxHeight:"500px",
                        overflow:"auto"
                    }}>

                        {Array.from({length:5}).map((_ , idx)=>{
                        return (
                            <Fragment key={idx}>
                                <p className="bg-primary p-3 ms-4 text-light rounded-pill">
                                    <b>User wrote:</b> Hellow world, this is a chat message
                                </p>
                                <p >
                                    <b>Admin wrote:</b> i am admin
                                </p>
                            </Fragment>
                            )
                        })}

                        <Form>
                            <FormLabel>Write a text</FormLabel>
                            <FormGroup className="mb-3" controlId="controlTextArea">
                                <Form.Control 
                                as="textarea"
                                rows={2}

                                />
                            </FormGroup>
                            
                            <Button type="submit" variant="success">Submit</Button>
                        </Form>

                    </div>
                    
                    
                    
                    
                </Toast.Body>
            </Toast>

        </>
    )
}

export default AdminChatRoomComponent;