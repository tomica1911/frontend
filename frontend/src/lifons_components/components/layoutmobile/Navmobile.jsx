import React from 'react';
import {Navbar, Image, Button} from 'react-bootstrap';
import './stylemobile.scss';

function Navmobile() {
        return (
            <Navbar sticky="top" bg="light" variant="light" style={{width: "100vw", height: "64px", zIndex:100, background:"none"}}>
                <Navbar.Brand>
                    <Image src="https://upload.wikimedia.org/wikipedia/commons/6/61/Interhyp_Gruppe_Logo_2018.svg"
                           fluid={true}/>
                </Navbar.Brand>
                <Button variant="primary-right" style={{position: "relative", textAlign:"right", float:"right", backgroundColor:"#579eb0", color:"white", margin:"auto"}}>Bewerben</Button>
            </Navbar>
        );
}
export default Navmobile;