import Card from "../Dominio/Card";
import Titulo from "../../components/Titulo";
import Button from "../../components/Button/Button";
import Text from "../../components/Text";
import fundo from "../../assets/images/people/fd.jpg";
import { FaClosedCaptioning } from "react-icons/fa6";

export default function Website() {
  const anunciosSites = [
    {
      id: Math.random(),
      text: "Layout exclusivo",
    },
    {
      id: Math.random(),
      text: "Otimização para celulares",
    },
    {
      id: Math.random(),
      text: "Integração com redes sociais",
    },
  ];
  return (
    <div className="">
      <Card
        className={` min-h-[70vh] text-center flex flex-col justify-center items-center gap-7`}
      >
        <Titulo
          as="h2"
          data-aos="slide-up"
          className={` h-full w-full bg-[rgba(0,0,0,.5)] fixed top-0 text-white md:container font-extrabold text-center flex flex-col justify-center bottom-0 md:static md:bg-[white] md:text-gray-700 z-2 md:z-0 `}
        >
          Transforme sua ideia em um site profissional!
          <Button
            className={`bg-blue-500 m-5 p-3 max-w-100 mx-auto cursor-pointer rounded-md text-sm text-white `}
          >
            Solicitar Agora
          </Button>
          <Button className="bg-transparent absolute top-0 right-3 md:hidden text-red-500 cursor-pointer " onClick={""}>
            x
          </Button>
        </Titulo>
        <Text data-aos="fade-right">
          Criamos websites modernos, rápidos e responsivos para destacar o seu
          negócio no mundo digital.
        </Text>
        <div className="flex gap-5 justify-center flex-wrap " data-aos="slide-up">
          {anunciosSites.map((item) => (
            <Card
              key={item.id}
              className={`w-100 h-50 flex items-center justify-center text-lg font-bold`}
            >
              {item.text}
            </Card>
          ))}
        </div>
        <Text data-aos="fade-left">Tenha mais visibilidade online!</Text>
      </Card>
    </div>
  );
}
