import { Navbar, Nav, Container } from "react-bootstrap";
import Image from "next/image";
import { topmenuStyle, menuitemStyle } from "./styles";
import Link from "next/link";

type Props = {};

const Topmenu = (props: Props) => {
  return (
    <Navbar className="topmenu" fixed="top" style={topmenuStyle} expand="sm">
      <Container>
        <Navbar.Brand>
          <Image src="/Logo.Png" height="100" width="100" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="ms-auto me-auto">
            <Link href="/#">
              <Nav.Link as="a" className="h4" href="/#" style={menuitemStyle}>
                INÍCIO
              </Nav.Link>
            </Link>
            <Nav.Link className="h4" href="/#programacao" style={menuitemStyle}>
              PROGRAMAÇÃO
            </Nav.Link>
            <Nav.Link className="h4" href="/#local" style={menuitemStyle}>
              LOCAL
            </Nav.Link>
            <Nav.Link className="h4" href="/#contato" style={menuitemStyle}>
              CONTATO
            </Nav.Link>
            <Link href="/sobre">
              <Nav.Link
                as="a"
                className="h4"
                href="/sobre"
                style={menuitemStyle}
              >
                SOBRE
              </Nav.Link>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Topmenu;
