import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from './CartWidget/CartWidget';


function navbar() {
  return (
    <>
      <Navbar style={ {backgroundColor: '#01a7ad'} } variant="light">
        <Container className='contenedor_nav'>
          <Navbar.Brand className='logo' href="#home">SANA SANA</Navbar.Brand>
          <Nav className="navbar me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Alimentos</Nav.Link>
            <Nav.Link href="#pricing">Juguetes</Nav.Link>
            <Nav.Link href="#pricing">Areneros</Nav.Link>
            <Nav.Link href="#pricing">Rascadores y cuchas</Nav.Link>
          </Nav>
          <CartWidget />
        </Container>
      </Navbar>
    </>
  );
}

export default navbar;