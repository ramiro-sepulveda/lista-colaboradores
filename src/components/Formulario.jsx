/* eslint-disable react/prop-types */
import { useState } from "react";
import { Form } from "react-bootstrap";

const Formulario = ({ listaConjunto, setColaboradores, setAlert }) => {
  const [id, setId] = useState(3);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [edad, setEdad] = useState("");
  const [cargo, setCargo] = useState("");
  const [tel, setTel] = useState("");

  // const [objeto, setObjeto] = useState(listaConjunto);

  function handleSubmit(e) {
    e.preventDefault();
    if (
      id == "" ||
      name == "" ||
      email == "" ||
      edad == "" ||
      cargo == "" ||
      tel == ""
    ) {
      setAlert(1);
    } else {
      setAlert(2);
      setId(id + 1);
      const nuevaLista = [
        ...listaConjunto,
        {
          id: id + 1,
          nombre: name,
          correo: email,
          edad: edad,
          cargo: cargo,
          telefono: tel,
        },
      ];
      console.log(nuevaLista);
      setColaboradores(nuevaLista);

      setName("");
      setEmail("");
      setEdad("");
      setCargo("");
      setTel("");
    }
  }

  return (
    <>
      <Form
        className="d-flex flex-column pt-3 gap-3"
        style={{ width: "100%" }}
        onSubmit={(e) => handleSubmit(e)}
      >
        <Form.Control
          type="text"
          placeholder="Nombre del colaborador"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
        <Form.Control
          type="text"
          placeholder="Email del colaborador"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <Form.Control
          type="text"
          placeholder="Edad del colaborador"
          onChange={(e) => setEdad(e.target.value)}
          value={edad}
        />
        <Form.Control
          type="type"
          placeholder="Cargo del colaborador"
          onChange={(e) => setCargo(e.target.value)}
          value={cargo}
        />
        <Form.Control
          type="type"
          placeholder="Teléfono del colaborador"
          onChange={(e) => setTel(e.target.value)}
          value={tel}
        />
        <button type="submit" className="btn btn-primary">
          Agregar Colaborador
        </button>
      </Form>
    </>
  );
};

export default Formulario;
