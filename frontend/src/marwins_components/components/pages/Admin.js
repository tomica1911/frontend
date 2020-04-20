import React, { Component } from "react";
import axios from "axios";

export default class Admin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      apply: [],
    };
  }

  componentDidMount() {
    axios.get("/apply").then((res) => {
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
                  <th>Nachname</th>
                  <th>Vorname</th>
                  <th>Email</th>
                  <th>Mehr Info</th>
                </tr>
              </thead>
              <tbody>
                {this.state.apply.map((a) => (
                  <tr>
                    <td>
                      <div>{a.lastname}</div>
                    </td>
                    <td>
                      <div>{a.name}</div>
                    </td>
                    <td>
                      <div>{a.email}</div>
                    </td>
                    <td>
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href={"/adminuserinfo#" + a.id}
                      >
                        <div>Mehr Info</div>
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}
