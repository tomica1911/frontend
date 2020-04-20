import React, { Component } from 'react';
import Navmobile from './components/layoutmobile/Navmobile.jsx';
import Navdesktop from './components/layoutmobile/Navdesktop.jsx';
import './App.css';
import Headercard from './components/layoutmobile/Headercard';
import Headercarddesktop from './components/layoutmobile/Headercarddesktop';
import Benefits from './components/layoutmobile/Benefits';
import Chronology from './components/layoutmobile/Chronology';
import Infofielddesktop from './components/layoutmobile/Infofielddesktop';
import Benefitsdesktop from './components/layoutmobile/Benefitsdesktop';
import Chronologydesktop from './components/layoutmobile/Chronologydesktop';
import Closing from './components/layoutmobile/Closing';
import Timeline from './components/layoutmobile/Timeline';
import Timelinetest from './components/layoutmobile/Timelinetest';
import Footer from './components/layoutmobile/Footer';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { width: 0, height: 0 };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  }


  render() {
    if (this.state.width < 770+(770*0.2)) {
    return (
        <React.Fragment>
            <Navmobile/>
                <Headercard/>
                <Benefits/>
                <Chronology/>
            <Timeline/>
                <Closing/>
        </React.Fragment>
    );
  }
  else{
    return(
        <React.Fragment>
          <Navdesktop/>
          <Headercarddesktop/>
          <Infofielddesktop/>
          <Benefitsdesktop/>
          <Chronologydesktop/>
            <Timelinetest/>
            <Closing/>
        </React.Fragment>
    );
    }
}
}
export default App;
