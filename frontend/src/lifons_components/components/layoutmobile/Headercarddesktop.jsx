import React from 'react';
import { Container, Row, Col, Button} from 'react-bootstrap';
import './stylemobile.scss';

function Headercarddesktop() {
    return (
        <div
            style={{
                backgroundImage: `url("https://jobs.interhyp.de/uploads/contents/headers/ea13df62-1610-42f3-a546-22c00e3db4d1/image-5e2018563d29a-1579161686.jpg")`,
                backgroundSize: "cover",
                padding: "0"
            }}>
            <Container fluid style={{height: "93.4vh"}}>
                <Row style={{height: "27vh"}}></Row>
                <Row>
                    <Col sm={1}></Col>
                    <Col sm={5}>
                        <h3 style={{
                            fontWeight: "bold",
                            color: "white",
                            fontSize: "3vw"
                        }}>FACHINFORMATIKER FÜR ANWENDUNGSENTWICKLUNG (W/M/X)</h3>
                        <p style={{fontSize: "2vw", color: "white"}}>
                            Interhyp AG München
                            </p>
                        <Button variant="primary" size="lg" block style={{
                            backgroundColor: "#579eb0",
                            color: "white",
                            textAlign: "center",
                            border: "none",
                            fontWeight: "800",
                            fontSize: "2vw"
                        }}>Jetzt einfach bewerben</Button>
                    </Col>
                    <Col></Col>
                </Row>
                <Row style={{height: "6.6vh"}}>
                </Row>
            </Container>
        </div>
    );
}

export default Headercarddesktop;