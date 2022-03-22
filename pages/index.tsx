import type { NextPage } from 'next'
import {Container} from 'react-bootstrap'
import BannerCarousel from '../components/BannerCarousel'
import Programacao from '../components/programacao'
import Local from '../components/local'
import Contato from '../components/Contato'

const Home: NextPage = () => {
  return (
    <>
      <Container>
        <div id="carousel">
          <BannerCarousel/>
        </div>
        <div id="programacao">
         <Programacao/>
        </div>
        <div id="local">
         <Local/>
        </div>
        <div id="contato">
         <Contato/>
        </div>
      </Container>
    </>
  )
}

export default Home
