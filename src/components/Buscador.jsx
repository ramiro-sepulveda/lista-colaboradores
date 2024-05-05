/* eslint-disable react/prop-types */
import { Form } from "react-bootstrap";
import { useEffect } from "react";
import { useState } from "react";

const Buscador = ({ listaConjunto, setColaboradoresFiltro }) => {
  const [filtro, setFiltro] = useState("");

  useEffect(() => {
    setColaboradoresFiltro(
      listaConjunto.filter((el) =>
        el.nombre.toLowerCase().includes(filtro.toLowerCase())
      )
    );
  }, [listaConjunto, setColaboradoresFiltro, filtro]);

  const handleSearch = (e) => {
    setColaboradoresFiltro(
      listaConjunto.filter((el) =>
        el.nombre.toLowerCase().includes(e.toLowerCase())
      )
    );
  };

  return (
    <>
      <Form className="d-flex flex-column py-3 gap-3" style={{ width: "70%", maxWidth: '500px' }}>
        <Form.Control
          type="text"
          placeholder="Busca un colaborador"
          onChange={(e) => {
            setFiltro(e.target.value);
            handleSearch(e.target.value);
          }}
        />
      </Form>
    </>
  );
};

export default Buscador;
