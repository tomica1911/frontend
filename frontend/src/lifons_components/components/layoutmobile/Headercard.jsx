import React from 'react';
import Card from 'react-bootstrap/Card';
import './stylemobile.scss';

function Headercard() {
    return (
        <Card style={{height: "auto", borderRadius: 0}}>
            <Card.Img variant="top"
                      src="https://jobs.interhyp.de/uploads/contents/headers/ea13df62-1610-42f3-a546-22c00e3db4d1/image-5e2018563d29a-1579161686.jpg"
                      style={{borderTopLeftRadius: "0", borderTopRightRadius: 0}}/>
            <Card.Body>
                <Card.Title style={{}}><h3 style={{fontWeight: "bold"}}>
                    Fachinformatiker für Anwendungsentwicklung<br/>(W/M/X)</h3></Card.Title>
                <Card.Text><h4 style={{fontWeight: 800}}>Berufsbild</h4></Card.Text>
                <Card.Text style={{fontSize: ".95rem"}}>
                    Du wolltest schon immer deine eigene App entwickeln oder eine beeindruckende Website bauen?<br/>
                    <br/>
                    Als Fachinformatiker für Anwendungsentwicklung kommst Du diesen Träumen einen
                    Schritt näher.
                    In deinen Aufgabenbereich fallen das Konzipieren, Realisieren und Warten von Software
                    und diversen Anwendungen. Abwechslungsreiche Aufgaben und das tägliche Arbeiten mit
                    innovativen Zukunftstechnologie bieten Dir das Rüstzeug um die technischen Herausforderungen unserer
                    Zeit zu meistern und ein maßgeblicher Antrieb des Fortschritts zu werden.
                </Card.Text>
            </Card.Body>
            <Card.Body style={{backgroundColor:"#579eb0", color:"white", paddingBottom:"40px"}}>
                <Card.Text><h4 style={{fontWeight: 800}}>Deine Aufgaben</h4></Card.Text>
                <Card.Text style={{fontSize:"0.95rem"}}><ul>
                    <li>Ab September 2020 startest Du mit Deiner dreijährigen Ausbildung Deine berufliche Zukunft bei uns. Je nach Vorqualifikation kann die Ausbildungsdauer verkürzt werden!</li>
                    <li>Neben den vorgeschriebenen Inhalten vermitteln wir Dir in vielfältigen betriebsinternen Schulungen ein umfassendes Bild unserer Arbeitswelt. So bereiten wir Dich optimal auf Prüfungen und Deinen späteren Berufseinstieg vor.</li>
                    <li>Konkret lernst Du, wie Du Konzepte für kundenspezifische Softwareanwendungen erstellst und anschließend erfolgreich umsetzt.</li>
                    <li>Du testest und dokumentierst Deine Anwendungen und modifizierst bereits Bestehende.</li>
                    <li>Schon bald stehst Du unseren Nutzern bzw. internen Kunden im Tagesgeschäft und in Schulungen beratend zur Seite.</li>
                    <li>Nicht zuletzt erwartet Dich ein Arbeitsumfeld mit zielgruppengerechter und lösungsorientierter Arbeitsweise mittels agiler Arbeitsmethoden und dem Einsatz von neuesten Technologien und modernen Programmiersprachen.</li>
                </ul></Card.Text>
                <Card.Text><h4 style={{fontWeight: 800}}>Dein Profil</h4></Card.Text>
                <Card.Text style={{fontSize:"0.95rem"}}><ul>
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
    );
}

export default Headercard;