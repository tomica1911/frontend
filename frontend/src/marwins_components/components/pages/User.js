import React, { Component } from "react";
import axios from "axios";
import styled from "styled-components";

export default class User extends Component {
  constructor(props) {
    super(props);
    this.state = {
      alluserdata: [],
      userdata: [],
      condition: "werfmail420@gmail.com",
    };
  }

  //  function(condition) {
  //  return this.state.alluserdata
  //  .filter((e) => e.email === condition)
  //.map((e) => e.columns)
  //.reduce((prev, current) => prev.concat(current), [])
  //.map((column, index) => <p key={index}>{column.name}</p>);
  //}

  componentDidMount() {
    axios.get("/apply").then((res) => {
      this.setState({ alluserdata: res.data });
      this.setState({
        userdata: this.state.alluserdata.filter(
          (data) => data.email === "marwinlorenz@gmail.com"
        ),
      });
    });
  }

  render() {
    return (
      <BodyContainer>
        <div class="row container-sm BodyContainer">
          <div class="col-sm-6 CardContainer">
            <div class="card ">
              <div class="card-body">
                <h5 class="card-title">Fragen?</h5>
                <p class="card-text">Gehe zur FAQ Seite!</p>
                <a href="/help" class="btn btn-primary">
                  FAQ
                </a>
              </div>
            </div>
          </div>
          <div class="col-sm-6 CardContainer">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">Willst du deine Daten ändern?</h5>
                <p class="card-text">
                  Willst du deine abgesendete Bewerbung ändern?
                </p>
                <a href="/authentification" class="btn btn-primary">
                  Daten ändern
                </a>
              </div>
            </div>
          </div>
          <div class="col-sm-6 CardContainer">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">Fragen an unsere Ausbilder?</h5>
                <p class="card-text">Hier Text einfügen.</p>
                <a href="/" class="btn btn-primary">
                  Hier Text einfügen.
                </a>
              </div>
            </div>
          </div>
          <div class="col-sm-6 CardContainer">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">Hier Text einfügen.</h5>
                <p class="card-text">Hier Text einfügen.</p>
                <a href="/" class="btn btn-primary">
                  Hier Text einfügen.
                </a>
              </div>
            </div>
          </div>
        </div>
      </BodyContainer>
    );
  }
}

const BodyContainer = styled.body`
  .BodyContainer {
    padding: auto;
    margin: auto;
  }

  .CardContainer {
    padding: 1rem 1rem 1rem 1rem;
  }
`;
