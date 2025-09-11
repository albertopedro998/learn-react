import Table from "../../components/Table";
import Titulo from "../../components/Titulo";
import "./style.css";
import Slider from "react-slick";
function Dominio() {
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
      name: "org",
      price: 24_900,
      category: "Other",
    },
    {
      id: 3,
      name: "co.ao",
      price: 34_900,
      category: "Other",
    },
  ];
  return (
    <>
      {/* Area destaque */}
      <div className="destaque ">
        <div className="text-white h-[90vh] flex flex-col justify-center container md:m-auto">
          <Titulo as="h2" className={`text-center text-white `}>
            Registe o seu domínio agora, simples e rápido.
          </Titulo>
          <p className="container md:mx-auto text-center my-5">
            Busque por seu domínio abaixo.
            <form
              action=""
              className="flex shadow-2xl rounded m-3 overflow-hidden bg-white text-black md:w-[500px] md:mx-auto "
            >
              <input
                type="search"
                className="outline-0 p-3 flex-1"
                placeholder="ex:dominio.com"
                required
              />
              <button type="submit" className="bg-blue-500 text-white px-3">
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
                >
                  <div className="card-dominio flex flex-col p-5 bg-white text-black justify-center items-center rounded-md m-3 md:h-50 relative">
                    <p className="text-2xl font-bold md:text-4xl ">
                      <span className="text-blue-400 text-3xl">.</span>
                      {item.name}
                    </p>
                    <small className="text-gray-600 text-xl md:text-3xl ">
                      kz {item.price}/ano
                    </small>
                    <p className=" text-2xl text-blue-600 font-bold absolute bottom-0 left-2 animate-bounce">
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
      <div className="md:w-200 w-87 mt-20 mx-auto flex items-center justify-between flex-wrap gap-5 border border-gray-200 p-3 box-border">
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
            <tr className="border-b border-gray-300 cursor-pointer" key={item.id}>
              <td className="p-2 py-2 md:w-40 text-gray-800 font-bold ">.{item.name}</td>
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
                Kz {item.price+10000},00
                <br />
                <small>1 ano</small>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <div className="md:w-200 w-87 mx-auto flex items-center justify-center border border-gray-200 p-3 mb-20">
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
      {/* Fim da Tabela exibindo todos os dominios disponíveis */}
    </>
  );
}

export default Dominio;
