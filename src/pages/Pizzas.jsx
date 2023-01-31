import { useState, useContext } from "react";
import { useParams } from "react-router-dom";
import MamamiaContext from "../MamamiaContext";
import "./Pagestyles.css";
import { useEffect } from "react";

const PizzaDesc = () => {
  const [pizza, setPizza] = useState(null);
  const { pizzas,anadirCarrito } = useContext(MamamiaContext);
  const { id } = useParams();

  useEffect(() => {
    const getPizza = async () => {
      const result = pizzas.filter((obj) => obj.id === id);
      setPizza(result);
    };
    getPizza();
  }, [pizzas, id]);

  return (
    <>
      {pizza ? (
        <div>
          <div>
            <div class="cardContainerDesc" key={pizza[0].id}>
            <div class="containerImgDesc">
            <div>
                <img class="imgDesc" src={pizza[0].img} alt={pizza.name} />
              </div>
            </div>
          <div class = "containerDesc">
          <div class="">
                <h4 class="tituloPizza"> {pizza[0].name}</h4><hr />
                <p class="">{pizza[0].desc}</p>
                <hr />
                <p class=""><b>Ingredientes:</b></p>
                <ul>
                  {pizza[0].ingredients.map((ingredient, i) => (<li key={i}> {ingredient} </li> ))}
                </ul>
              </div>
              <div class="card-footerpizza">
                <hr /><h2 class="">price $ {pizza[0].price}</h2><hr />
                <div>
                  <button
                    class="buttonAnadir"
                    onClick={() => anadirCarrito(pizza[0])}> Añadir
                  </button>
                </div>
              </div>
          </div>
          </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default PizzaDesc;