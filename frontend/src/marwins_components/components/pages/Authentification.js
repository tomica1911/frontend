import React, { Component } from "react";
import styled from "styled-components";
import { Form, Button } from "react-bootstrap";

export default class Authentification extends Component {
  constructor(props) {
    super(props);
    this.state = {
      applynumber: "",
    };
  }

  onChange() {}

  onSubmit() {
    this.props.history.push("/changedata#" + this.applynumber);
  }

  render() {
    const { applynumber } = this.state;
    return (
      <BodyContainer>
        <Form className="BodyContainer" onSubmit={this.onSubmit}>
          <Form.Group controlId="formApplyNumber">
            <Form.Label>Deine Bewerbungsnummer:</Form.Label>
            <Form.Control
              type="email"
              value={applynumber}
              onChange={this.onChange}
            />
            <Form.Text className="text-muted">
              Du hast diese Nummer in deiner E-Mail erhalten.
            </Form.Text>
          </Form.Group>
          <Button variant="primary" type="submit">
            GO INTERHYP
          </Button>
        </Form>
      </BodyContainer>
    );
  }
}

const BodyContainer = styled.body`
  .BodyContainer {
    padding: 10rem 20rem 15rem 20rem;
    margin: auto;
  }
`;
