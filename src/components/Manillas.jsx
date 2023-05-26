import React, { useState } from 'react';

const Manillas = () => {
    const [cantidad, setCantidad] = useState(0);
    const [material, setMaterial] = useState('cuero');

    const manejarCambioCantidad = (event) => {
        setCantidad(parseInt(event.target.value, 10));
      };

      const manejarCambioMaterial = (event) => {
        setMaterial(event.target.value);
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
          </form>
    </div>
    </div>
  )
}

export default Manillas