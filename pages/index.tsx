import type { NextPage } from 'next'
import {Container} from 'react-bootstrap'
import Head from 'next/head'
import BannerCarousel from '../components/BannerCarousel'
import Programacao from '../components/programacao'
import Local from '../components/local'

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
      </Container>
    </>
  )
}

export default Home
