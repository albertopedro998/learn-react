import Titulo from "../Titulo";
import {
  FaCloud,
  FaCode,
  FaPeopleGroup,
  FaRegUser,
  FaRegMessage,
  FaRegStar,
} from "react-icons/fa6";
export default function Diferenciais() {
  const caracter = [
    {
      text: "Diferenciais",
      icon: () => {
        return <FaCloud className="text-9xl" />;
      },
    },
    {
      text: "Objectivos",
      icon: () => {
        return <FaPeopleGroup className="text-9xl" />;
      },
    },
    {
      text: "Caracteristicas",
      icon: () => {
        return <FaCode className="text-9xl" />;
      },
    },
  ];

  const pontosFortes = [
    {
      title: "Profisiionais qualificados",
      text: "A excelência não está apenas na tecnologia, mas também nas pessoas que a constroem. A equipe é formada por profissionais altamente qualificados, com experiência em desenvolvimento de software, cibersegurança, ciência de dados e gestão de projetos.",
      icon: () => {
        return <FaRegUser className="text-4xl" />;
      },
    },
    {
      title: "Atendimento rápido",
      text: `O atendimento rápido é outro diferencial da empresa. A Kima adota metodologias ágeis e canais de suporte 24/7, garantindo que qualquer solicitação seja tratada com eficiência, reduzindo tempo de espera e aumentando a satisfação dos clientes.`,
      icon: () => {
        return <FaRegMessage className="text-4xl" />;
      },
    },
    {
      title: "Segurança elevada",
      text: "Todos os sistemas desenvolvidos passam por rigorosos testes de qualidade e seguem padrões internacionais de proteção de dados. A Kima investe constantemente em criptografia, monitoramento em tempo real e práticas de compliance digital, assegurando que os clientes tenham total confiança em suas soluções.",
      icon: () => {
        return <FaRegStar className="text-4xl" />;
      },
    },
  ];
  return (
    <div className=" container m-0 md:m-auto">
      <Titulo
        as="h3"
        className="text-blue-500 text-center mt-5 "
        data-aos="slide-up"
      >
        Principais Diferenciais
      </Titulo>

      <p
        className="text-justify md:text-center my-3 max-w-[700px] mx-auto text-gray-500 "
        data-aos="slide-up"
      >
        A Kima combina talento humano, velocidade e segurança para entregar
        muito mais do que tecnologia: entrega tranquilidade e valor real para
        empresas e pessoas
      </p>

      {/* CARACTERISTICAS */}
      <div className="difer flex gap-5 my-4 p-2 flex-wrap justify-center">
        {caracter.map((caracter, index) => (
          <div
            key={index}
            className="rounded-2xl bg-linear-to-br from-blue-500 to-black w-100 md:w-70 lg:w-100 h-50 w-max-100 h-max-100 flex flex-col justify-center items-center text-white text-2xl"
            data-aos="slide-up"
          >
            {caracter.icon()}
            {caracter.text}
          </div>
        ))}
      </div>
      {/* PONTOS FORTES */}
      <div className="fortes container">
        <div className="flex flex-wrap items-center justify-center lg:container lg:flex-nowrap text-gray-500 lg:text-sm ">
          {pontosFortes.map((ponto, index) => (
            <div key={`p-${index}`} className="w-max-100" data-aos="slide-up">
              <p className="flex gap-5 items-center">
                {ponto.icon()}
                {ponto.title}
              </p>
              <p className="w-50 md:w-70 lg:w-100 ml-14 text-xs md:text-lg lg:text-sm">
                {ponto.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
