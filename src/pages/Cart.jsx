import React from "react";
import { useContext } from "react";
import MamamiaContext from "../MamamiaContext";
import { useEffect } from "react";

const DetallePedido = () => {
  const { carrito, sumarPizza, restarrPizza } = useContext(MamamiaContext);
  const total = carrito.reduce(
    (a, { count, price }) => a + price * count,
    0
  );

  useEffect(() => { }, [carrito]);

  return (
    <>
      <div class="containerCarrito">
        <div class="containerDetalles">
          <h5 class="tituloCarrito">Detalles del Pedido: </h5>
          <div class="productos">
            {carrito.map((product, i) => (
              <div key={i} className="unidad">
                <div className="item">
                  <img src={product.img} style={{ width: 50 }} alt="" />
                  <h6 class="item2">{product.name}</h6>
                </div>
                <div class="item3">
                  <h6 class="item4">
                    ${(product.price * product.count)}
                  </h6>
                  <button
                    class="menos"
                    onClick={() => restarrPizza(i)}>-
                  </button>
                  <h5 class="contador">{product.count}</h5>
                  <button
                    class="mas"
                    onClick={() => sumarPizza(i)}>+
                  </button>
                </div>
              </div>
            ))}
            <h2>Total: ${(total)}</h2>
            <button class="buttonPagar">Ir a Pagar </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default DetallePedido;