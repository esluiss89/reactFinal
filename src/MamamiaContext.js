import { createContext, useState, useEffect } from "react";

const MamamiaContext = createContext();

const PizzasFunction = ({ children }) => {
  const [pizzas, setPizzas] = useState([]);
  const [carrito, setCarrito] = useState([]);

  useEffect(() => { dataPizzas(); }, []);

  const dataPizzas = async () => {
    const data = await fetch("/pizzas.json");
    const pizzas = await data.json();
    setPizzas(pizzas);
  };

  const anadirCarrito = ({ id, price, name, img }) => {
    const idPizzas = carrito.findIndex((i) => i.id === id);
    const pizzaUnidad = { id, price, name, img, count: 1 };

    if (idPizzas >= 0) {
      carrito[idPizzas].count++;
      setCarrito([...carrito]);
    } else {
      setCarrito([...carrito, pizzaUnidad]);
    }
  };

  const i = (i) => {
    carrito[i].count++;
    setCarrito([...carrito]);
  };
  const rest = (i) => {
    const { count } = carrito[i];
    if (count === 1) {
      carrito.splice(i, 1);
    } else {
      carrito[i].count--;
    } setCarrito([...carrito]);
  };

  return (
    <MamamiaContext.Provider value={{
      pizzas, carrito,
      sumarPizza: i, restarrPizza: rest,
      setCarrito, anadirCarrito
    }}
    >
      {children}
    </MamamiaContext.Provider>
  );
};

export { PizzasFunction };

export default MamamiaContext;