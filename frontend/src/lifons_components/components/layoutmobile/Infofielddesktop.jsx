import React from 'react';
import './stylemobile.scss';
import {Card, Container, Row, Col} from "react-bootstrap";

function Infofielddesktop() {
    return (
        <Container fluid>
            <Row>
            <Col></Col>
            <Col md={6}>
        <Card style={{height: "auto", borderRadius: 0, border: "none", marginTop:"1vh", marginBottom:"1vh"}}>
            <Card.Body>
                <Card.Text><h4 style={{fontWeight: 800, fontSize:"2vw"}}>Was macht man eigentlich als Anwendungsentwickler?</h4></Card.Text>
                <Card.Text>
                    <p style={{fontSize: "1vw"}}>
                    Du wolltest schon immer deine eigene App entwickeln oder eine beeindruckende Website bauen?
                    Als Fachinformatiker für Anwendungsentwicklung kommst Du diesen Träumen einen riesigen
                    Schritt näher. In deinen Aufgabenbereich fallen das Konzipieren, Realisieren und Warten von Software
                    und diversen Anwendungen.Abwechslungsreiche Aufgaben und das tägliche Arbeiten mit
                    innovativen Zukunftstechnologie bieten dir die Werkzeuge um die Welt von Morgen zu meistern und
                    dabei sogar Spaß zu haben.
                    </p>
                </Card.Text>
                <Card.Text><h4 style={{fontWeight: 800, fontSize:"2vw"}}>Deine Aufgaben</h4></Card.Text>
                <Card.Text style={{fontSize:"1vw"}}><ul>
                    <li>Ab September 2020 startest Du mit Deiner dreijährigen Ausbildung Deine berufliche Zukunft bei uns. Je nach Vorqualifikation kann die Ausbildungsdauer verkürzt werden!</li>
                    <li>Neben den vorgeschriebenen Inhalten vermitteln wir Dir in vielfältigen betriebsinternen Schulungen ein umfassendes Bild unserer Arbeitswelt. So bereiten wir Dich optimal auf Prüfungen und Deinen späteren Berufseinstieg vor.</li>
                    <li>Konkret lernst Du, wie Du Konzepte für kundenspezifische Softwareanwendungen erstellst und anschließend erfolgreich umsetzt.</li>
                    <li>Du testest und dokumentierst Deine Anwendungen und modifizierst bereits Bestehende.</li>
                    <li>Schon bald stehst Du unseren Nutzern bzw. internen Kunden im Tagesgeschäft und in Schulungen beratend zur Seite.</li>
                    <li>Nicht zuletzt erwartet Dich ein Arbeitsumfeld mit zielgruppengerechter und lösungsorientierter Arbeitsweise mittels agiler Arbeitsmethoden und dem Einsatz von neuesten Technologien und modernen Programmiersprachen.</li>
                </ul></Card.Text>
                <Card.Text><h4 style={{fontWeight: 800, fontSize:"2vw"}}>Dein Profil</h4></Card.Text>
                <Card.Text style={{fontSize:"1vw"}}><ul>
                    <li>Erfolgreicher Abschluss der mittleren Reife oder des Abiturs</li>
                    <li>Neben den vorgeschriebenen Inhalten vermitteln wir Dir in vielfältigen betriebsinternen Schulungen ein umfassendes Bild unserer Arbeitswelt. So bereiten wir Dich optimal auf Prüfungen und Deinen späteren Berufseinstieg vor.</li>
                    <li>Gute schulische Leistungen in den Fächern Mathematik und Informatik</li>
                    <li>Spaß und Interesse am Programmieren und idealerweise erste Erfahrung mit beliebiger Programmiersprache</li>
                    <li>Leidenschaft für digitale Lösungen und moderne Technologien</li>
                    <li>Logisch analytische Denkweise</li>
                    <li>Selbständige sowie strukturierte und lösungsorientierte Arbeitsweise</li>
                    <li>Gute Deutschkenntnisse in Wort und Schrift</li>
                </ul></Card.Text>
            </Card.Body>
        </Card>
            </Col>
            <Col></Col>
            </Row>
            <Row style={{heigth:"50px"}}></Row>
        </Container>
    );
}
export default Infofielddesktop;