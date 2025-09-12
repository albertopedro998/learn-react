import Card from "./components/Card/Card.jsx";
import Sobre from "./components/Sobre/index.jsx";
import "./App.css";
import Servicos from "./components/Servicos/Servicos.jsx";
import Diferenciais from "./components/Diferenciais/index.jsx";
import Comunidade from "./components/Comunidade/index.jsx";

function Home() {
  return (
    <>
      <Card className="p-5 py-[50%] md:py-[45%] lg:py-[15%] flex flex-col justify-center box-border " />
      <Servicos
        className="p-5 flex flex-col justify-center items-center
      "
      />
      <Sobre />
      <Diferenciais />
      <Comunidade />
    </>
  );
}

export default Home;
