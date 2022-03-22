import Image from 'next/image'
import {Container, Row, Col} from 'react-bootstrap'
import styles from './Local.module.css'

type Props = {}

const Local = (props: Props) => {
    const mapsLink = "https://www.google.com/maps/place/Igreja+Presbiteriana+do+Brasil/@-21.9369722,-50.5135345,16.69z/data=!4m5!3m4!1s0x0:0xce1a215e6d10dab!8m2!3d-21.9355828!4d-50.5122043"
  return (
      <Container className="mt-5" fluid="md">
          <Row>
          <h1 className={styles.header+" text-center"}>
            Local
        </h1>
          </Row>
        <Row className="mt-3" >
            <Col md={6}> {/*TODO:add link to image*/}
                <Image src="/mapa.jpg" alt="mapa" layout="responsive" width="320" height="320"/>
            </Col>
            <Col>
                <p>R. Paiaquas, 734, Centro, Tupã/SP</p>
            </Col>
        </Row>
      </Container>
  )
}

export default Local