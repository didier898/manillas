import React, { useState } from 'react';
import { collection, addDoc } from 'firebase/firestore';
import db from './Firebase';


const Manillas = () => {
    const [cantidad, setCantidad] = useState(0);
  const [material, setMaterial] = useState('cuero');
  const [dije, setDije] = useState('martillo');
  const [moneda, setMoneda] = useState('dolar');
  const [tipo, setTipo] = useState('oro');
  const [costo, setCosto] = useState(0);

  const manejarCambioCantidad = (event) => {
    const valor = parseInt(event.target.value, 10);
    setCantidad(isNaN(valor) || valor < 0 ? 0 : valor);
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

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Cálculos de las combinaciones
    let nuevoCosto = 0;
    if (material === 'cuero') {
      if (dije === 'martillo') {
        if (tipo === 'oro' || tipo === 'ororosado') {
          nuevoCosto = 100;
        } else if (tipo === 'plata') {
          nuevoCosto = 80;
        } else if (tipo === 'niquel') {
          nuevoCosto = 70;
        }
      } else if (dije === 'ancla') {
        if (tipo === 'oro' || tipo === 'ororosado') {
          nuevoCosto = 120;
        } else if (tipo === 'plata') {
          nuevoCosto = 100;
        } else if (tipo === 'niquel') {
          nuevoCosto = 90;
        }
      }
    } else if (material === 'cuerda') {
      if (dije === 'martillo') {
        if (tipo === 'oro' || tipo === 'ororosado') {
          nuevoCosto = 90;
        } else if (tipo === 'plata') {
          nuevoCosto = 70;
        } else if (tipo === 'niquel') {
          nuevoCosto = 50;
        }
      } else if (dije === 'ancla') {
        if (tipo === 'oro' || tipo === 'ororosado') {
          nuevoCosto = 110;
        } else if (tipo === 'plata') {
          nuevoCosto = 90;
        } else if (tipo === 'niquel') {
          nuevoCosto = 80;
        }
      }
    }

    // Costo a la moneda seleccionada
    if (moneda === 'pesos') {
      nuevoCosto *= 5000; // Conversión de dólares a pesos (1 dólar = 5000 pesos)
    }

    // Costo según la cantidad
    nuevoCosto *= cantidad;

    // Actualizar el estado del costo
    setCosto(nuevoCosto);

    try {
      // Guardar los datos en Firebase
      const docRef = await addDoc(collection(db, 'manillas'), {
        cantidad,
        material,
        dije,
        tipo,
        moneda,
        costo: nuevoCosto,
      });

      console.log('Documento guardado con ID: ', docRef.id);

    } catch (error) {
      console.error('Error al guardar el documento: ', error);
    }
  };

  return (
    <div className='container mt-5'>
      <h1 className='text-center'>Manillas didier</h1>
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
          <br />
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
        <p>Costo: {moneda === 'pesos' ? `$${costo.toLocaleString()}` : `$${costo}`}</p>
      </div>
    </div>
  );
};


export default Manillas