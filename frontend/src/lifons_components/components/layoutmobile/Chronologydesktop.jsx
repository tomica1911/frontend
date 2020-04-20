import React, {Component} from 'react';
import {Container, Row, Col, Card} from 'react-bootstrap';
import Timeline from './Timeline';
import ResponsiveEmbed from "react-bootstrap/ResponsiveEmbed";

class Chronologydesktop extends Component {
    render() {
        return (
            <React.Fragment>
                <Container fluid style={{backgroundColor:"#579eb0"}}>
                        <Row style={{height:"320px"}}>
                            <Col></Col>
                            <Col sm={6}><h4 style={{fontWeight: 800, fontSize:"2vw", color: "white", paddingTop:"70px"}}>Inhalt und Ablauf</h4>
                            <p style={{fontSize:"1vw", color:"white"}}>Deine Ausbildung bei uns dauert 3 Jahre.<br/>Es besteht die Möglichkeit auf
                                Verkürzung bei guten Leistungen.<br/>
                                Hierbei bist Du abwechselnd jeweils in der Berufsschule und im Betrieb.
                            </p>
                            </Col>
                            <Col></Col>
                        </Row>
                    <Row style={{}}>
                        <Col></Col>
                        <Col sm ={5} style={{padding:"0"}}>
                            <Card style={{borderRadius:"0", border:"0"}}>
                            <Card.Header style={{textAlign:"center", fontSize:"2vw", fontWeight:"800", color:"white", backgroundColor:"#579eb0", border:"0"}}>Berufsschule</Card.Header>
                            <ResponsiveEmbed aspectRatio="16by9" style={{height:"100%", width:"100%"}}>
                                <iframe width="600" height="400" id="gmap_canvas"
                                        src="https://maps.google.com/maps?q=bs%20info&t=&z=13&ie=UTF8&iwloc=&output=embed"
                                        frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0"></iframe>
                            </ResponsiveEmbed>
                            </Card>
                        </Col>
                        <Col></Col>
                        <Col sm ={5} style={{padding:"0"}}>
                            <Card style={{borderRadius:"0", border:"0"}}>
                                <Card.Header style={{textAlign:"center", fontSize:"2vw", fontWeight:"800", color:"white", backgroundColor:"#579eb0", border:"0"}}>Betrieb</Card.Header>
                            <ResponsiveEmbed aspectRatio="16by9" style={{height:"100%", width:"100%"}}>
                                <iframe width="600" height="400" id="gmap_canvas"
                                        src="https://maps.google.com/maps?q=interhyp%20m%C3%BCnchen&t=&z=13&ie=UTF8&iwloc=&output=embed"
                                        frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0"></iframe>
                            </ResponsiveEmbed>
                            </Card>
                        </Col>
                        <Col></Col>
                    </Row>
                    <Row style={{height:"190px"}}></Row>
                </Container>
            </React.Fragment>
        );
    }
}

export default Chronologydesktop;