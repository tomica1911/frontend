import React, { Component } from "react";

const InfoContext = React.createContext();
const InfoConsumer = InfoContext.Consumer;

class InfoProvider extends Component {
  render() {
    return (
      <InfoContext.Provider value="Hello">
        {" "}
        {this.props.children}{" "}
      </InfoContext.Provider>
    );
  }
}

export { InfoProvider, InfoConsumer };
