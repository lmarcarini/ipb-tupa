import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import Image from 'next/image'

type Props = {}

const Topmenu = (props: Props) => {
  return (
    <Navbar>
        <Container>
        <Navbar.Brand>
            <Image src='/ipb_brand.jpg' height='128' width='128'/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll"/>
        <Navbar.Collapse id='navbarScroll' className="mr-auto">
        <Nav >
            <Nav.Link>
                Início
            </Nav.Link>
            <Nav.Link>
                Local
            </Nav.Link>
            <Nav.Link>
                Contato
            </Nav.Link>
        </Nav>
        </Navbar.Collapse>
        </Container>
    </Navbar>
  )
}

export default Topmenu;