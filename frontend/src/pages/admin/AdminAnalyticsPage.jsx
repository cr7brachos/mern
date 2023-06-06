import React from "react";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col"
import AdmninLinksComponent from "../../components/admin/AdminLinksComponent";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import Form from "react-bootstrap/esm/Form";

const data = [
    {
      name: "12:00 AM",
      "2022 year": 4000,
      "2021 year": 4100,
      
    },
    {
        name: "13:00 AM",
        "2022 year": 4200,
        "2021 year": 4300,
        
      },
      {
        name: "14:00 AM",
        "2022 year": 4500,
        "2021 year": 4800,
        
      }

    
  ];

const AdminAnalyticsPage = () => {
    return (
        <Row className="m-5">
            <Col md={2}>
                <AdmninLinksComponent />
            </Col>

            <Col md={10} width="100%" height="100%">
                <h1>Black friday cumulative results</h1>
                <Form.Group controlId="firstDateToCompare">
                    <Form.Control type="date" name="first date to compare" placeholder="first date to compare">
                        
                    </Form.Control>
                </Form.Group> 
                <br />
                <Form.Group controlId="secondDateToCompare">
                    <Form.Control type="date" name="second date to compare" placeholder="second date to compare">
                        
                    </Form.Control>
                </Form.Group>
                <ResponsiveContainer width="100%" height="100%">
                    <LineChart
                        width={100}
                        height={100}
                        data={data}
                        margin={{
                            top: 5,
                            right: 30,
                            left: 20,
                            bottom: 5,
                        }}
                        >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Line type="monotone" dataKey="2021 year" stroke="#8884d8" activeDot={{ r: 8 }} />
                        <Line type="monotone" dataKey="2022 year" stroke="#82ca9d" />
                    </LineChart>
                </ResponsiveContainer>
            
            </Col>
        </Row>
    )
}

export default AdminAnalyticsPage;