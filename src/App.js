import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import PizzaDesc from "./pages/Pizzas";
import DetallePedido from "./pages/Cart";
import Nav from "./components/Navbar";
import { PizzasFunction } from "./MamamiaContext";

export default function App() {
  return (
    <BrowserRouter>
      <PizzasFunction>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pizzas/:id" element={<PizzaDesc />} />
          <Route path="/carrito" element={<DetallePedido />} />
        </Routes>
      </PizzasFunction>
    </BrowserRouter>
  );
}
