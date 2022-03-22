import { Navbar, Nav, Container } from "react-bootstrap";
import Image from "next/image";
import { topmenuStyle, menuitemStyle } from "./styles";
import Link from "next/link";
import MediaBar from "../MediaBar";

type Props = {};

const Topmenu = (props: Props) => {
  return (
    <Navbar className="topmenu" fixed="top" style={topmenuStyle} expand="md">
      <Container>
        <Navbar.Brand>
          <Image src="/logo.png" height="100" width="100" alt="IPB TUPÃ" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto">
            <Link href="/#" passHref>
              <Nav.Link as="a" className="h4" href="/#" style={menuitemStyle}>
                INÍCIO
              </Nav.Link>
            </Link>
            <Link href="/#programacao" passHref>
              <Nav.Link
                as="a"
                className="h4"
                href="/#programacao"
                style={menuitemStyle}
              >
                PROGRAMAÇÃO
              </Nav.Link>
            </Link>
            <Link href="/#local" passHref>
              <Nav.Link
                as="a"
                className="h4"
                href="/#local"
                style={menuitemStyle}
              >
                LOCAL
              </Nav.Link>
            </Link>
            <Link href="/#contato" passHref>
              <Nav.Link
                as="a"
                className="h4"
                href="/#contato"
                style={menuitemStyle}
              >
                CONTATO
              </Nav.Link>
            </Link>
            <Link href="/sobre" passHref>
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
          <MediaBar />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Topmenu;
