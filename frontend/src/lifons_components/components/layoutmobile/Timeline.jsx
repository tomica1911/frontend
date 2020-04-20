import React, {Component} from 'react';
import './stylemobile.scss'
import FadeInSection from './FadeInSection';

class Timeline extends Component {
    render() {
        return (
            <div id="timelinewrapper" style={{marginTop: "70px"}}>
                <div className="container" style={{}}>
                    <h3 id="timelineheading" style={{textAlign: "center", paddingBottom: "70px"}}>Was Dich bei uns
                        erwartet</h3>
                    <FadeInSection>
                        <ul className="timeline" style={{height: "650px"}}>
                            <li>
                                <div className="timeline-badge"><h1>0</h1></div>
                                <div className="timeline-panel" style={{height: "600px"}}>
                                    <div className="timeline-heading">
                                        <h4 className="timeline-title">Beginn</h4>
                                    </div>
                                    <div className="timeline-body">
                                        Zu Beginn der Ausbildung erhälst du Einblick in unsere grundlegende
                                            Firmensstruktur.
                                            Du wirst mit unseren Technologien und unserer IT Infrastruktur vertraut
                                            gemacht.
                                            Außerdem erwarten dich spannende Veranstaltungen und unterhaltsame
                                            Aktvitäten
                                            mit
                                            unseren anderen Auszubildenden und Ausbildern.
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </FadeInSection>
                    <FadeInSection>
                        <ul className="timeline" style={{height: "780px"}}>
                            <li className="timeline-inverted">
                                <div className="timeline-badge"><h1>1</h1>
                                </div>
                                <div className="timeline-panel" style={{height: "730px"}}>
                                    <div className="timeline-heading">
                                        <h4 className="timeline-title">ABJ 1</h4>
                                    </div>
                                    <div className="timeline-body" style={{fontSize:"4.5vw"}}>
                                        Konkret bereiten wir Dich im ersten Ausbildungsjahr über Schulungen und
                                            Projekte mit einer Hands-On Mentalität optimal auf die Software-Entwicklung vor. Dir werden die
                                            Grundlagen von verschiedenen Programmiersprachen vermittelt und du erhälst
                                            Einblick in unsere Arbeitsweise.
                                            Damit kein technischer Tunnelblick entsteht, wirst Du nicht nur bei uns im
                                            Campus ausgebildet, sondern kannst Dich auch noch auf Aufenthalte in anderen
                                            Abteilungen
                                            freuen.
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </FadeInSection>
                    <FadeInSection>
                        <ul className="timeline" style={{height: "600px"}}>
                            <li>
                                <div className="timeline-badge"><h1>2</h1></div>
                                <div className="timeline-panel" style={{height: "530px"}}>
                                    <div className="timeline-heading">
                                        <h4 className="timeline-title">ABJ 2</h4>
                                    </div>
                                    <div className="timeline-body">
                                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                                            eirmod
                                            tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
                                            At
                                            vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd
                                            gubergren,
                                            no sea takimata sanctus est Lorem ipsum dolor sit amet.
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </FadeInSection>
                    <FadeInSection>
                        <ul className="timeline" style={{height: "600px"}}>
                            <li className="timeline-inverted">
                                <div className="timeline-badge"><h1>3</h1></div>
                                <div className="timeline-panel" style={{height: "530px"}}>
                                    <div className="timeline-heading">
                                        <h4 className="timeline-title">ABJ 3</h4>
                                    </div>
                                    <div className="timeline-body">
                                        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                                            eirmod
                                            tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
                                            At
                                            vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd
                                            gubergren.</p>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </FadeInSection>
                </div>
            </div>
        );
    }
}

export default Timeline;