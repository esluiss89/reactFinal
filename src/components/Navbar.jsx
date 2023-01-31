import { NavLink } from "react-router-dom";
import "./Components.css";
import { useContext } from "react";
import MamamiaContext from "../MamamiaContext";


export default function Nav() {
  const { carrito } = useContext(MamamiaContext);
  const total = carrito.reduce(
    (a, { count, price }) => a + price * count,
    0
  );

  return (
    <div class="navbar">
      <div>
        <NavLink to="/">
          <img
            src="https://i.postimg.cc/T1HMwP8g/clipart22791.png"
            width="40"
            height="40"
            alt="Logo de la pizzería"
          />{" "}
          ¡ Pizzeria Mamma Mía !
        </NavLink>
      </div>
      <div class="carrito">
        <NavLink to="/carrito">
          <h1 class="mb-0">
            <img
              src="https://i.postimg.cc/nhpX8HKT/clipart865237.png"
              width="40"
              height="40"
              alt="Icono del carrito"
            />
            {""} Carrito: ${total}
          </h1>
        </NavLink>
      </div>
    </div>
  );
}
