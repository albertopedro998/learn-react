import Titulo from "../Titulo";
import imgParc from "../../assets/images/service-thumbnail-3-270x300.jpg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
export default function Comunidade() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slideToShow: 4,
    slideToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      { breakpoint: 992, settings: { slidesToShow: 2} },
      { breakpoint: 490, settings: { slidesToShow: 1 } },
    ],
  };
  return (
    <div>
      <Titulo as="h2" className="text-center ">
        Comunidade Extensiva
      </Titulo>
      <p className="text-center md:w-[900px] md:mx-auto p-5 text-gray-500 ">
        A empresa Kima Soluções Tecnológicas, cresce a cada dia que passa,
        trabalhamos dia e noite para trazer a si o melhor da tecnologia. Conheça
        os nossos parceiros, convidamos você a se juntar a nossa comunidade.
      </p>

      <div>
        <div>
          <Slider
            {...settings}
            className="parceiros container flex gap-5 justify-center m-auto items-center"
          >
            <figure
              className="flex flex-col gap-2 h-50 w-[100px] overflow-hidden "
              key={1001}
            >
              <img src={imgParc} className="h-42 rounded-md " alt="Imagem" />
              <figcaption className="">Legenda</figcaption>
            </figure>
            <figure
              className="flex flex-col gap-2 h-50 w-[100px] overflow-hidden "
              key={1002}
            >
              <img src={imgParc} className="h-42 rounded-md " alt="Imagem" />
              <figcaption className="">Legenda</figcaption>
            </figure>
            <figure
              className="flex flex-col gap-2 h-50 w-[100px] overflow-hidden "
              key={1003}
            >
              <img src={imgParc} className="h-42 rounded-md " alt="Imagem" />
              <figcaption className="">Legenda</figcaption>
            </figure>
          </Slider>
        </div>
      </div>
    </div>
  );
}
