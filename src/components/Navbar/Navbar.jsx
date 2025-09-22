import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/logotipo.jpeg";
import "./Navbar.css";
import { useState } from "react";

function Navbar() {
  const [menu, setMenu] = useState("smMenu hide");
  const links = [
    {
      id: 1,
      nome: "Software",
      url: "software",
    },
    {
      id: 2,
      nome: "Análise de Dados",
      url: "dataanalitics",
    },
    {
      id: 3,
      nome: "Websites",
      url: "website",
    },
    {
      id: 4,
      nome: "E-mail corporativo",
      url: "emailcorporative",
    },
    {
      id: 5,
      nome: "Domínios",
      url: "domain",
    },
  ];
  const app = useNavigate();
  return (
    <>
      <header>
        <button
          className="rounded outline-1 outline-gray-300  text-center text-gray-700 font-bold w-20 h-10 lg:hidden uppercase"
          onClick={() =>
            setMenu((prevValue) => prevValue.replaceAll("hide", "") + "show")
          }
        >
          Menu
        </button>
        <Link to="/">
          <h1>
            Logo
            <img src={Logo} alt="" />
          </h1>
        </Link>
        <ul className={menu}>
          <button
            style={{ zIndex: `3` }}
            className="text-2xl text-center text-red-700 absolute right-0 top-0 p-2 hover:p-3 lg:hidden"
            onClick={() =>
              setMenu((prevValue) => prevValue.replaceAll("show", "") + "hide")
            }
          >
            X
          </button>
          {links.map((link) => (
            <li key={link.id}>
              <Link
                to={link.url}
                className={`text-cyan-800 hover:border-b hover:border-cyan-800 duration-100`}
                onClick={() =>
                  setMenu(
                    (prevValue) => prevValue.replaceAll("show", "") + "hide"
                  )
                }
              >
                {link.nome}
              </Link>
            </li>
          ))}
          <li>
            <Link className="text-white bg-blue-500 px-5 btnLog" to="#">
              Entrar
            </Link>
          </li>
        </ul>
      </header>
    </>
  );
}

export default Navbar;
