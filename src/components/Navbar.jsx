import NavbarBootstrap from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'

function Navbar (){

    return (   
      <NavbarBootstrap expand="lg" className="navbar">
        <Container>
          <NavbarBootstrap.Brand href="#page-top" className="text-uppercase">
            Start Bootstrap
          </NavbarBootstrap.Brand>

          <NavbarBootstrap.Toggle aria-controls="navbarResponsive" />

          <NavbarBootstrap.Collapse id="navbarResponsive">
            <Nav className="ms-auto">
              <Nav.Link href="#portfolio" className="nav-link-custom text-uppercase">Portfolio</Nav.Link>
              <Nav.Link href="#about" className="nav-link-custom text-uppercase">About</Nav.Link>
              <Nav.Link href="#contact" className="nav-link-custom text-uppercase">Contact</Nav.Link>
            </Nav>
          </NavbarBootstrap.Collapse>
        </Container>
      </NavbarBootstrap>
    )
}
export default Navbar;