import React, { Component } from "react";
import { Card, Form, Button, Col } from "react-bootstrap";
import axios from "axios";
import styled from "styled-components";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = this.initialState;
  }

  initialState = {
    email: "",
    name: "",
    lastname: "",
    street: "",
    city: "",
    phone: "",
    wish_position: "", //init variables
    wish_city: "",
    data_link: "",
    more_info: "",
    title: "",
    entry_date: "",
    userdata: [],
    alluserdata: [],
  };

  onChange = (a) => {
    const state = this.state; //update init variables if changed
    state[a.target.name] = a.target.value;
    this.setState(state);
  };

  onSubmit = (a) => {
    a.preventDefault(); //handles actions after pressing submit button

    const {
      email,
      name,
      lastname,
      street,
      city,
      phone,
      wish_city,
      wish_position,
      data_link,
      more_info,
      title,
      entry_date,
      templateId = "interhyp_bewerbung",
      link,
    } = this.state;

    axios
      .post("/apply", {
        email,
        name,
        lastname,
        street,
        city,
        phone,
        wish_city,
        wish_position,
        data_link,
        more_info,
        title,
        entry_date,
      })
      .then(this.props.history.push("/success"))
      .then(() => {
        this.getAllData((data) => {
          this.getSpecificData(data, email);
          let finalData = this.state.userdata[0];
          let link = finalData.id;
          this.sendEmail(templateId, {
            email: email,
            name: name,
            link: link,
          });
        });
      });
  };

  getAllData(callback) {
    axios.get("/apply").then((res) => {
      this.state = { alluserdata: res.data };
      callback(res.data);
    });
  }
  getSpecificData(resData, useremail) {
    this.state = {
      userdata: resData.filter((data) => data.email === useremail),
    };
  }

  sendEmail(templateId, variables) {
    window.emailjs
      .send("gmail", templateId, variables)
      .then((res) => {
        console.log("Email successfully sent!");
      })
      // Handle errors here however you like, or use a React error boundary
      .catch((err) =>
        console.error(
          "Oh well, you failed. Here some thoughts on the error that occured:",
          err
        )
      );
  }

  render() {
    const {
      email,
      name,
      lastname,
      street,
      city,
      phone,
      wish_city,
      wish_position,
      data_link,
      more_info,
      title,
      entry_date,
    } = this.state;
    return (
      <BodyContainer>
        <Card className={"IhpText formNoBorder "}>
          <Card.Header className="text-center text-uppercase IhpHeader">
            Bewerbung
          </Card.Header>
          <Form onSubmit={this.onSubmit}>
            <Card.Body className="BodyContainer container-sm">
              <div className="text-center IhpHeader m-auto IhpFormLabel1">
                <Form.Label>Job Angaben:</Form.Label>
              </div>
              <Form.Row>
                <Form.Group as={Col} controlId="formGridPos">
                  <Form.Label> Gewünschte Position </Form.Label>
                  <Form.Control
                    type="text"
                    name="wish_position"
                    required
                    value={wish_position}
                    onChange={this.onChange}
                    className={"IhpTextBlack"}
                    placeholder="z.B. Baufinanzierungsberater"
                  />
                  <small id="formGridPos" class="form-text text-muted">
                    erforderlich
                  </small>
                </Form.Group>
                <Form.Group as={Col} controlId="formGridWCity">
                  <Form.Label> Gewünschter Ort </Form.Label>
                  <Form.Control
                    type="text"
                    name="wish_city"
                    required
                    value={wish_city}
                    onChange={this.onChange}
                    className={"IhpTextBlack"}
                    placeholder="z.B. München"
                  />
                  <small id="formGridWCity" class="form-text text-muted">
                    erforderlich
                  </small>
                </Form.Group>
                <Form.Group as={Col} controlId="formGridEntryDate">
                  <Form.Label> Gewünschtes Eintrittsdatum </Form.Label>
                  <Form.Control
                    type="text"
                    name="entry_date"
                    required
                    value={entry_date}
                    onChange={this.onChange}
                    className={"IhpTextBlack"}
                    placeholder="z.B. 01.01.2020"
                  />
                  <small id="formGridEntryDate" class="form-text text-muted">
                    optional
                  </small>
                </Form.Group>
              </Form.Row>
              <div className="text-center IhpHeader m-auto IhpFormLabel2">
                <Form.Label>Persönliche Angaben:</Form.Label>
              </div>
              <Form.Row>
                <Form.Group
                  as={Col}
                  className="col-md-2"
                  controlId="formGridTitle"
                >
                  <Form.Label> Anrede </Form.Label>
                  <Form.Control
                    type="text"
                    name="title"
                    value={title}
                    onChange={this.onChange}
                    className={"IhpTextBlack"}
                    placeholder="Anrede"
                  />
                  <small id="formGridTitle" class="form-text text-muted">
                    optional
                  </small>
                </Form.Group>
                <Form.Group as={Col} controlId="formGridName">
                  <Form.Label> Vorname </Form.Label>
                  <Form.Control
                    type="text"
                    name="name"
                    required
                    value={name}
                    onChange={this.onChange}
                    className={"IhpTextBlack"}
                    placeholder="Vorname"
                  />
                  <small id="formGridName" class="form-text text-muted">
                    erforderlich
                  </small>
                </Form.Group>
                <Form.Group as={Col} controlId="formGridLastName">
                  <Form.Label> Nachname </Form.Label>
                  <Form.Control
                    type="text"
                    name="lastname"
                    required
                    value={lastname}
                    onChange={this.onChange}
                    className={"IhpTextBlack"}
                    placeholder="Nachname"
                  />
                  <small id="formGridLastName" class="form-text text-muted">
                    erforderlich
                  </small>
                </Form.Group>
              </Form.Row>
              <Form.Row>
                <Form.Group as={Col} controlId="formGridStreet">
                  <Form.Label> Straße und Hausnummer </Form.Label>
                  <Form.Control
                    type="text"
                    name="street"
                    value={street}
                    onChange={this.onChange}
                    className={"IhpTextBlack"}
                    placeholder="Straße und Hausnummer"
                  />
                  <small id="formGridStreet" class="form-text text-muted">
                    optional
                  </small>
                </Form.Group>
                <Form.Group as={Col} controlId="formGridCity">
                  <Form.Label> Wohnort </Form.Label>
                  <Form.Control
                    type="text"
                    name="city"
                    value={city}
                    onChange={this.onChange}
                    className={"IhpTextBlack"}
                    placeholder="Wohnort"
                  />
                  <small id="formGridCity" class="form-text text-muted">
                    optional
                  </small>
                </Form.Group>
              </Form.Row>
              <Form.Row>
                <Form.Group as={Col} controlId="formGridPhone">
                  <Form.Label> Handynummer </Form.Label>
                  <Form.Control
                    type="text"
                    name="phone"
                    value={phone}
                    onChange={this.onChange}
                    className={"IhpTextBlack"}
                    placeholder="Handynummer"
                  />
                  <small id="formGridPhone" class="form-text text-muted">
                    optional
                  </small>
                </Form.Group>
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
              </Form.Row>
              <Form.Row>
                <Form.Group as={Col} controlId="formGridUploadLink">
                  <Form.Label> Zeugnis und weitere Daten </Form.Label>
                  <Form.Control
                    type="text"
                    name="data_link"
                    value={data_link}
                    onChange={this.onChange}
                    className={"IhpTextBlack"}
                    placeholder="Cloud Storage Link"
                  />
                  <small id="formGridUploadLink" class="form-text text-muted">
                    optional
                  </small>
                </Form.Group>
              </Form.Row>
              <Form.Row>
                <Form.Group as={Col} controlId="formGridMoreInfo">
                  <Form.Label>
                    {" "}
                    Passwort für Cloud Storage und weitere Info{" "}
                  </Form.Label>
                  <Form.Control
                    as={"textarea"}
                    type="text"
                    name="more_info"
                    value={more_info}
                    onChange={this.onChange}
                    className={"IhpTextBlack"}
                    placeholder="Passwort für Cloud Storage und weitere Info"
                  />
                  <small id="formGridMoreInfo" class="form-text text-muted">
                    optional
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
      </BodyContainer>
    );
  }
}

const BodyContainer = styled.body`
  .BodyContainer {
    background-color: #ffffff;
  }

  .card-header {
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

  .IhpFormLabel1 {
    padding: 0rem 0rem 0.5rem;
  }

  .IhpFormLabel2 {
    padding: 1rem 0rem 0.5rem;
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
