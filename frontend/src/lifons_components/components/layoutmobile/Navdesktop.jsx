import React from 'react';
import { Navbar, Image, Button, Container, Col, Row } from 'react-bootstrap';
import './stylemobile.scss';

function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
        width,
        height
    };
}
function Navdesktop() {
    return (

        <Navbar sticky="top" bg="light" variant="light" style={{ width: "auto", height: "64px", zIndex: 100, background: "none" }}>
            <Container fluid>
                <Col xs sm lg xl={4}>
                    <Navbar.Brand>
                        <Image src="https://upload.wikimedia.org/wikipedia/commons/6/61/Interhyp_Gruppe_Logo_2018.svg"
                            fluid={true} />
                    </Navbar.Brand>
                </Col>
                <Col xs sm lg xl={6}></Col>
                <Col xs sm lg xl={2}>
                    <a href="/reg&login">
                        <Button variant="primary" size="lg" style={{ height: "50px" }} block>Jetzt bewerben</Button>
                    </a>
                </Col>
            </Container>
        </Navbar>

    );
}
export default Navdesktop;