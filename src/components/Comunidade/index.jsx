import Titulo from "../Titulo";
import logo from "../../assets/images/img-community/logo.jpeg";
import logo1 from "../../assets/images/img-community/logo1.PNG";
import logo2 from "../../assets/images/img-community/logo2.jpeg";
import logo3 from "../../assets/images/img-community/logo3.jpeg";
import logo4 from "../../assets/images/img-community/logo4.jpeg";
import logo5 from "../../assets/images/img-community/logo5.jpeg";
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
      img: logo,
      legenda: "",
    },
    {
      img: logo1,
      legenda: "",
    },
    {
      img: logo2,
      legenda: "",
    },
    {
      img: logo3,
      legenda: "",
    },
    {
      img: logo4,
      legenda: "",
    },
    {
      img: logo5,
      legenda: "",
    },
  ];
  return (
    <div className="p-5 m-10">
      <Titulo as="h3" className="text-center " data-aos="slide-up">
        Mais de 1 000 negócios confiam em nós.
      </Titulo>

      <div>
        <div className="md:w-[700px] md:mx-auto">
          <Slider
            {...settings}
            className="parceiros container flex gap-5 justify-center m-auto items-center"
          >
            {comunidaLogo.map((item, index) => (
              <div
                className="m-2 px-2 w-[200px]"
                key={`logo-comunidade${index}`}
              >
                <figure
                  className="flex flex-col gap-2 h-[150px] w-[100%] overflow-hidden "
                  data-aos="slide-up"
                >
                  <img
                    src={item.img}
                    className="h-42 w-[100%] rounded-md "
                    alt="Imagem"
                  />
                  {item.legenda && (
                    <figcaption className="">{item.legenda}</figcaption>
                  )}
                </figure>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}
