import type { NextPage } from 'next'
import {Container} from 'react-bootstrap'
import Head from 'next/head'
import BannerCarousel from '../components/BannerCarousel'
import Programacao from '../components/programacao'

const Home: NextPage = () => {
  return (
    <>
      <Container>
        <BannerCarousel/>
        <Programacao/>
      </Container>
    </>
  )
}

export default Home
