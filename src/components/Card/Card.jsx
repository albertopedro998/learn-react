import Text from "../Text.jsx";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Card.css";
// import Slider from "react-slick";

function Card({ className }) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slideToShow: 1,
    slideToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 600, settings: { slidesToShow: 1 } },
    ],
  };
  return (
    // <Slider {...settings}>
    <div className="relative overflow-hidden" key={1}>
      <div
        className={
          className
            ? className + " card w-full h-[80vh] lg:px-[20em] border-0 "
            : "card bg-amber-50 w-full h-[100vh]"
        }
      >
        <h1 className="text-white text-shadow-2xs text-5xl font-bold md:text-9xl sm:mb-5">
          Anúncios
        </h1>
        <div className="conteudo sm:text-center md:text-left md:w-[500px]">
          <p className="text-white mb-2">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam,
            expedita? Nulla repellendus voluptates ipsa nobis alias sed dolorum
            quisquam deleniti maiores eos quia modi facere aspernatur, non fuga
            sapiente vitae.
          </p>
          <p className="text-white mb-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit..
          </p>
        </div>
        <div className="flex gap-5">
          <button
            className="
                              md:w-50
                              bg-red-500 text-white md:text-2xl px-5 py-2 cursor-pointer rounded"
          >
            Solicitar
          </button>
          <button className="border-white border text-white hover:bg-white hover:text-black transition md:text-2xl px-5 md:py-2 cursor-pointer rounded">
            Carrinho
          </button>
        </div>
      </div>
      <div className="w-100 h-100 bg-white absolute -z md:-right-1/12 -top-[300px] -right-1/7 rounded-[50%] text-5xl text-black text-center flex flex-col justify-center border-0"></div>
      <div className="w-[80%] h-200 bg-white absolute md:right-1/5 md:left-1/10 -bottom-185 right-1/7 left-1/7 text-5xl text-black text-center flex flex-col justify-center border-0"></div>
    </div>
    /*{ </Slider> }*/
  );
}

export default Card;
