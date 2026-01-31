import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
// import {useAuth} from '../autocontext/Autocontext'
import { Link } from 'react-router-dom';

export default function Hader() {

  const [navopen , setNavopen] = useState()

  // const [setLogin , userLogin] = useAuth() 

  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary  header-s1">
        <Container>
          <Navbar.Brand className="text-white" as={Link} to="/">R-shoping</Navbar.Brand>
          <Navbar.Collapse style={{ left: navopen ? "0" : "" }}>
            <Nav className="mx-auto">
              <Nav.Link as={Link} to="/">Home</Nav.Link>
              <Nav.Link >Link</Nav.Link>
            </Nav>
          </Navbar.Collapse>
              <div className="d-lg-flex align-items-center gap-2 d-none">
                <button className="btn btn-1 btn-outborder-007fff">Singn In</button>
              </div>
              <button className="d-lg-none btn border-0" onClick={() =>setNavopen(true)}>
            <FontAwesomeIcon icon={faBars} size="lg" className="ru-text-FFFFFF"/>
          </button>
         {navopen && <div className="overplay" onClick={() => setNavopen(false)}></div>} 
        </Container>
      </Navbar>
    </>
  );
}
