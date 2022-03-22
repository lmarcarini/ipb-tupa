import { Container } from "react-bootstrap";
import styles from "./Contato.module.css";

type Props = {};

const Contato = (props: Props) => {
  return (
    <Container className="mb-5">
      <h1 className={styles.header + " text-center"}>Contato</h1>
      <hr />
      <p className="ms-5">Tel.: (14) 99660-4549</p>
    </Container>
  );
};

export default Contato;
