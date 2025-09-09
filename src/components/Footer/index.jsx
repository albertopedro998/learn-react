import Titulo from "../Titulo";
import Navbar from "../Navbar/Navbar";
import {
  FaDownLong,
  FaFacebook,
  FaWhatsapp,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa6";

export default function Footer() {
  return (
    <div
      id="rodape"
      className=" w-full md:h-min-100 bg-gray-900 text-gray-500 p-5 flex justify-center flex-col items-center gap-10 "
    >
      <div className="md:container md:my-auto flex justify-center gap-5 flex-wrap p-5 md:justify-between">
        <section className="flex flex-col gap-2 md:w-150 order-1 " data-aos="zoom-in">
          <Titulo as="h3" className="text-white border-b-1 p-2 ">
            Sobre nós
          </Titulo>
          <p className="">
            Ser reconhecida como uma das líderes globais em tecnologia aplicada à transformação digital, promovendo sustentabilidade, inclusão digital e crescimento inteligente até 2030.
          </p>
        </section>
        <section className="flex flex-col gap-2 flex-1 order-2 " data-aos="zoom-in">
          <Titulo as="h3" className="text-white border-b-1 p-2 ">
            Serviços
          </Titulo>
          <ul className="flex flex-col gap-3">
            <li>
              <a href="#" className="text-gray-400">
                Software
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400">
                Análise de Dados
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400">
                Criaçao de Websites
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400">
                Email-corporativo
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400">
                Domínios
              </a>
            </li>
          </ul>
        </section>
        <section className="flex flex-col bg-blue-100 justify-center items-center gap-5 rounded p-5 md:w-100 w-full bg-linear-to-r from-blue-300 to-blue-900 order-4 md:order-2 lg:order-4 " data-aos="zoom-in">
          <Titulo as="h3" className="text-gray-100 ">
            Newsletter
          </Titulo>
          <form action="#" className="flex flex-col gap-1 w-full">
            <input
              type="email"
              name="user"
              id="user"
              placeholder="exemplo@gmail.com"
              className="w-full rounded text-black px-2 py-2 bg-white outline-0"
            />
            <button className="w-full bg-green-600  rounded text-gray-200 p-2">
              concluido
            </button>
          </form>
        </section>
      </div>
      <div className="redes-sociais flex gap-5 font-bold text-center">
        <a
          href="www.facebook.com/"
          className="font-extrabold text-white text-2xl"
        >
          <FaFacebook />
        </a>
        <a
          href="www.whatsapp.com/"
          className="font-extrabold text-white text-2xl"
        >
          <FaWhatsapp />
        </a>
        <a
          href="www.linkedin.com/"
          className="font-extrabold text-white text-2xl"
        >
          <FaLinkedin />
        </a>
        <a
          href="www.instagram.com/"
          className="font-extrabold text-white text-2xl"
        >
          <FaInstagram />
        </a>
      </div>
      <div>
        <p>
          &copy; 2025. Kima soluções Tecnológicas. todos os direitos reservados
        </p>
      </div>
    </div>
  );
}
