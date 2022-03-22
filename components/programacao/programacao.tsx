import styles from "./Programacao.module.css"
import {Container, Row, Col} from "react-bootstrap"

type Props = {}

const Programacao = (props: Props) => {
  return (
    <Container className="mt-5">
    <h1 className={styles.header+" text-center"}>
      Programação
    </h1>
    <hr/>
    <Row className="ms-5">
      <Col>
        <b>Domingo</b>
        <p>09:00 Escola Bíblica Dominical</p>
        <p>19:00 Culto</p>
      </Col>
      <Col>
        <b>Terça</b>
        <p>20:00 Culto de Oração</p>
      </Col>
    </Row>
    </Container>
  )
}

export default Programacao