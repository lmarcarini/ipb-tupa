import type { NextPage } from 'next'
import {Container} from 'react-bootstrap'
import Head from 'next/head'
import BannerCarousel from '../components/BannerCarousel'

const Home: NextPage = () => {
  return (
    <>
      <Container>
        <BannerCarousel/>
      </Container>
    </>
  )
}

export default Home
