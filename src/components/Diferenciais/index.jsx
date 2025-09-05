import Titulo from "../Titulo";
import {
  FaCloud,
  FaCode,
  FaPeopleGroup,
  FaRegUser,
  FaRegMessage,
  FaRegStar,
} from "react-icons/fa6";
import Aos from "aos";
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
      text: " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi sapiente reiciendis consequuntur omnis obcaecati voluptas, quidem iusto harum.",
      icon: () => {
        return <FaRegUser className="text-4xl" />;
      },
    },
    {
      title: "Atendimento rápido",
      text: " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi sapiente reiciendis consequuntur omnis obcaecati voluptas, quidem iusto harum.",
      icon: () => {
        return <FaRegMessage className="text-4xl" />;
      },
    },
    {
      title: "Segurança elevada",
      text: " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi sapiente reiciendis consequuntur omnis obcaecati voluptas, quidem iusto harum.",
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

      <p className="text-justify my-3 max-w-[700px] text-gray-500 " data-aos="slide-up">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim corporis
        repellat, dolorem architecto, consectetur maxime tenetur ea neque, saepe
        inventore fuga!
      </p>

      {/* CARACTERISTICAS */}
      <div className="difer flex gap-5 my-4 p-2 flex-wrap justify-center">
        {caracter.map((caracter, index) => (
          <div
            key={index}
            className="rounded-2xl bg-blue-500 w-100 md:w-70 lg:w-100 h-50 w-max-100 h-max-100 flex flex-col justify-center items-center text-white text-2xl"
            data-aos="slide-up"
          >
            {caracter.icon()}
            {caracter.text}
          </div>
        ))}
      </div>
      {/* PONTOS FORTES */}
      <div className="fortes container">
        <div className="flex flex-wrap items-center justify-center md:justify-between gap-5 text-gray-500 ">
          {pontosFortes.map((ponto, index) => (
            <div key={`p-${index}`} className="w-max-100" data-aos="slide-up">
              <p className="flex gap-5 items-center">
                {ponto.icon()}
                {ponto.title}
              </p>
              <p className="w-50 md:w-70 lg:w-100 ml-14 text-xs md:text-lg">
                {ponto.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
