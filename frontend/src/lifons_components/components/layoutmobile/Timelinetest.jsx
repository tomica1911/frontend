import React, {Component} from 'react';
import './stylemobile.scss'
import FadeInSection from './FadeInSection';
import Timelinepart from './Timelinepart';

class Timelinetest extends Component {
    constructor(props) {
        super(props);
        this.state = {
            index1: 0,
            image1: <div style={{float: "right", width: "46%", height: "100%"}}>
                <img src={require('./flight-sky-earth-space-2159.jpg')}
                     style={{height: "100%", width: "100%"}}/>
            </div>,
            badge1: "0",
            heading1: "Beginn",
            text1: "Zu Beginn der Ausbildung erhälst du Einblick in unsere grundlegende\n" +
                "                                            Firmensstruktur.\n" +
                "                                            Du wirst mit unseren Technologien und unserer IT Infrastruktur vertraut gemacht.\n" +
                "                                            Außerdem erwarten dich spannende Veranstaltungen und unterhaltsame Aktvitäten\n" +
                "                                            mit\n" +
                "                                            unseren anderen Auszubildenden und Ausbildern.dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.",
            index2: 1,
            image2: <div style={{float: "left", width: "46%", height: "100%"}}>
                <img src={require('./man-standing-beside-people-sitting-beside-table-with-laptops-3184395.jpg')}
                     style={{height: "100%", width: "100%"}}/>
            </div>,
            badge2: "1",
            heading2: "ABJ 1",
            text2: "Konkret bereiten wir Dich im ersten Ausbildungsjahr über Schulungen und Projekte\n" +
                "                                            mit\n" +
                "                                            einer\n" +
                "                                            Hands-On Mentalität optimal auf die Software-Entwicklung vor. Dir werden die\n" +
                "                                            Grundlagen von verschiedenen Programmiersprachen vermittelt und du erhälst\n" +
                "                                            Einblick\n" +
                "                                            in unsere Arbeitsweise.\n" +
                "                                            Damit kein technischer Tunnelblick entsteht, wirst Du nicht nur bei uns im\n" +
                "                                            Campus\n" +
                "                                            ausgebildet, sondern kannst Dich auch noch auf Aufenthalte in anderen\n" +
                "                                            Abteilungen\n" +
                "                                            freuen.",
            index3: 2,
            image3: <div style={{float: "right", width: "46%", height: "100%"}}>
                <img src={require('./photo-of-woman-using-her-laptop-935756.jpg')}
                     style={{height: "100%", width: "100%"}}/>
            </div>,
            badge3: "2",
            heading3: "ABJ 2",
            text3: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod\n" +
                "                                            tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At\n" +
                "                                            vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,\n" +
                "                                            no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit\n" +
                "                                            amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut\n" +
                "                                            labore et dolore magna aliquyam erat.",
            index4: 3,
            image4: <div style={{float: "left", width: "46%", height: "100%"}}>
                <img src={require('./austin-distel-mpN7xjKQ_Ns-unsplash.jpg')}
                     style={{height: "100%", width: "100%"}}/>
            </div>,
            badge4: "3",
            heading4: "ABJ 3",
            text4: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod\n" +
                "                                            tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At\n" +
                "                                            vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,\n" +
                "                                            no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit\n" +
                "                                            amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut\n" +
                "                                            labore et dolore magna aliquyam erat."
        }
    }

    render() {
        return (
            <div id="timelinewrapper" style={{marginTop: "70px"}}>
                <div className="container" id="timelinecontainer">
                    <h3 id="timelineheading" style={{textAlign: "center", paddingBottom: "70px"}}>Was Dich bei uns
                        erwartet</h3>
                    <FadeInSection>
                        <Timelinepart badge={this.state.badge1} heading={this.state.heading1} text={this.state.text1}
                                      image={this.state.image1} index={this.state.index1}/>
                    </FadeInSection>
                    <FadeInSection>
                        <Timelinepart badge={this.state.badge2} heading={this.state.heading2} text={this.state.text2}
                                      image={this.state.image2} index={this.state.index2}/>
                    </FadeInSection>
                    <FadeInSection>
                        <Timelinepart badge={this.state.badge3} heading={this.state.heading3} text={this.state.text3}
                                      image={this.state.image3} index={this.state.index3}/>
                    </FadeInSection>
                    <FadeInSection>
                        <Timelinepart badge={this.state.badge4} heading={this.state.heading4} text={this.state.text4}
                                      image={this.state.image4} index={this.state.index4}/>
                    </FadeInSection>
                </div>
            </div>
        );
    }
}

export default Timelinetest;