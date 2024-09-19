import { useQuery } from "@apollo/client";
import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import {
  LOGGEDIN_USER_QUERY,
  type LoggedInUserProps,
} from "../../graphql/Queries/authenticated/LoggedInUser";

const NavBarComponent = () => {
  const { loading, data } =
    useQuery<LoggedInUserProps>(LOGGEDIN_USER_QUERY);

  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary shadow ">
        <Container fluid>
          <Navbar.Brand href="#home">graphql-laravel-reactjs</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <i className="fa-solid fa-bars"></i>
          </Navbar.Toggle>

          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto mx-5">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
              {loading ? (
                <p>please wait ....</p>
              ) : (
                <NavDropdown
                  title={`${data?.loggeinUser?.email}`}
                  id="basic-nav-dropdown"
                >
                  <NavDropdown.Item href="#action/3.2">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    Something
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item className="text-danger">
                    {"Logout"}
                  </NavDropdown.Item>
                </NavDropdown>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBarComponent;
