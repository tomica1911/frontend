import React from 'react';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import ListGroup from 'react-bootstrap/ListGroup';
import {Container, Row, Col} from 'react-bootstrap';
import './stylemobile.scss';
import ResponsiveEmbed from 'react-bootstrap/ResponsiveEmbed';

function Benefitsdesktop() {
    return (
        <div>
            <Container fluid>
                <Row>
                    <Col sm={6} style={{padding: "0"}}>
                        <div style={{width: 'auto', height: 'auto'}}>
                            <ResponsiveEmbed aspectRatio="16by9">
                                <iframe width="560" height="315"
                                        src="https://www.youtube-nocookie.com/embed/uj1clZWZ4fc"
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen></iframe>
                            </ResponsiveEmbed>
                        </div>
                    </Col>
                    <Col sm={6} style={{padding: "0"}}>
                        <Card style={{borderRadius: "0", height: "100%"}}>
                            <Card.Header
                                style={{fontWeight: 800, fontSize: "2vw", backgroundColor: "#579eb0", color: "white"}}>Der
                                Interhyp Campus</Card.Header>
                            <Card.Body>
                                <Card.Title style={{fontWeight: "600", fontSize: "1.5vw"}}>Unsere Ideenschmiede in
                                    München</Card.Title><Card.Text style={{fontSize: "1.2vw"}}>
                                Für kreative Lösungen braucht man kreativen Raum – auch wortwörtlich. Deshalb ist seit
                                Anfang 2017 der Interhyp Campus die Heimat für die Entwicklung unserer digitalen
                                Produkte. Eine offene Arbeitsatmosphäre, viele Kollaborationsflächen und zahlreiche
                                Rückzugsorte stehen unseren 130 Engineers, Product Ownern, UX- und Service Designern zur
                                Verfügung und treiben unsere agile Arbeitsweise an. Hier werden inhouse die ersten
                                Konzeptideen über Prototypen und MVPs bis zu den finalen Anwendungen produziert – immer
                                in eigenverantwortlichen Teams und einer modernen Arbeitsatmosphäre.
                            </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <div style={{borderRadius: 0}}>
                    <Row>
                        <Col></Col>
                        <Col sm={6}>
                            <h4 style={{fontWeight: 800, fontSize: "2vw", marginTop: "50px", marginBottom:"30px", textAlign:"center"}}>Benefits für Mitarbeiter</h4>
                            <div style={{fontSize: "1vw", marginBottom: "50px", textAlign:"center"}}>
                                <p>Um unseren Kunden den Traum von einem eigenen Zuhause erfüllen zu können, benötigt es
                                    natürlich
                                    glückliche und zufriedene Mitarbeiter. Wir sorgen uns um das Wohlergehen jedes
                                    Einzelnen und obwohl Produktivität essenziell ist, wird auch Work-Life Balance bei
                                    uns
                                    ganz
                                    groß
                                    geschrieben.</p>
                            </div>
                        </Col>
                        <Col></Col>
                    </Row>
                    <Row style={{textAlign: "center"}}>
                        <Col></Col>
                        <Col style={{padding: "0"}}>
                            <Card style={{borderRadius: "0", borderBottom: "0", height: "100%", width: "100%"}}>
                                <Card.Header style={{
                                    fontSize: "1.3vw",
                                    backgroundColor: "#579eb0",
                                    color: "white",
                                    borderRadius: "0"
                                }}>Kollegiales
                                    Umfeld</Card.Header>
                                <Card.Body className="benefitcards">
                                    <Card.Text>
                                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et
                                    </Card.Text></Card.Body>
                            </Card>
                        </Col>
                        <Col style={{padding: "0"}}>
                            <Card style={{borderRadius: "0", borderBottom: "0", height: "100%", width: "100%"}}>
                                <Card.Header style={{
                                    fontSize: "1.3vw",
                                    backgroundColor: "#579eb0",
                                    color: "white",
                                    borderRadius: "0",
                                    textAlign: "center"
                                }}>Flache
                                    Hierarchien</Card.Header>
                                <Card.Body className="benefitcards">
                                    <Card.Text>
                                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et
                                    </Card.Text></Card.Body>
                            </Card>
                        </Col>
                        <Col></Col>
                    </Row>
                    <Row style={{textAlign: "center"}}>
                        <Col></Col>
                        <Col style={{padding: "0"}}><Card
                            style={{borderRadius: "0", borderBottom: "0", height: "100%", width: "100%"}}><Card.Header
                            style={{
                                fontSize: "1.3vw",
                                backgroundColor: "#579eb0",
                                color: "white",
                                borderRadius: "0",
                                textAlign: "center"
                            }}>Gesundheitsvorsorge</Card.Header>
                            <Card.Body className="benefitcards">
                                <Card.Text>
                                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et
                                </Card.Text></Card.Body>
                        </Card> </Col><Col style={{padding: "0"}}><Card
                        style={{borderRadius: "0", borderBottom: "0", height: "100%", width: "100%"}}><Card.Header
                        style={{
                            fontSize: "1.3vw",
                            backgroundColor: "#579eb0",
                            color: "white",
                            borderRadius: "0"
                        }}>Vertrauensarbeitszeiten</Card.Header>
                        <Card.Body className="benefitcards">
                            <Card.Text>
                                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et
                            </Card.Text></Card.Body>
                    </Card>
                    </Col>
                        <Col></Col>
                    </Row>
                    <Row style={{textAlign: "center"}}>
                        <Col></Col>
                        <Col style={{padding: "0"}}><Card
                            style={{borderRadius: "0", height: "100%", width: "100%"}}><Card.Header
                            style={{fontSize: "1.3vw", backgroundColor: "#579eb0", color: "white", borderRadius: "0"}}>Kostenfreie
                            Getränke</Card.Header>
                            <Card.Body className="benefitcards">
                                <Card.Text>
                                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et
                                </Card.Text>
                            </Card.Body>
                        </Card> </Col><Col style={{padding: "0"}}><Card
                        style={{borderRadius: "0", height: "100%", width: "100%"}}><Card.Header
                        style={{fontSize: "1.3vw", backgroundColor: "#579eb0", color: "white", borderRadius: "0"}}>Obst-
                        und
                        Kuchenzeit</Card.Header>
                        <Card.Body className="benefitcards">
                            <Card.Text>
                                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et
                            </Card.Text></Card.Body>
                    </Card></Col><Col></Col>
                    </Row><Row style={{textAlign: "center"}}><Col></Col><Col style={{padding: "0"}}><Card
                    style={{borderRadius: "0", height: "100%", width: "100%"}}><Card.Header
                    style={{fontSize: "1.3vw", backgroundColor: "#579eb0", color: "white", borderRadius: "0"}}>Modernste
                    Technologien</Card.Header>
                    <Card.Body className="benefitcards">
                        <Card.Text>
                            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et
                        </Card.Text></Card.Body>
                </Card></Col><Col style={{padding: "0"}}><Card
                    style={{borderRadius: "0", height: "100%", width: "100%"}}><Card.Header
                    style={{fontSize: "1.3vw", backgroundColor: "#579eb0", color: "white", borderRadius: "0"}}>Strukturierte
                    Lernmodule</Card.Header>
                    <Card.Body className="benefitcards">
                        <Card.Text>
                            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et
                        </Card.Text></Card.Body>
                </Card> </Col><Col></Col>
                </Row>
                    <Row style={{marginTop: "40px", marginBottom: "60px"}}>
                        <Col><Image src={require("./imageThumbnail-5e2827059b92c-1579689733.jpg")}/></Col>
                        <Col><Image src={require("./imageThumbnail-5e2826c340cb9-1579689667.jpg")}/></Col>
                        <Col><Image src={require("./imageThumbnail-5e2827526a385-1579689810.jpg")}/></Col>
                        <Col><Image src={require("./imageThumbnail-5e2826c340cb9-1579689667.jpg")}/></Col>
                    </Row>
                </div>
            </Container>
        </div>
    );
}

export default Benefitsdesktop;