import { useState } from "react";
import Tasks from "./components/Tasks.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";
import Button from "./components/Button/Button.jsx";
import Text from "./components/Text.jsx";
import Image from "./components/Image.jsx";
import People from "./assets/images/people/image.jpg";
import Card from "./components/Card/Card.jsx";
import Sobre from "./components/Sobre/index.jsx";
import "./App.css";
import Servicos from "./components/Servicos/Servicos.jsx";
import Diferenciais from "./components/Diferenciais/index.jsx";
import Comunidade from "./components/Comunidade/index.jsx";
import Footer from "./components/Footer/index.jsx";

function Home() {
  let [tasks, setTasks] = useState([
    {
      id: 1,
      name: "Alberto Pedro",
      description: "Desenvolver as habilidades",
      isCompleted: false,
    },
    {
      id: 2,
      name: "Learn react",
      description: "Desenvolver as habilidades",
      isCompleted: false,
    },
  ]);
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
