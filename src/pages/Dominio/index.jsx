import Table from "../../components/Table";
import Text from "../../components/Text";
import Titulo from "../../components/Titulo";
import Card from "./Card";
import "./style.css";
import Slider from "react-slick";
import { useRef, useState } from "react";
function Dominio() {
  const btnShowMore = useRef();
  const [showListDomain, setShowListDomain] = useState(
    "container flex flex-wrap justify-center max-h-[450px] overflow-hidden "
  );
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
      { breakpoint: 700, settings: { slidesToShow: 2 } },
      { breakpoint: 600, settings: { slidesToShow: 1 } },
    ],
  };

  const dominiosLista = [
    {
      id: 1,
      name: "com",
      price: 24_900,
      category: "Popular",
    },
    {
      id: 2,
      name: "ao",
      price: 24_900,
      category: "Other",
    },
    {
      id: 3,
      name: "org.ao",
      price: 24_900,
      category: "Other",
    },
    {
      id: 4,
      name: "edu.ao",
      price: 34_900,
      category: "Other",
    },
    {
      id: 5,
      name: "it.ao",
      price: 34_900,
      category: "Other",
    },
    {
      id: 6,
      name: "co",
      price: 34_900,
      category: "Other",
    },
    {
      id: 7,
      name: "net",
      price: 24_900,
      category: "Popular",
    },
    {
      id: 8,
      name: "org",
      price: 24_900,
      category: "Popular",
    },
    {
      id: 9,
      name: "info",
      price: 29_900,
      category: "Popular",
    },
  ];
  function showListDomainHandler() {
    btnShowMore.current.innerHTML = btnShowMore.current.innerHTML.includes(
      "mostrar mais"
    )
      ? "mostrar menos"
      : "mostrar mais";

    setShowListDomain((value) =>
      value.includes("max-h-[450px")
        ? value.replace("max-h-[450px]", "")
        : value + " max-h-[450px]"
    );
  }
  function number_format(price) {
    let vlformat = "";
    let vl = new String(price);
    switch (vl.length) {
      case 5:
        vlformat = `${vl.slice(0, 2) + "." + vl.slice(2, vl.length)},00`;
        break;
      case 6:
        vlformat = `${vl.slice(0, 3) + "." + vl.slice(3, vl.length)},00`;
        break;
      case 7:
        vlformat = `${
          vl.slice(0, 1) + "." + vl.slice(1, 4) + "." + vl.slice(4, vl.length)
        },00`;
        break;

      default:
        break;
    }
    return vlformat;
  }
  return (
    <>
      {/* Lista dos Domínios disponíveis */}
      <div className="container mx-auto m-[10em]  md:my-[5em]">
        <Text
          as="h2"
          className={`text-xl md:text-2xl font-bold text-center p-5 mb-20 md:mb-10`}
        >
          Escolha o <span className="text-blue-600 text-3xl">domínio</span> que
          pretendes e adquira na hora.
        </Text>
        <div className={showListDomain} style={{ transition: "1s" }}>
          {dominiosLista.map((item) => (
            <Card
              key={"-" + item.id}
              className="card-dominio hover:shadow-2xl md:w-100 flex flex-col p-5 bg-white text-black justify-center items-center gap-5 rounded-md m-3 md:h-50 relative bg-linear-to-r from-blue-400 to-blue-900"
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
              <button className="text-blue-800 px-5 py-2 rounded hover:cursor-pointer bg-white">
                Registar
              </button>
            </Card>
          ))}
        </div>
        <button
          className="text-blue-400 text-center p-4 container m-auto"
          onClick={showListDomainHandler}
          ref={btnShowMore}
        >
          mostrar mais
        </button>
      </div>
      {/* Fim da Lista dos Domínios disponíveis */}

      {/* Area destaque */}
      <div className="destaque ">
        <div className="text-white h-[90vh] flex flex-col justify-center container md:m-auto">
          <Titulo
            as="h2"
            className={`text-center text-white `}
            data-aos="slide-up"
          >
            Registe o seu
            <strong className="text-blue-500 font-extrabold">
              {" "}
              domínio
            </strong>{" "}
            agora, simples e rápido.
          </Titulo>
          <p
            className="container md:mx-auto text-center my-5"
            data-aos="slide-up"
          >
            Busque por seu domínio abaixo.
            <form
              action=""
              className="flex shadow-2xl rounded m-3 overflow-hidden bg-white text-black md:w-[500px] md:mx-auto "
            >
              <input
                type="search"
                className="outline-0 p-3 flex-3"
                placeholder="meudominio.com"
                required
              />
              <button
                type="submit"
                className="bg-blue-500 text-white px-3 flex-1 min-w-[100px]"
              >
                Registrar
              </button>
            </form>
          </p>
          <div>
            <Slider
              {...settings}
              className="flex container md:mx-auto justify-center md:w-[700px]"
            >
              {dominiosLista.map((item) => (
                <div
                  className="m-3 p-3 w-200 flex-100"
                  key={"dominioId-" + item.id}
                  data-aos="slide-up"
                >
                  <div className="card-dominio flex flex-col p-5 bg-white text-black justify-center items-center rounded-md m-3 md:h-50 relative bg-linear-to-r from-blue-400 to-blue-900">
                    <p className="text-2xl font-bold md:text-4xl text-white ">
                      <span className="text-3xl">.</span>
                      {item.name}
                    </p>
                    <small className="text-orange-500 font-bold text-shadow-2xs text-shadow-white text-xl md:text-3xl ">
                      kz {number_format(item.price)}/ano
                    </small>
                    <p className=" text-2xl text-white font-bold absolute bottom-0 left-2 animate-bounce">
                      {item.category}
                    </p>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
      {/* Fim da Area destaque */}

      {/* Tabela exibindo todos os dominios disponíveis */}
      <div className="md:w-200 w-87 mt-30 mx-auto flex items-center justify-between flex-wrap gap-5 border border-gray-200 p-3 box-border">
        <div>
          <select
            name="category_domain"
            id="category_domain"
            className="border border-gray-300 rounded px-4 outline-0"
          >
            <option value="0">Todos</option>
            <option value="1">Other</option>
            <option value="1">Popular</option>
            <option value="1">Technology</option>
            <option value="1">Business</option>
            <option value="1">Services</option>
          </select>
        </div>

        <input
          type="text"
          placeholder="Registar TLD"
          className="border border-gray-300 rounded p-2 outline-0"
        />
      </div>
      <Table className=" m-1 w-87 overflow-x-auto md:w-200 mx-auto block">
        <thead className="border-b-2 border-blue-700 text-sm w-full block text-left">
          <tr>
            <th className="p-2 py-2 md:w-40 font-light text-gray-500">TLD</th>
            <th className="p-2 py-2 md:w-40 font-light text-gray-500">
              Categoria
            </th>
            <th className="p-2 py-2 md:w-40 font-light text-gray-500">
              Registar
            </th>
            <th className="p-2 py-2 md:w-40 font-light text-gray-500">
              Transferir
            </th>
            <th className="p-2 py-2 md:w-40 font-light text-gray-500">
              Renovar
            </th>
          </tr>
        </thead>
        <tbody className=" w-full block">
          {dominiosLista.map((item) => (
            <tr
              className="border-b border-gray-300 cursor-pointer"
              key={item.id}
            >
              <td className="p-2 py-2 md:w-40 text-gray-800 font-bold ">
                .{item.name}
              </td>
              <td className="p-2 py-2 md:w-40  font-light text-gray-500">
                {item.category}
              </td>
              <td className="p-2 py-2 md:w-40  font-light text-gray-500">
                Kz {item.price},00
                <br />
                <small>1 ano</small>
              </td>
              <td className="p-2 py-2 md:w-40  font-light text-gray-500">
                Kz {item.price},00
                <br />
                <small>1 ano</small>
              </td>
              <td className="p-2 py-2 md:w-40  font-light text-gray-500">
                Kz {item.price + 10000},00
                <br />
                <small>1 ano</small>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <div className="md:w-200 w-87 mx-auto flex items-center justify-center border border-gray-200 p-3 mb-30">
        <div>
          Mostrar
          <select
            name="category_domain"
            id="category_domain"
            className="border border-gray-300 rounded px-4 outline-0 mx-2"
          >
            <option value="10">10</option>
            <option value="25">25</option>
            <option value="50">50</option>
            <option value="">Todos</option>
          </select>
          registros
        </div>
      </div>
      <hr className="border-gray-300 mb-20" />
      {/* Fim da Tabela exibindo todos os dominios disponíveis */}

      {/* Beneficios em se obter um dominio */}
      <div className="container mx-auto p-5">
        <Titulo as="h3" className={`text-center text-black `}>
          O que trás para sí um <span className="text-orange-400">domínio</span>
          ?
        </Titulo>
        <p className="text-center mt-5 mb-15 text-gray-500 mx-auto md:w-[700px]">
          Um domínio próprio passa mais confiança do que usar endereços gratuitos
        </p>
        <div className="flex gap-10 flex-wrap container mx-auto justify-center items-baseline ">
          <div className="flex flex-col gap-3 md:w-[30%]">
            <Titulo as="h3" className={`font-bold md:text-lg text-center `}>
              Identidade e marca
            </Titulo>
            <p className="text-gray-500 text-center">
              Facilita a divulgação e memorização do seu negócio ou projeto.
            </p>
          </div>
          <div className="flex flex-col gap-3 md:w-[30%]">
            <Titulo as="h3" className={`font-bold md:text-lg text-center `}>
              Visibilidade e marketing
            </Titulo>
            <p className="text-gray-500 text-center">
              Um domínio facilita estratégias de SEO (otimização para mecanismos de busca) e campanhas de marketing digital.
            </p>
          </div>
          <div className="flex flex-col gap-3 md:w-[30%]">
            <Titulo as="h3" className={`font-bold md:text-lg text-center `}>
              Controle e personalização
            </Titulo>
            <p className="text-gray-500 text-center">
              Permite ter e-mails profissionais e total personalização do site.
            </p>
          </div>
        </div>
      </div>
      {/* Fim da area Beneficios em se obter um dominio */}
    </>
  );
}

export default Dominio;
