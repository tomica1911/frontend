import React, { Component } from "react";
import axios from "axios";

export default class Admin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      apply: {},
    };
  }

  //  window.location.hash.substr(1)
  //     var id = document.URL.split("#")[1];

  componentDidMount() {
    axios.get("/apply/" + document.URL.split("#")[1]).then((res) => {
      this.setState({ apply: res.data });
    });
  }

  render() {
    return (
      <div className="container">
        <div className="panel panel-default">
          <div className="panel-heading">
            <h3 className="panel-title">Bewerber:</h3>
          </div>
          <div className="panel-body">
            <table className="table table-stripe">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Email</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{this.state.apply.id}</td>
                  <td>{this.state.apply.email}</td>
                </tr>
              </tbody>
            </table>
            <table className="table table-stripe">
              <thead>
                <tr>
                  <th>Vorname</th>
                  <th>Nachname</th>
                  <th>Straße und Hausnummer</th>
                  <th>Wohnort</th>
                  <th>Handynummer</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{this.state.apply.name}</td>
                  <td>{this.state.apply.lastname}</td>
                  <td>{this.state.apply.street}</td>
                  <td>{this.state.apply.city}</td>
                  <td>{this.state.apply.phone}</td>
                </tr>
              </tbody>
            </table>
            <table className="table table-stripe">
              <thead>
                <tr>
                  <th>Gewünschte Position</th>
                  <th>Gewünschter Ort</th>
                  <th>Gewünschtes Eintrittsdatum</th>
                  <th>Daten Upload Link</th>
                  <th>Passwort {"&"} weitere Infos</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{this.state.apply.wish_position}</td>
                  <td>{this.state.apply.wish_city}</td>
                  <td>{this.state.apply.entry_date}</td>
                  <td>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href={this.state.apply.data_link}
                    >
                      <div>{this.state.apply.data_link}</div>
                    </a>
                  </td>
                  <td>{this.state.apply.more_info}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}
