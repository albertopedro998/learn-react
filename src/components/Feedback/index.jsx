import { FaAngleLeft, FaAngleRight, FaStar } from "react-icons/fa6";
import Titulo from "../Titulo";
import user1 from "../../assets/images/people/pexels-justin-shaifer-1222271.jpg";
import user2 from "../../assets/images/people/portrait-3233851_1280.jpg";
import user3 from "../../assets/images/people/image.jpg";
import user4 from "../../assets/images/people/92648aa6398abf8a6386281833296b45.png";
import Card from "../../pages/Dominio/Card";

const comentarios = [
  {
    id: crypto.randomUUID(),
    autor: "Alberto Pedro",
    foto: user1,
    tempo: "há 3 horas",
    texto: `Gostei da colaboração que tive com a empresa Kima.
            Atendimento rápido e seguro. Serviço bem prestado, recomendo.`,
  },
  {
    id: crypto.randomUUID(),
    autor: "Simão António",
    foto: user2,
    tempo: "há 13 horas",
    texto: `Gostei da colaboração que tive com a empresa Kima.
            Atendimento rápido e seguro. Serviço bem prestado, recomendo.`,
  },
  {
    id: crypto.randomUUID(),
    autor: "Jolana da Silva",
    foto: user3,
    tempo: "há 2 dias",
    texto: `Gostei da colaboração que tive com a empresa Kima.
            Atendimento rápido e seguro. Serviço bem prestado, recomendo.`,
  },
  {
    id: crypto.randomUUID(),
    autor: "Helena Kinanga",
    foto: user4,
    tempo: "há 26 minutos",
    texto: `Gostei da colaboração que tive com a empresa Kima.
            Atendimento rápido e seguro. Serviço bem prestado, recomendo.`,
  },
];
export default function Feedback() {
  return (
    <div className="container md:mx-auto my-30 ">
      <Titulo
        as="h3"
        className={`text-center uppercase font-bold flex justify-center gap-5 items-center text-black`}
      >
        <FaAngleLeft className="text-blue-500"/> {'"'} Deixe o seu
        <span className="text-blue-500 ">Feedback</span>para nós {'"'}{" "}
        <FaAngleRight className="text-blue-500" />
      </Titulo>
      <div className="flex gap-5 justify-center text-yellow-400 my-5">
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
      </div>
      <div className="flex gap-2 flex-wrap justify-center lg:flex-nowrap">
        {comentarios.map((comentario) => (
          <Card
            key={comentario.id}
            className={`p-5 flex flex-col gap-1 max-w-1/1 my-4 md:max-w-1/3 lg:max-w-1/4 `}
          >
            <figure className="flex items-center gap-5 text-gray-500 ">
              <img
                src={comentario.foto}
                alt="imagem"
                className="w-[50px] h-[50px] rounded-full border-2 border-double border-gray-100"
              />
              <figcaption>
                <p>{comentario.autor}</p>
                <p className="text-xs ">{comentario.tempo}</p>
              </figcaption>
            </figure>
            <p className="ml-18 capitalize">{comentario.texto}</p>
          </Card>
        ))}
      </div>
    </div>
  );
}
