import { useState } from "react";
import { calcularTotal } from "../helpers/helpers";

const Formulario = ({ cantidad, setCantidad, plazo, setPlazo, setTotal }) => {
  const [error, setError] = useState(false);

  const calcularPrestamo = (e) => {
    e.preventDefault();
    if (cantidad === 0 || plazo === "") {
      setError(true);
      return;
    }
    setError(false);
    const total = calcularTotal(cantidad, plazo);
    setTotal(total)
    console.log(total)
  };
  return (
    <div>
      <form onSubmit={calcularPrestamo}>
        <div className="columnm">
          <div>
            <label>cantidad de prestamo</label>
            <input
              type="number"
              placeholder="EJ: $3000"
              onChange={(e) => setCantidad(e.target.value)}
            />
          </div>
          <div>
            <label>plazo para pagar</label>
            <select onChange={(e) => setPlazo(e.target.value)}>
              <option value="">Seleccionar</option>
              <option value="3">3 meses</option>
              <option value="6">6 meses</option>
              <option value="12">12 meses</option>
              <option value="24">24 meses</option>
            </select>
          </div>
        </div>
        <div className="btnSubmit">
          <input type="submit" value="calcular" />
        </div>
      </form>
      {error ? (
        <p className="error">Todos los campos son obligatorios...</p>
      ) : (
        ""
      )}
    </div>
  );
};

export default Formulario;
