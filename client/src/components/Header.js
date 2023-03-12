import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
import "./Header.scss";

function Header() {
  return (
    <Navbar
      style={{
        backgroundColor: "#f5f5f5",
        position: "sticky",
        zIndex: "1000",
        top: "0",
      }}
      expand="lg"
    >
      <Container>
        <Navbar.Brand className="h1 fs-1" as={NavLink} end to={"/"}>
          <i className="bi bi-robot p-3"></i>
          Chat Bot
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse
          className="justify-content-end"
          id="responsive-navbar-nav"
        >
          <Nav>
            <Nav.Link
              className="text-dark fw-semibold"
              eventKey={1}
              as={NavLink}
              to={"/chatting"}
            >
              Chatting
            </Nav.Link>

            <Nav.Link
              className="text-dark fw-semibold"
              eventKey={2}
              as={NavLink}
              to={"/register"}
            >
              Register
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
