import Input from "../../components/Input";
import Titulo from "../../components/Titulo";
import Card from "./Card";
import { useParams } from "react-router-dom";
import { number_format, dominiosLista } from "./helpers";
import img from "../../assets/images/icon/ilustrations/istockphoto-1447332295-170667a.jpg";
import { FaAddressCard, FaEnvelope, FaHive, FaOpera, FaUser, FaWhatsapp} from "react-icons/fa6";
export default function Registar() {
  const data = [
    {
      id: "domain",
      type: "text",
      label: "Domínio",
      placeholder: "suaempresa.dominio",
      icon: <FaOpera />,
    },
    {
      id: "name",
      type: "text",
      label: "Nome",
      placeholder: "Digite o seu nome",
      icon: <FaUser />,
    },
    {
        id: "email",
        type: "email",
        label: "E-mail",
        placeholder: "seuemail@gmail.com",
        icon: <FaEnvelope />,
    },
    {
        id: "whats",
        type: "tel",
        label: "Whatsapp",
        placeholder: "9XX - XXX - XXX",
        icon: <FaWhatsapp />,
    },
    {
        id: "endereco",
        type: "text",
        label: "Endereco",
        placeholder: "Ex: Avenida São Paulo",
        icon: <FaAddressCard />,
    },
  ];
  const item = dominiosLista[useParams().id - 1];
  return (
    <div className="container m-10 mx-auto min-h-[70vh] flex flex-wrap items-center justify-center gap-5 box-content lg:flex-nowrap lg:px-7 ">
      <form
        action=""
        className="flex flex-col items-center justify-center gap-2 md:bg-gray-50  w-100 md:min-w-130 rounded-md md:rounded-2xl p-10 md:px-10 box-border"
        data-aos="fade-right"
      >
        <FaHive className="text-5xl" />
        <Titulo as="h3" className="text-blue-500 ">
          Prencha com os seus dados
        </Titulo>
        {data.map((item) => (
          <div key={item.id} className="flex flex-col gap-2 w-full">
            <label htmlFor={item.id} className="flex items-center gap-1">
              {item.icon} {item.label}
            </label>
            <Input
              type={item.type}
              id={item.id}
              placeholder={item.placeholder}
            />
          </div>
        ))}
        <button className="bg-blue-500 w-full py-2 text-white cursor-pointer font-bold">
          Enviar
        </button>
      </form>
      <div
        className="infoProd p-5 text-center flex items-center justify-center flex-col md:flex-row lg:flex-col lg:items-baseline md:text-left"
        data-aos="fade-left"
      >
        <img src={img} alt="" className="w-[100%] h-[400px]" />
        <Card
          key={"-" + item.id}
          className="card-dominio hover:shadow-2xl md:w-150 flex flex-col p-5 bg-white text-black justify-center items-center gap-5 rounded-md m-3 md:h-50 relative bg-linear-to-r from-blue-400 to-blue-900"
          data-aos="slide-up"
        >
          <p className="text-2xl font-bold md:text-4xl text-white ">
            <span className="text-3xl">.</span>
            {item.name}
          </p>
          <small className="text-orange-500 font-bold text-shadow-2xs text-shadow-white text-xl md:text-3xl ">
            Kz {number_format(item.price)}
          </small>
          <p className=" text-xs text-white font-bold absolute bottom-0 left-2">
            {item.category}
          </p>
        </Card>

        {/* <section className="lg:w-105 md:w-[70%]">
          <Titulo as="h4">Sobre</Titulo>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
            provident enim quos, ducimus voluptatum architecto vitae, commodi
            neque accusamus nulla obcaecati dolorum nisi, temporibus cum aliquid
            nam iusto placeat at!
          </p>
        </section> */}
      </div>
    </div>
  );
}
