import React from 'react';

function Table({ data, onDelete }) {
  return (
    <div className="table-container">
      <h4>Tabla de Usuarios</h4>
      <table className="table">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Apellido Paterno</th>
            <th>Apellido Materno</th>
            <th>Teléfono</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {data.map((record, index) => (
            <tr key={index}>
              <td>{record.nombres}</td>
              <td>{record.apellidoPaterno}</td>
              <td>{record.apellidoMaterno}</td>
              <td>{record.teléfono}</td>
              <td>
                <button onClick={() => onDelete(index)}>Eliminar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;