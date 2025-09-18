import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./Home";
import Software from "./pages/Software";
import Website from "./pages/Website";
import Dominio from "./pages/Dominio";
import Registar from "./pages/Dominio/Registar";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Layout />}>
            <Route index element={<Home />}></Route>
            <Route path="/Software" element={<Software />}></Route>
            <Route path="/website" element={<Website />}></Route>
            <Route path="/domain" element={<Dominio />}></Route>
            <Route path="/domain/registar/:id" element={<Registar />}></Route>
        </Route>
      </Routes>

    </BrowserRouter>
  );
}

export default Router;
