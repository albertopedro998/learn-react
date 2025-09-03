import softwareImg from "../../assets/images/software1600b.webp";
import dominioImg from "../../assets/images/dominio-.com_.webp";
import webSiteImg from "../../assets/images/website.jpg";
import Titulo from "../Titulo";
// import softwareImg from "../../assets/images/software1600b.webp";

const Servicos = ({ className }) => {
  const services = [
    {
      id: 1,
      img: softwareImg,
      title: "Software",
      description: `Utilizar um software personalizado permite automatizar tarefas,
          reduzir custos...`,
    },
    {
      id: 2,
      img: dominioImg,
      title: "Domínios",
      description: `Utilizar um software personalizado permite automatizar tarefas,
          reduzir custos,...`,
    },
    {
      id: 4,
      img: webSiteImg,
      title: "E-mail corporativo",
      description: `Utilizar um software personalizado permite automatizar tarefas,
          reduzir custos...`,
    },
    {
      id: 3,
      img: webSiteImg,
      title: "Website",
      description: `Utilizar um software personalizado permite automatizar tarefas,
          reduzir custos, aumentar...`,
    }
  ];
  function Service({ service, className }) {
    return (
      <div
        className={
          className
            ? className +
              " flex-col sm:flex-auto md:flex-none flex overflow-hidden md:w-[45%] lg:w-[20%]"
            : " flex flex-col overflow-hidden"
        }
      >
        <figure className="w-full h-70">
          <img
            src={service.img}
            alt=""
            style={{ width: "100%", height: "80%" }}
            className=""
          />
          <figcaption className="text-1xl text-black font-mono py-3 pl-2">
            {service.title}
          </figcaption>
        </figure>

        <p className="descricao text-gray-500 pl-2">{service.description}</p>
        <a href="#" className="text-blue-500 p-2">
          ler mais
        </a>
        <button className="border-blue-700 border text-blue-700 py-1 p-3 w-30 rounded m-2 cursor-pointer">
          Solicitar
        </button>
      </div>
    );
  }
  return (
    <div className={className ? className + " " : ""}>
      <p className="text-red-500 font-bold border-y-blue-300 border-y-1 p-3">Confire abaixo</p>
      <h2 className="text-blue-500 text-3xl md:text-7xl font-bold mb-5"><span className="text-black">Nossos</span> Serviços</h2>
      <div className="flex gap-4 flex-wrap md:w-[80%] md:justify-between">
        {services.map((service) => (
          <Service key={service.id} service={service} className={`hover:shadow-2xl`} />
        ))}
      </div>
      <button className="text-white bg-blue-500 py-1 px-2 m-5 rounded-4xl text-1xl">
        Ver mais
      </button>
    </div>
  );
};
export default Servicos;
