import React, {Component} from 'react';
import Card from 'react-bootstrap/Card';
import Timeline from './Timeline';
import ResponsiveEmbed from "react-bootstrap/ResponsiveEmbed";

class Chronology extends Component {
    render() {
        return (
            <React.Fragment>
                <Card style={{borderRadius: 0}}>
                    <Card.Body style={{backgroundColor:"#579eb0", color:"white", height:"800px"}}>
                        <Card.Text>
                            <h4 style={{fontWeight: 800}}>Inhalt und Ablauf</h4>
                        </Card.Text>
                        <Card.Text style={{textAlign:"left"}}>
                            <p>Deine Ausbildung bei uns dauert 3 Jahre.Es besteht die Möglichkeit auf
                            Verkürzung bei guten Leistungen.
                            Hierbei bist Du abwechselnd jeweils in der Berufsschule und im Betrieb.
                            </p>
                            <h4 style={{fontWeight:"800", textAlign:"center"}}>Berufsschule</h4>
                            <ResponsiveEmbed aspectRatio="16by9" style={{marginTop: "3vh"}}>
                                <iframe width="600" height="400" id="gmap_canvas"
                                        src="https://maps.google.com/maps?q=bs%20info&t=&z=13&ie=UTF8&iwloc=&output=embed"
                                        frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0"></iframe>
                            </ResponsiveEmbed>
                            <br/>
                            <h4 style={{fontWeight:"800", textAlign:"center"}}>Betrieb</h4>
                            <ResponsiveEmbed aspectRatio="16by9" style={{marginTop: "3vh"}}>
                            <iframe width="600" height="400" id="gmap_canvas"
                                    src="https://maps.google.com/maps?q=Interhyp%20&t=&z=13&ie=UTF8&iwloc=&output=embed"
                                    frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0"></iframe>
                            </ResponsiveEmbed>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </React.Fragment>
        );
    }
}

export default Chronology;