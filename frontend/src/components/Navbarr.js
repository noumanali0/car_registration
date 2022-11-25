import { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import jwtDecode from "jwt-decode";

function Navbarr() {
  const [name, setName] = useState(null);
  useEffect(() => {
    const token = localStorage.getItem("login");

    if (token) {
      setName(jwtDecode(token).user.name);
    }
  }, []);

  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">Register Your Vehicle </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto"></Nav>
          <Nav>
            <Nav.Link href="">{name}</Nav.Link>
            <Nav.Link
              href="/login"
              onClick={() => {
                localStorage.removeItem("login");
              }}
            >
              Logout
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbarr;
