import React, { Component } from "react";
import styled from "styled-components";

export default class Help extends Component {
  render() {
    return (
      <BodyContainer>
        <div className="CardBody ">
          <div className="row">
            <div className="col-sm-6">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">
                    Wieso Zeugnisse über Cloud Storage?
                  </h5>
                  <p className="card-text">
                    Da die meisten ihre Daten bereits auf Cloud Storage Servern
                    als Backup haben. Ist es viel leichter einfach den Link zu
                    teilen anstatt einzeln alle Zeugnisse hochladen zu müssen.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Weitere Fragen?</h5>
                  <p className="card-text">
                    Wir stehen Dir montags bis freitags, von 9 bis 18 Uhr unter
                    089 20 30 7 - 1795 zur Verfügung.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </BodyContainer>
    );
  }
}

const BodyContainer = styled.body`
  .CardBody {
    background: var(--IhpFooter);
    padding-top: 2rem;
    padding-bottom: 2rem;
    padding-left: 2rem;
    padding-right: 2rem;
    text-color: var(--IhpTextBlack);
    color: var(--IhpTextBlack);
  }
`;
