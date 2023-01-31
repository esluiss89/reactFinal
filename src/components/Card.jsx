import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import "./Components.css";
import ContextMamamia from "../MamamiaContext";

const CardPizza = () => {
  const { pizzas, anadirCarrito } = useContext(ContextMamamia);
  const navigate = useNavigate();

  return (
    <>
      <div class="contenedorPizza">
        {pizzas?.map((pizza) => (
          <div key={pizza.id} >
            <div class="card">
              <img class="card-img-top" src={pizza.img} alt={pizza.name} />
              <div class="card-body">
                <h5 class="tituloPizza">
                  {pizza.name}
                </h5>
                <hr /> <p>Ingredientes:</p>
                <div>
                  {pizza.ingredients.map((ingredient, i) => (
                    <li key={i}> {ingredient} </li>
                  ))}
                </div>
              </div>
              <div class= "footer">
                <h2 class="price">$ {pizza.price}</h2>
                <div class="buttons">
                  <button
                    class="buttonVerMas" onClick={() => navigate(`/pizzas/${pizza.id}`)}>  Ver más... 
                  </button>
                  <button
                    class="buttonAnadir"
                    onClick={() => anadirCarrito(pizza)}> Añadir
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default CardPizza;