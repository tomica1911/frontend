import React, {Component} from 'react';
import './stylemobile.scss'
import FadeInSection from './FadeInSection';

class Timelinepart extends Component {

    render() {
        return (
            <ul className="timeline" style={{height: "600px"}}>
                <li className={this.props.index%2 !=0 ? "timeline-inverted" : ""}>
                    <div className="timeline-badge"><h1>{this.props.badge}</h1></div>
                    <div className="timeline-panel" style={{height: "550px"}}>
                        <div className="timeline-heading">
                            <h4 className="timeline-title">{this.props.heading}</h4>
                        </div>
                        <div className="timeline-body">
                            {this.props.text}
                        </div>
                    </div>
                    {this.props.image}
                </li>
            </ul>
                );
                }
                }
                export default Timelinepart;