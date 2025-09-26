import { Link } from "react-router-dom";
import Button from "../../components/Button/Button";
import Input from "../../components/Input";
import Titulo from "../../components/Titulo";
import { FaArrowLeftLong, FaPlus } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";
import Logo from "../../assets/images/logotipo.jpeg";
import Fundo from "../../assets/images/image.jpg";

function Login() {
  const fundoProperty = {
    backgroundImage: `url(${Fundo})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
  };
  return (
    <div className="flex flex-col justify-center w-full items-center h-[100vh] gap-7 p-5 lg:container lg:mx-auto lg:flex-row lg:gap-0 ">
      <div
        style={fundoProperty}
        className="h-150 w-250 hidden lg:flex lg:flex-col lg:justify-end lg:items-center lg:gap-5 p-5 rounded-2xl "
        data-aos="fade-left"
      >
        <Titulo as="h2" className={` text-white text-center p-5 `}>
          Somos a solução{" "}
          <span className=" text-purple-500 font-bold ">tecnológica</span> para os
          problemas que tens.
        </Titulo>
        <Link
          to="#"
          className={` text-center bg-gradient-to-br from-blue-600 to-purple-600 px-5 py-3 w-1/2 rounded-full text-white shadow-2xs border-2 border-gray-50 backdrop-blur-2xl font-bold `}
        >
          Criar conta
        </Link>
      </div>
      <div className="flex flex-col justify-center w-full items-center h-[100vh] gap-7 p-5 lg:container lg:mx-auto " data-aos="fade-right">
        <div>
          <Link
            to="/"
            className="absolute top-5 left-5 text-blue-500 font-bold text-2xl md:static"
          >
            <FaArrowLeftLong className="md:hidden" />
            <span className="hidden md:block">continuar sem sessão</span>
          </Link>
        </div>
        <Titulo className={` ml-[-20px] mb-0 text-center md:w-auto `}>
          <img src={Logo} className="w-40 ml-[-5px] text-center " />
        </Titulo>
        <form
          action="#"
          className="flex flex-col gap-2 w-full md:w-1/2 p-5 lg:w-full xl:w-1/2 "
        >
          <label htmlFor="" className="text-gray-700 hidden md:block">
            E-mail
          </label>
          <Input placeholder="kimasolucoes@gmail.com" required />
          <label htmlFor="" className="text-gray-700 hidden md:block">
            Password
          </label>
          <Input placeholder="password" required />
          <div className="flex items-center gap-2">
            <input type="checkbox" id="showPass" />
            <label htmlFor="showPass" className="text-gray-700">
              Mostrar senha
            </label>
          </div>
          <Button
            className={` bg-gradient-to-bl bg-blue-600 text-white px-6 py-3 w-full mx-auto text-center font-bold rounded-full `}
          >
            Entrar
          </Button>
          <p className="flex justify-between text-blue-500 flex-wrap ">
            <Link to="#" className="flex items-center gap-2">
              <FaSearch />
              Recuperar conta
            </Link>
            <Link to="#" className="flex items-center gap-2">
              <FaPlus />
              Criar conta
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;
