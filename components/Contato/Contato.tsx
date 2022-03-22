import { Col, Container, Row } from "react-bootstrap";
import styles from "./Contato.module.css";

type Props = {};

const Contato = (props: Props) => {
  return (
    <Container className="mb-5">
      <h1 className={styles.header + " text-center"}>Contato</h1>
      <hr />
      <Row>
        <Col>
          <b>Tel.:</b> (14) 99660-4549
        </Col>
        <Col>
          {" "}
          <b>DÍZIMOS E/OU OFERTAS</b>
          <p>
            Igreja Presbiteriana de Tupã
            <br />
            CNPJ 54.723.176/0001-09
          </p>
          <p>
            Banco: Bradesco <br />
            Agência: 10 <br />
            Conta corrente: 9463-3 PIX <br />
            54723176000109
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default Contato;
