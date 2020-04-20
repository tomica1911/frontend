import React from 'react';
import './stylemobile.scss';
import {Container, Row, Col, Button} from 'react-bootstrap';

function Closing() {
    return(
        <div style={{backgroundColor:"#579eb0"}}>
        <Container fluid>
            <Row style={{height:"15vh"}}></Row>
            <Row style={{height:"25vh"}}>
                <Col></Col>
                <Col sm={6}>
                    <div className="closingbody">Wir haben dein Interesse geweckt?</div>
                    <a href="/reg&login">
                    <Button variant="outline-light" size="lg" block style={{color:"black", textAlign:"center", fontWeight:"bold", fontSize:"2rem"}}>Jetzt bewerben</Button>
                    </a>
                </Col>
                <Col></Col>
            </Row>
            <Row style={{height:"15vh"}}></Row>
        </Container>
        </div>
    )
}

export default Closing;