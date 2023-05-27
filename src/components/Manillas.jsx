import React, { useState } from 'react';

const Manillas = () => {
    const [cantidad, setCantidad] = useState(0);
    const [material, setMaterial] = useState('cuero');
    const [dije, setDije] = useState('martillo');
    const [moneda, setMoneda] = useState('dolar');
    const [tipo, setTipo] = useState('oro');
    

    const manejarCambioCantidad = (event) => {
        setCantidad(parseInt(event.target.value, 10));
      };

      const manejarCambioMaterial = (event) => {
        setMaterial(event.target.value);
      };
      const manejarCambioDije = (event) => {
        setDije(event.target.value);
      };

      const manejarCambioMoneda = (event) => {
        setMoneda(event.target.value);
      };

      const manejarCambioTipo = (event) => {
        setTipo(event.target.value);
      };

      




    const handleSubmit = (event) => {
        event.preventDefault();    } 
  return (
    <div className='container mt-5'>
      <h1 className='text-center'> Manillas didier </h1>
      <hr />
      <div className='row'>
        <div className='col-8'></div>
      </div>
      <div>
        <form onSubmit={handleSubmit}>
          <label>
            Cantidad:
            <input type='number' value={cantidad} onChange={manejarCambioCantidad} />
          </label>
          <br />
          <label>
            Material:
            <select value={material} onChange={manejarCambioMaterial}>
              <option value='cuero'>Cuero</option>
              <option value='cuerda'>Cuerda</option>
            </select>
          </label>
          <label>
            Dije:
            <select value={dije} onChange={manejarCambioDije}>
              <option value='martillo'>Martillo</option>
              <option value='ancla'>Ancla</option>
            </select>
          </label>
          <br />
          <label>
            Tipo:
            <select value={tipo} onChange={manejarCambioTipo}>
              <option value='oro'>Oro</option>
              <option value='ororosado'>Oro Rosado</option>
              <option value='plata'>Plata</option>
              <option value='niquel'>Niquel</option>
            </select>
          </label>
          <br />
          <label>
            Moneda:
            <select value={moneda} onChange={manejarCambioMoneda}>
              <option value='dolar'>Dólar</option>
              <option value='pesos'>Pesos</option>
            </select>
          </label>
          <br />
          <button type='submit'>Calcular</button>



          </form>
    </div>
    </div>
  )
}

export default Manillas