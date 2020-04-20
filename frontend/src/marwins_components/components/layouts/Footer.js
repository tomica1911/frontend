import React from "react";
import styled from "styled-components";

export default function Footer() {
  return (
    <FooterContainer className="main-footer">
      <div className="footer-middle">
        <div className="container">
          <div className="row">
            {/* Column 1 */}
            <div className="m-auto col-md-3 col-sm-6">
              <ul className="list-unstyled">
                <div className="IhpText">
                  <li className="impressum">
                    <a href="https://www.interhyp-gruppe.de/impressum.html">
                      Impressum
                    </a>
                  </li>
                  <li className="datenschutz">
                    <a href="https://www.interhyp-gruppe.de/datenschutz/">
                      Datenschutz
                    </a>
                  </li>
                </div>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* Footer Bottom */}
      <div className="footer-bottom">
        <p className="text-xs-center IhpText BottomFixDontJudgeMe">
          © {new Date().getFullYear() + " "}
          Interhyp-Gruppe AG <br />
        </p>
      </div>
    </FooterContainer>
  );
}

const FooterContainer = styled.footer`
  .footer-middle {
    background: var(--IhpFooter);
    padding-top: 2rem;
    text-color: var(--IhpTextBlack);
    color: var(--IhpTextBlack);
  }

  .impressum {
    float: left;
    padding-right: 0rem;
  }

  .datenschutz {
    float: right;
    padding-left: 0rem;
  }

  .footer-bottom {
    background: var(--IhpFooter);
    padding-top: 2rem;
    text-align: center;
    text-color: var(--IhpTextBlack);
    color: var(--IhpTextBlack);
  }

  .IhpText {
    color: #777;
  }

  .BottomFixDontJudgeMe {
    margin-block-end: 0px;
  }

  ul li a {
    color: #777;
  }
`;

//ul li a:hover {
//color: var(--IhpOrange);
//}
