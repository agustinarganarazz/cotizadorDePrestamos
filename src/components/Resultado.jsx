

const Resultado = ({total, cantidad, plazo}) => {
  return (
    <div className="resultado">
        <h2>COTIZACION</h2>
        <p>La cantidad solicitada es: $ {cantidad} </p>
        <p>A pagar en : $ {plazo} meses</p>
        <p>Su pago mensual es de : $ { (total / plazo ).toFixed(2)}</p>
        <p>Total a pagar : $ {total}</p>
    </div>
  )
}

export default Resultado