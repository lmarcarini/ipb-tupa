import { Carousel } from "react-bootstrap";
import Image from "next/image";

type Props = {};

const BannerCarousel = (props: Props) => {
  const ratio = {
    width: "1000",
    height: "600",
  };
  return (
    <Carousel className="mb-5">
      <Carousel.Item>
        <Image
          src="/carousel_images/image_1.jpg"
          alt="Glorificar a Deus"
          layout="responsive"
          width={ratio.width}
          height={ratio.height}
          priority={true}
        />
      </Carousel.Item>
      <Carousel.Item>
        <Image
          src="/carousel_images/image_2.jpg"
          alt="É natal"
          layout="responsive"
          width={ratio.width}
          height={ratio.height}
        />
      </Carousel.Item>
      <Carousel.Item>
        <Image
          src="/carousel_images/image_3.jpg"
          alt="Novembro azul"
          layout="responsive"
          width={ratio.width}
          height={ratio.height}
        />
      </Carousel.Item>
    </Carousel>
  );
};

export default BannerCarousel;
