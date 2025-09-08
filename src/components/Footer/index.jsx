import Titulo from "../Titulo";
import Navbar from "../Navbar/Navbar";
import { FaDownLong } from "react-icons/fa6";

export default function Footer() {
  return (
    <div id="rodape" className=" w-full md:h-100 bg-gray-900 text-gray-500 p-5 flex justify-center ">
      <div className="md:container md:my-auto flex justify-center gap-5 flex-wrap">
        <section className="flex flex-col gap-2 md:w-100 ">
          <Titulo as="h3" className="text-white border-b-1 p-2 ">
            Sobre nós
          </Titulo>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde
            itaque qui et, minus, voluptas quidem ut vitae fugiat, quaerat quis
            non expedita dicta explicabo vel minima amet officiis temporibus
            necessitatibus?
          </p>
        </section>
        <section className="flex flex-col gap-2 w-100 md:w-70">
          <Titulo as="h3" className="text-white border-b-1 p-2 ">
            Serviços
          </Titulo>
          <ul>
            <li>
              <a href="#" className="text-gray-400">Software</a>
            </li>
            <li>
              <a href="#" className="text-gray-400">Análise de Dados</a>
            </li>
            <li>
              <a href="#" className="text-gray-400">Criaçao de Websites</a>
            </li>
            <li>
              <a href="#" className="text-gray-400">Email-corporativo</a>
            </li>
            <li>
              <a href="#" className="text-gray-400">Domínios</a>
            </li>
          </ul>
        </section>
        <section className="flex flex-col gap-2 w-100 md:w-70 ">
          <Titulo as="h3" className="text-white border-b-1 p-2 ">
            Parcerias
          </Titulo>
          <ul>
            <li>
              <a href="#" className="text-gray-400">Software</a>
            </li>
            <li>
              <a href="#" className="text-gray-400">Análise de Dados</a>
            </li>
            <li>
              <a href="#" className="text-gray-400">Criaçao de Websites</a>
            </li>
            <li>
              <a href="#" className="text-gray-400">Email-corporativo</a>
            </li>
            <li>
              <a href="#" className="text-gray-400">Domínios</a>
            </li>
          </ul>
        </section>
        <section className="flex flex-col bg-red-100 justify-center items-center gap-5 rounded p-5 md:w-100 w-full bg-linear-to-r from-red-300 to-red-600 ">
          <Titulo as="h3" className="text-gray-100 ">
            Newsletter
          </Titulo>
          <form action="#" className="flex flex-col gap-1 w-full">
            <input
              type="email"
              name="user"
              id="user"
              placeholder="exemplo@gmail.com"
              className="w-full border border-red-400 rounded text-black px-2 py-2 bg-white outline-0"
            />
            <button className="w-full border border-red-400 rounded text-gray-200 bg-red-700 px-2 py-1">
              concluido
            </button>
          </form>
        </section>
      </div>
    </div>
  );
}
