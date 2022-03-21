import {Container} from "react-bootstrap"

type Props = {}

const Programacao = (props: Props) => {
  return (
    <Container style={{color: "white"}} className="mt-5">
    <h1>Programação</h1>
    <div className="ms-5 mt-3">
        <p>Culto: Domingo - 19:00</p>
        <p>Escola Bíblica Dominical: Domingo - 9:00</p>
        <p>Culto de oração: Terça - 20:00</p>
    </div>
    </Container>
  )
}

export default Programacao