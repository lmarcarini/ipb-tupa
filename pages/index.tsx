import type { NextPage } from "next";
import { Container } from "react-bootstrap";
import BannerCarousel from "../components/BannerCarousel";
import Programacao from "../components/programacao";
import Local from "../components/local";
import Contato from "../components/Contato";

const Home: NextPage = () => {
  return (
    <>
      <a className="anchor" id="carousel" />
      <BannerCarousel />
      <a className="anchor" id="programacao" />
      <Programacao />
      <a className="anchor" id="local" />
      <Local />
      <a className="anchor" id="contato" />
      <Contato />
      <style jsx>{`
        .anchor {
          display: block;
          position: relative;
          top: -200px;
          visibility: hidden;
        }
      `}</style>
    </>
  );
};

export default Home;
