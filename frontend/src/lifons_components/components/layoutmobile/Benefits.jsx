import React from 'react';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import ListGroup from 'react-bootstrap/ListGroup';
import {Container, Row, Col} from 'react-bootstrap';
import './stylemobile.scss';
import ResponsiveEmbed from 'react-bootstrap/ResponsiveEmbed';

function Benefits() {
    return (
        <Card style={{height: "auto", borderRadius: "0", border: "0"}}>
            <div style={{border: 0}}>
                <ResponsiveEmbed aspectRatio="16by9">
                    <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/uj1clZWZ4fc"
                            frameBorder="0"
                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen></iframe>
                </ResponsiveEmbed>
            </div>
            <Card.Body style={{borderRadius: 0}}>
                <Card.Text><h4 style={{fontWeight: 800}}>Benefits für Mitarbeiter</h4></Card.Text>
                <Card.Text style={{fontSize: ".95rem"}}>
                    Um unseren Kunden den Traum von einem eigenen Zuhause erfüllen zu können, benötigt es natürlich
                    glückliche und zufriedene Mitarbeiter. Wir sorgen uns um das Wohlergehen jedes Einzelnen und obwohl
                    Produktivität essenziell ist, wird auch Work-Life Balance bei uns ganz groß
                    geschrieben.
                </Card.Text>
                    <div style={{textAlign:"center", fontWeight:"bold", marginBottom:"50px", marginTop:"40px"}}>
                    <Card style={{marginBottom:"5px"}}><Card.Body>Kollegiales Umfeld</Card.Body></Card>
                    <Card style={{marginBottom:"5px"}}><Card.Body>Flache Hierarchien</Card.Body></Card>
                    <Card style={{marginBottom:"5px"}}><Card.Body>Gesundheitsvorsorge</Card.Body></Card>
                    <Card style={{marginBottom:"5px"}}><Card.Body>Vertrauensarbeitszeiten</Card.Body></Card>
                    <Card style={{marginBottom:"5px"}}><Card.Body>Kostenfreie Getränke</Card.Body></Card>
                    <Card style={{marginBottom:"5px"}}><Card.Body>Obst- und Kuchenzeit</Card.Body></Card>
                    <Card style={{marginBottom:"5px"}}><Card.Body>Modernste Technologien</Card.Body></Card>
                    <Card style={{marginBottom:"5px"}}><Card.Body>Strukturierte Lernmodule</Card.Body></Card>
                    </div>
                    <Container style={{marginTop: "3vh", textAlign: "center"}}>
                        <Row>
                            <Col><Image src={require("./imageThumbnail-5e2826c340cb9-1579689667.jpg")} style={{height:"100%", width:"100%"}}/></Col>
                            <Col><Image src={require("./imageThumbnail-5e2827526a385-1579689810.jpg")} style={{height:"100%", width:"100%"}}/></Col>
                        </Row>
                        <Row style={{marginTop: "2vh"}}>
                            <Col><Image src={require("./imageThumbnail-5e2827059b92c-1579689733.jpg")} style={{height:"100%", width:"100%"}}/></Col>
                            <Col><Image src={require("./imageThumbnail-5e2826c340cb9-1579689667.jpg")} style={{height:"100%", width:"100%"}}/></Col>
                        </Row>
                    </Container>
                <div className="row justify-content-center" style={{width: "100vw"}}>
                </div>
            </Card.Body>
        </Card>
    );
}

export default Benefits;