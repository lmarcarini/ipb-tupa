import Image from "next/image";
import { Container, Row, Col } from "react-bootstrap";
import styles from "./Local.module.css";

type Props = {};

const Local = (props: Props) => {
  const mapsLink =
    "https://www.google.com/maps/place/Igreja+Presbiteriana+do+Brasil/@-21.9369722,-50.5135345,16.69z/data=!4m5!3m4!1s0x0:0xce1a215e6d10dab!8m2!3d-21.9355828!4d-50.5122043";
  return (
    <Container className="mb-5" fluid="md">
      <Row>
        <h1 className={styles.header + " text-center"}>Local</h1>
        <hr />
      </Row>
      <Row>
        <Col sm={12}>
          <p className="text-center">R. Paiaquas, 734, Centro, Tupã/SP</p>
        </Col>
        <Col sm={12}>
          {" "}
          {/*TODO:add link to image*/}
          <a
            target="_blank"
            href="https://www.google.com/maps/place/Igreja+Presbiteriana+do+Brasil/@-21.9369722,-50.5135345,16.69z/data=!4m5!3m4!1s0x0:0xce1a215e6d10dab!8m2!3d-21.9355828!4d-50.5122043"
            rel="noopener noreferrer"
            aria-label="maps"
          >
            <Image
              src="/mapa.jpg"
              alt="mapa"
              layout="responsive"
              width="320"
              height="130"
            />
          </a>
        </Col>
      </Row>
    </Container>
  );
};

export default Local;
