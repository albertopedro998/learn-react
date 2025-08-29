import { useState } from "react";
import Tasks from "./components/Tasks.jsx";
import "./App.css";

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
    }
  ]);
  return (
    <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
      <div className="w-[500px]">
        <h1 className="text-3xl text-slate-100 font-bold text-center">Gerenciador de tarefas</h1>
        <Tasks tasks={tasks}/>
      </div>
    </div>
  );
}

export default App;
