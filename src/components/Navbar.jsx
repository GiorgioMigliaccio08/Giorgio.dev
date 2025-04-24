import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

function BasicExample() {
  return (
    <Navbar expand="lg" style={{ backgroundColor: "#add8e6" }}>
      <Container>
        <Navbar.Brand href="#home">&lt;&gt; Giorgio Dev &lt;/&gt;</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home">// About</Nav.Link>
            <Nav.Link href="#projects">// Project</Nav.Link>
            <Nav.Link href="#contact">// Contact</Nav.Link>
            <NavDropdown title="// More" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Contact</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another information
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">More</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Last Portfolio
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;
