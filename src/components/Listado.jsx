/* eslint-disable react/prop-types */
import Table from "react-bootstrap/Table";

const Listado = ({ listaConjunto }) => {
  return (
    <div>
      <Table responsive striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Correo</th>
            <th>Edad</th>
            <th>Cargo</th>
            <th>Telefono</th>
          </tr>
        </thead>
        <tbody>
          {listaConjunto.map((objeto) => (
            <tr key={objeto.id}>
              <td>{objeto.id}</td>
              <td>{objeto.nombre}</td>
              <td>{objeto.correo}</td>
              <td>{objeto.edad}</td>
              <td>{objeto.cargo}</td>
              <td>{objeto.telefono}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default Listado;
