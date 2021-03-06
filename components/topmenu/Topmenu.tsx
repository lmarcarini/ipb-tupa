import { Navbar, Nav, Container } from "react-bootstrap";
import Image from "next/image";
import { scrolledmenuStyle, topmenuStyle, menuitemStyle } from "./styles";
import styles from "./Topmenu.module.css";
import Link from "next/link";
import MediaBar from "../MediaBar";
import { useEffect, useState } from "react";

type Props = {};

const Topmenu = (props: Props) => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
  }, []);

  return (
    <Navbar
      className="topmenu"
      style={scrollPosition > 10 ? scrolledmenuStyle : topmenuStyle}
      expand="lg"
      fixed="top"
    >
      <Container>
        <Navbar.Brand>
          <Image
            src="/logoiptupa2021_Prancheta 1.png"
            height="128"
            width="128"
            alt="IPB TUPÃ"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="w-100 nav-fill ms-3 me-3">
            <Link href="/#" passHref>
              <Nav.Link
                as="a"
                className={styles.menuitemStyle + " h4"}
                href="/#"
              >
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
            <MediaBar />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Topmenu;
