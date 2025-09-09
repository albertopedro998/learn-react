import softwareImg from "../../assets/images/software1600b.webp";
import dominioImg from "../../assets/images/dominio-.com_.webp";
import webSiteImg from "../../assets/images/website.jpg";
import Titulo from "../Titulo";
import Aos from "aos";
import "aos/dist/aos.css"
import { useEffect } from "react";
import { FaEarthAfrica } from "react-icons/fa6";
// import softwareImg from "../../assets/images/software1600b.webp";

const Servicos = ({ className }) => {
  useEffect(()=>{
    Aos.init({
      duration: 1000,
      easing: "ease-in-out"
    })
  },[])
  const services = [
    {
      id: 1,
      img: softwareImg,
      title: "Criaão de Software",
      ben: "Comunicaçao personalizada para o seu negócio",
      price: `Kz 200.000`,
      description: `Utilizar um software personalizado permite automatizar tarefas,
          reduzir custos.`,
    },
    {
      id: 2,
      img: dominioImg,
      title: "Criação de Domínios",
      price: `Kz 9.000`,
      ben: "Comunicaçao personalizada para o seu negócio",
      description: `Registrar um domínio próprio fortalece a identidade da sua marca, transmite credibilidade e facilita o acesso dos clientes ao seu negócio online.
      `,
    },
    {
      id: 4,
      img: webSiteImg,
      title: "E-mail corporativo",
      ben: "Comunicaçao personalizada para o seu negócio",
      price: `Kz 100.000`,
      description: `Utilizar um software personalizado permite automatizar tarefas,
          reduzir custos...`,
    },
    {
      id: 3,
      img: webSiteImg,
      title: "Criação de Website",
      ben: "Comunicaçao personalizada para o seu negócio",
      price: `Kz 150.000`,
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
              " flex-col sm:flex-auto flex overflow-hidden md:w-[45%] lg:w-[20%] flex-col gap-2 h-140 justify-between p-5 shadow-md border border-gray-200 rounded "
            : " flex flex-col overflow-hidden"
        }
      >
        <figure className="w-full h-20 flex flex-col">
          <img
            src={service.img}
            alt=""
            style={{ width: "100%", height: "80%" }}
            className="" 
        data-aos="fade-up"
          />
          <figcaption className="text-xl text-gray-700 font-mono py-3 pl-2 font-extrabold " 
        data-aos="fade-up">
            {service.title}
            {/* <FaEarthAfrica /> */}
          </figcaption>
        </figure>

        <p className="descricao text-gray-500 pl-2 mt-3 " 
        data-aos="fade-up">{service.ben}</p>

        <p className="descricao text-gray-500 pl-2 text-justify " 
        data-aos="fade-up">{service.description}</p>
        <div className="flex flex-col">
          
          <small className="p-2 text-gray-400"
          data-aos="fade-up">
            apartir de
          </small>
          <a href="#" className="text-2xl text-red-600 font-extrabold p-2"
          data-aos="fade-up">
            {service.price}
          </a>
          <small className="p-2 text-gray-400"
          data-aos="fade-up">
            Mensal
          </small>
        </div>
        <button className="bg-blue-500 border text-white p-3 w-30 rounded cursor-pointer w-full box-border" 
        data-aos="fade-up">
          ver planos
        </button>
      </div>
    );
  }
  return (
    <div className={className ? className + " " : ""}>
      <p className="text-blue-500 font-bold border-y-blue-300 border-y-1 p-3 animate-bounce" data-aos="slide-down">Confire abaixo</p>
      <h2 className="text-blue-500 text-3xl md:text-7xl font-bold mb-5" 
        data-aos="zoom-out"><span className="text-black">Nossos</span> Serviços</h2>
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
