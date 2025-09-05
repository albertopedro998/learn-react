import { useState } from "react";
import Tasks from "./components/Tasks.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";
import Button from "./components/Button/Button.jsx";
import Text from "./components/Text.jsx";
import Image from "./components/Image.jsx";
import People from "./assets/images/people/image.jpg";
import Card from "./components/Card/Card.jsx";
import Sobre from "./components/Sobre";
import "./App.css";
import Servicos from "./components/Servicos/Servicos.jsx";
import Diferenciais from "./components/Diferenciais";
import Comunidade from "./components/Comunidade/index.jsx";

function App() {
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
      <Navbar />
      <Card className="p-5
          md:p-52 md:gap-6
          sm:gap-3 sm:p-5 flex flex-col justify-center md:items-start sm:items-center
      "
      />
      <Servicos className="p-5 flex flex-col justify-center items-center
      "
      />
      <Sobre />
      <Diferenciais />
      <Comunidade />
    </>
  );
}

export default App;
