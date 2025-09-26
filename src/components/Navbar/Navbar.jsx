import { Link } from "react-router-dom";
import Logo from "../../assets/images/logotipo.jpeg";
import "./Navbar.css";
import { useState } from "react";
import { redesSociais } from "../../pages/Dominio/helpers";

function Navbar() {
  const [menu, setMenu] = useState("smMenu hide");
  const links = [
    {
      id: 1,
      nome: "Software",
      url: "software",
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
        {/*  lg:flex-row lg:static lg:justify-center lg:h-auto lg:bg-white lg:shadow-none lg:w-auto */}
        <div className="lg:py-0 md:w-20 md:justify-between md:h-60 flex gap-5 fixed flex-col w-15 h-50  right-5 bottom-5 sm:bottom-10 md:bottom-15  px-3 py-5 z-3 justify-center items-center rounded group group:hover:shadow-2xl">
          {/* <span className="lg:hidden absolute top-[-10px] right-[-7px] bg-red-500 p-2 box-border text-white rounded-full w-5 h-5 text-center flex justify-center items-center group">
            x
          </span> */}
          {redesSociais.map((item) => (
            <div
              key={item.id}
              className="flex items-center gap-3 flex-1 text-gray-700 group"
            >
              <span>
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className=""
                >
                  {item.icon}
                </a>
              </span>

              {/* lg:block */}
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden"
              >
                {item.name}
              </a>
            </div>
          ))}
        </div>
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
            <Link className="text-white bg-blue-500 px-5 btnLog" to="/login">
              Entrar
            </Link>
          </li>
        </ul>
      </header>
    </>
  );
}

export default Navbar;
