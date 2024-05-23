import { Nav, NavDropdown } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Outlet } from 'react-router-dom';



export function BarraLogin(){

  return(
    <div>

    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#link">Link</Nav.Link>
                <Nav.Link href="#link">Link</Nav.Link>
                
            </Nav>
          </Navbar.Collapse>
          <Navbar.Collapse className="justify-content-end">
            <NavDropdown title="Athos" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Minha conta</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Sair</NavDropdown.Item>
            </NavDropdown>
          </Navbar.Collapse>
      </Container>
    </Navbar>
    <Outlet/>
    </div>
  );
}
