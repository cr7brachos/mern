import React, {useState, useEffect} from "react";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Table from 'react-bootstrap/Table';
import AdmninLinksComponent from "../../../components/admin/AdminLinksComponent.jsx";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faPencilSquare, faX, faXmarkCircle } from '@fortawesome/free-solid-svg-icons';
import { LinkContainer } from "react-router-bootstrap";
import Button from "react-bootstrap/esm/Button";



const UsersPageComponent = ({fetchUsers, deleteUser}) => {

    const [users, setUsers] = useState([]);
    const [userDeleted, setUserDeleted] = useState(false);

    const deleteHandler = async (userId) => {
        
        if (window.confirm("are you sure?")) {
            const data = await deleteUser(userId); 
            if (data === "user removed") {
                setUserDeleted(!userDeleted);
            }
        }
    
    }

    useEffect(() => {
        const abctrl = new AbortController();
        fetchUsers(abctrl).then(res => setUsers(res))
                        .catch((err) => console.log(err));
        return () => abctrl.abort;

    }, [userDeleted]); //;άδειο [] σημαίνει να εκτελείται μόνο μια φορά

    return (
        <Row className="mt-5">
            <Col md={2}>
                <AdmninLinksComponent />
            </Col>
            <Col md={10}>
                <h1>My users</h1>
                
                    <Table striped bordered hover responsive>
                        <thead>
                            <tr>
                            
                            <th>First name</th>
                            <th>Last name</th>
                            <th>Email</th>
                            <th>Is admin</th>
                            <th>Edit-Delete</th>
                            
                            </tr>
                        </thead>
                        <tbody>
                            { users.map((user, idx) => (
                                <tr key={idx}>
                                <td>{user.name}</td>
                                <td>{user.lastName}</td>
                                <td>{user.email}</td>
                                <td>
                                {user.isAdmin ? <FontAwesomeIcon icon={faCheck} className="text-success"/> :
                                <FontAwesomeIcon icon={faX} className="text-danger"/>
                                }
                                  
                                </td>
                                <td>
                                {/* η πιο κάτω σύνταξη χρησιμοποιείται προκειμένου να έχουμε 
                                δυναμικό περιεχόμενο μέσα σε text */}
                                <LinkContainer to={`/admin/edit-user/${user._id}`}> 
                                    <Button className="btn-sm">
                                                    <FontAwesomeIcon icon={faPencilSquare}/> 
                                                </Button>                                            
                                            </LinkContainer>
                                            { " / "}
                                            
                                            <Button className="btn-sm" 
                                                    variant="danger" 
                                                    onClick={ () => deleteHandler(user._id)}>
                                                <FontAwesomeIcon icon={faXmarkCircle}/> 
                                        </Button>        
                                </td>
                            </tr>
                            )) }
                            
                            
                            
                        </tbody>
                    </Table>

            </Col>
        </Row>
    )
}

export default UsersPageComponent;

