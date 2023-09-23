import React, { useState } from 'react';
import Table from './Table';
import './App.css';

function App() {
  const [formData, setFormData] = useState({
    nombres: '',
    apellidoPaterno: '',
    apellidoMaterno: '',
    teléfono: '',
  });

  const [tableData, setTableData] = useState([]);
  const [error, setError] = useState('');

  const isAlpha = (value) => /^[A-Za-z]+$/.test(value);
  const isNumeric = (value) => /^[0-9]+$/.test(value);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (
      formData.nombres.trim() === '' ||
      formData.apellidoPaterno.trim() === '' ||
      formData.apellidoMaterno.trim() === '' ||
      formData.teléfono.trim() === ''
    ) {
      setError('Todos los campos deben estar llenos.');
      return;
    }

    if (!isAlpha(formData.nombres)) {
      setError('El campo "Nombre" debe contener solo letras.');
      return;
    }

    if (!isAlpha(formData.apellidoPaterno)) {
      setError('El campo "Apellido Paterno" debe contener solo letras.');
      return;
    }

    if (!isAlpha(formData.apellidoMaterno)) {
      setError('El campo "Apellido Materno" debe contener solo letras.');
      return;
    }

    if (!isNumeric(formData.teléfono)) {
      setError('El campo "Teléfono" debe contener solo números.');
      return;
    }

    const newRecord = { ...formData };
    setTableData((prevData) => [...prevData, newRecord]);
    setFormData({
      nombres: '',
      apellidoPaterno: '',
      apellidoMaterno: '',
      teléfono: '',
    });
    setError('');
  };

  const handleDeleteRecord = (index) => {
    setTableData((prevData) => prevData.filter((_, i) => i !== index));
  };

  return (
    <div className="App">
      <header className="App-header">
        <div className="flex-container">
          <section className="form-register">
            <h4>Formulario Registro</h4>
            <form onSubmit={handleFormSubmit}>
              <input
                className="controls"
                type="text"
                name="nombres"
                id="nombres"
                placeholder="Ingrese su Nombre"
                value={formData.nombres}
                onChange={handleInputChange}
              />
              <input
                className="controls"
                type="text"
                name="apellidoPaterno"
                id="apellidoPaterno"
                placeholder="Ingrese su Apellido Paterno"
                value={formData.apellidoPaterno}
                onChange={handleInputChange}
              />
              <input
                className="controls"
                type="text"
                name="apellidoMaterno"
                id="apellidoMaterno"
                placeholder="Ingrese su Apellido Materno"
                value={formData.apellidoMaterno}
                onChange={handleInputChange}
              />
              <input
                className="controls"
                type="number"
                name="teléfono"
                id="teléfono"
                placeholder="Ingrese su Teléfono"
                value={formData.teléfono}
                onChange={handleInputChange}
              />
              <button className="botones" type="submit">
                Registrar
              </button>
              <button
                className="botones"
                type="button"
                onClick={() =>
                  setFormData({
                    nombres: '',
                    apellidoPaterno: '',
                    apellidoMaterno: '',
                    teléfono: '',
                  })
                }
              >
                Cancelar
              </button>
            </form>
            {error && <p style={{ color: 'red' }}>{error}</p>}
          </section>
          <Table data={tableData} onDelete={handleDeleteRecord} />
        </div>
      </header>
    </div>
  );
}

export default App;