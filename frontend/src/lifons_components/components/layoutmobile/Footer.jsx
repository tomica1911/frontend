import React from 'react';
import './stylemobile.scss';

function Footer() {
    return(
        <div className="c-footer -bg -with-claim">
            <footer>
                <ul className="social">
                    <li>Teilen:</li>

                    <li data-type="facebook"><a href="#" data-social="facebook" className="function-share-facebook"
                                                title="In sozialen Netwerken teilen" data-kmt="1"></a></li>
                    <li data-type="twitter"><a href="#" data-social="twitter" className="function-share-twitter"
                                               title="In sozialen Netwerken teilen" data-kmt="1"></a></li>
                    <li data-type="whatsapp"><a href="#" data-social="whatsapp" className="function-share-whatsapp"
                                                title="In sozialen Netwerken teilen" data-kmt="1"></a></li>
                    <li data-type="xing"><a href="#" data-social="xing" className="function-share-xing"
                                            title="In sozialen Netwerken teilen" data-kmt="1"></a></li>
                    <li data-type="linkedin"><a href="#" data-social="linkedin" className="function-share-linkedin"
                                                title="In sozialen Netwerken teilen" data-kmt="1"></a></li>
                </ul>

                <ul className="link-list">
                    <li><a id="footer-link-imprint" href="https://www.talentsconnect.com/imprint" target="_blank"
                           title="Impressum" data-kmt="1">Impressum</a></li>
                    <li><a id="footer-link-privacy" href="https://www.talentsconnect.com/privacy" target="_blank"
                           title="Datenschutz" data-kmt="1">Datenschutz</a></li>
                </ul>

                <p className="footer-text">Hinweis: Aus Gründen der leichteren Lesbarkeit verwenden wir im Textverlauf
                    die männliche Form der Anrede. Selbstverständlich sind bei Interhyp AG Menschen jeder
                    Geschlechtsidentität willkommen.</p>
            </footer>

            <div className="c-footer__claim">

                <a className="c-footer__claim-link" href="https://www.talentsconnect.com" target="_blank" data-kmt="1">
                    <span>powered by</span>
                    <img src={"https://jobs.interhyp.de/resources/images/talents-connect-logo-ash.png"}
                         alt="Talents Connect"/>
                </a>
            </div>
        </div>
    );
}
    export default Footer;