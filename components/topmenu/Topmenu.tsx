import {Navbar, Nav, Container} from 'react-bootstrap'
import Image from 'next/image'
import {topmenuStyle, menuitemStyle} from './styles'

type Props = {}

const Topmenu = (props: Props) => {

  return (
    <Navbar className="topmenu" style={topmenuStyle} expand="sm">
        <Container>
            <Navbar.Brand>
                <Image src='/ipb_brand.jpg' height='128' width='128'/>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll"/>
            <Navbar.Collapse id='navbarScroll'>
                <Nav  className="ms-auto me-auto">
                    <Nav.Link className="h3" href="/" style={menuitemStyle}>
                        Início
                    </Nav.Link>
                    <Nav.Link className="h3" href="/#programacao" style={menuitemStyle}>
                        Programação
                    </Nav.Link>
                    <Nav.Link className="h3" href="/#local" style={menuitemStyle}>
                        Local
                    </Nav.Link>
                    <Nav.Link className="h3" href="/#contato" style={menuitemStyle}>
                        Contato
                    </Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
  )
}

export default Topmenu;