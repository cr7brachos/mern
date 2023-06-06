import React from "react";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import AdminChatRoomComponent from "../../components/admin/AdminChatRoomComponent";
import AdmninLinksComponent from "../../components/admin/AdminLinksComponent";

const AdminChatsPage = () => {
    return (
        <Row style={{marginBottom:"150px"}}>
            <Col md={2}>
                <AdmninLinksComponent />
            </Col>

            <Col md={10}>
                <AdminChatRoomComponent />
            </Col>
        </Row>
    )
}

export default AdminChatsPage;