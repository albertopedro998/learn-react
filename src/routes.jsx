import { BrowserRouter, Routes, Route } from "react-router-dom";
import Software from "./pages/Software";
import Home from "./Home";
import Layout from "./pages/Layout";
import Dominio from "./pages/Dominio";
import Registar from "./pages/Dominio/Registar";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Layout />}>
            <Route index element={<Home />}></Route>
            <Route path="/Software" element={<Software />}></Route>
            <Route path="/domain" element={<Dominio />}></Route>
            <Route path="/domain/registar/:id" element={<Registar />}></Route>
        </Route>
      </Routes>

    </BrowserRouter>
  );
}

export default Router;
