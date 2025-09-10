import { BrowserRouter, Routes, Route } from "react-router-dom";
import Software from "./pages/Software";
import Home from "./Home";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer";
import Container from "./components/Container";

function Router() {
  return (
    <BrowserRouter>
    <Navbar />
    <Container>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/Software" element={<Software />}></Route>
      </Routes>
    </Container>
    <Footer />
    </BrowserRouter>
  );
}

export default Router;
