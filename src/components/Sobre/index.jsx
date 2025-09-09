import { useState, useEffect } from "react";
import Titulo from "../Titulo";
import destaqueSobre from "../../assets/images/Christopher A Guerreiro150x150png.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHistory,
  faPeopleGroup,
  faToolbox,
} from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import Aos from "aos";
import "aos/dist/aos.css";

function Sobre({ className }) {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      easing: "ease-in-out",
    });
  });
  const [bordaP, setBordaP] = useState(
    "border-b-2 border-b-blue-500 w-0 mx-auto  transition-[1s] p-1 mb-3"
  );
  function maximizarBorda(event) {
    setBordaP((prev) => prev.replaceAll("w-0", "w-[50%]"));
  }
  function minimizarBorda(event) {
    setBordaP((prev) => prev.replaceAll("w-[50%]", "w-0"));
  }
  return (
    <div
      className="secao-sobre bg-gray-100 p-5 "
      onMouseOver={maximizarBorda}
      onMouseOut={minimizarBorda}
    >
      <div className="md:container md:mx-auto">
        <div className="secao-titulo">
          <Titulo
            as="h2"
            className={`text-blue-500 text-center mb-1 `}
            data-aos="zoom-out"
          >
            Quem somos?
          </Titulo>
          {/* <p className="text-red-500 sm:text-xs md:text-2xl md:text-center px-5">
              Conheça um pouco mais sobre a nossa história
            </p> */}
          <p className={bordaP}></p>
        </div>
        <div
          id="secao-conteudo"
          className="flex justify-center items-center p-5 flex-wrap"
        >
          <div className="flex-1 text-justify order-2 p-5 flex flex-col gap-5">
            <Titulo as="h3" className={`text-blue-500  `} data-aos="zoom-out">
              <FontAwesomeIcon icon={faHistory} className="mr-5 " />
              História
              <small className="text-gray-600 block text-xs md:text-xl">
                Mais de 20 anos no mercado, trazendo o melhor para si.
              </small>
            </Titulo>
            <p className="" data-aos="fade-down">
              A Kima é uma empresa de tecnologia fundada com o propósito de
              transformar dados em soluções inteligentes para empresas, governos
              e organizações sociais. Seu foco principal é o desenvolvimento de
              plataformas digitais inovadoras, capazes de integrar inteligência
              artificial, análise de dados e automação de processos.
            </p>
            <p className="" data-aos="fade-down">
              Oferecer soluções tecnológicas que simplifiquem a vida das pessoas
              e aumentem a eficiência das organizações, sempre com foco em
              inovação, segurança e impacto positivo na sociedade.
            </p>
            <div className="marcos-hist flex justify-center md:justify-between gap-5 flex-wrap md:flex-nowrap">
              <div
                className="text-center p-5 shadow-2xl rounded-2xl"
                data-aos="fade-up"
              >
                <p className="text-green-500 text-2xl mb-3">
                  <FontAwesomeIcon
                    icon={faPeopleGroup}
                    className="text-green-600 text-2xl mr-5"
                  />
                  5020
                </p>
                <p className="uppercase">Clientes satisfeitos</p>
              </div>
              <div
                className="text-center p-5 shadow-2xl rounded-2xl"
                data-aos="fade-up"
              >
                <p className="text-blue-500 text-2xl mb-3">
                  <FontAwesomeIcon
                    icon={faToolbox}
                    className="text-blue-600 text-2xl mr-5"
                  />
                  7120
                </p>
                <p className="uppercase">Projetos concluidos</p>
              </div>
              <div
                className="text-center p-5 shadow-2xl rounded-2xl"
                data-aos="fade-up"
              >
                <p className="text-red-500 text-2xl mb-3">
                  <FontAwesomeIcon
                    icon={faHeart}
                    className="text-red-600 text-2xl mr-5"
                  />
                  4897
                </p>
                <p className="uppercase">Indicações recebidas</p>
              </div>
            </div>
          </div>
          <img
            src={destaqueSobre}
            alt=""
            className="flex-1 w-100 h-100 order-1 hover:scale-99 duration-100 transition-[1s] border border-gray-300 rounded-md "
            data-aos="zoom-in"
          />
        </div>
      </div>
    </div>
  );
}

export default Sobre;
