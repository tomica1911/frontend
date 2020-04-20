import React, { Component } from "react";
import { Card, Form, Button, Col } from "react-bootstrap";
import axios from "axios";
import styled from "styled-components";

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = this.initialState;
  }

  initialState = {
    email: "",
    password: "",
  };

  onChange = (a) => {
    const state = this.state;
    state[a.target.name] = a.target.value;
    this.setState(state);
  };

  onSubmit = (a) => {
    a.preventDefault();

    const { email, password } = this.state;

    axios
      .post("/login", {
        email,
        password,
      })
      .then((result) => {
        this.props.history.push("/");
      });

    this.setState({
      email: "",
      password: "",
    });
  };

  render() {
    const { email, password } = this.state;
    return (
      <LoginBody>
        <Card className={"IhpText formNoBorder "}>
          <Card.Header className="text-center text-uppercase IhpHeader">
            Bewerbung
          </Card.Header>
          <Form onSubmit={this.onSubmit}>
            <Card.Body className="BodyContainer container-sm">
              <div className="text-center IhpHeader m-auto IhpFormLabel1">
                <Form.Label>Login:</Form.Label>
              </div>
              <Form.Row>
                <Form.Group as={Col} controlId="formGridEmail">
                  <Form.Label> Email </Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    required
                    value={email}
                    onChange={this.onChange}
                    className={"IhpTextBlack"}
                    placeholder="Email"
                  />
                  <small id="formGridEmail" class="form-text text-muted">
                    erforderlich
                  </small>
                </Form.Group>
                <Form.Group as={Col} controlId="formGridPassword">
                  <Form.Label> Passwort </Form.Label>
                  <Form.Control
                    type="password"
                    name="password"
                    required
                    value={password}
                    onChange={this.onChange}
                    className={"IhpTextBlack"}
                    placeholder="Passwort"
                  />
                  <small id="formGridPassword" class="form-text text-muted">
                    erforderlich
                  </small>
                </Form.Group>
              </Form.Row>
              <div className="text-right">
                <Button className={"IhpButton"} type="submit">
                  Submit
                </Button>
              </div>
            </Card.Body>
          </Form>
        </Card>
      </LoginBody>
    );
  }
}

const LoginBody = styled.body`
  .BodyContainer {
    background-color: #ffffff;
  }

  .IhpButton {
    font-family: Clan Bold;
    font-size: 16px;
    color: grey;
    background-color: #ffffff;
    border: secondary;
    cursor: pointer;
  }

  .formNoBorder {
    border: 0;
  }

  .IhpButton:hover {
    font-family: Clan Bold;
    font-size: 16px;
    color: #ffffff;
    background-color: #ba6b36;
    border: secondary;
    cursor: pointer;
  }
`;
