import Titulo from "../Titulo";
import alibabaLogo from "../../assets/images/img-community/im-457227.avif";
import amazonLogo from "../../assets/images/img-community/Amazon-Logo-2000.png";
import googleLogo from "../../assets/images/img-community/google-logo-png-google-sva-scholarship-20.png";
import FacebookLogo from "../../assets/images/img-community/Facebook_Logo_(2019).svg.png";
import linkedinLogo from "../../assets/images/img-community/a9fc2a2b-4472-4151-8efa-3c7a306097bf_3400x2125.png";
import Slider from "react-slick";

export default function Comunidade() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 490, settings: { slidesToShow: 1 } },
    ],
  };
  const comunidaLogo = [
    {
      img: googleLogo,
      legenda: "",
    },
    {
      img: FacebookLogo,
      legenda: "",
    },
    {
      img: linkedinLogo,
      legenda: "",
    },
    {
      img: amazonLogo,
      legenda: "",
    },
    {
      img: alibabaLogo,
      legenda: "",
    },
  ];
  return (
    <div className="p-5 mt-5">
      <Titulo as="h2" className="text-center " data-aos="slide-up">
        Comunidade Extensiva
      </Titulo>
      <p
        className="text-center md:w-[900px] md:mx-auto p-5 text-gray-500 "
        data-aos="slide-up"
      >
        A empresa Kima Soluções Tecnológicas, cresce a cada dia que passa,
        trabalhamos dia e noite para trazer a si o melhor da tecnologia. Conheça
        os nossos parceiros, convidamos você a se juntar a nossa comunidade.
      </p>

      <div>
        <div className="md:w-[700px] md:mx-auto">
          <Slider
            {...settings}
            className="parceiros container flex gap-5 justify-center m-auto items-center"
          >
            {comunidaLogo.map((item, index) => (
              <div className="m-2 px-2 w-[200px]" key={`logo-comunidade${index}`}>
                <figure
                  className="flex flex-col gap-2 h-[150px] w-[100%] overflow-hidden "
                  data-aos="slide-up"
                >
                  <img
                    src={item.img}
                    className="h-42 w-[100%] rounded-md "
                    alt="Imagem"
                  />
                  {item.legenda && <figcaption className="">{item.legenda}</figcaption>}
                </figure>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}
