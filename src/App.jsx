import { useState } from "react";
import Listado from "./components/Listado";
import Formulario from "./components/Formulario";
import Buscador from "./components/Buscador";
import Alerta from "./components/Alert";
import { BaseColaboradores } from "./BaseColaboradores";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  const [colaboradores, setColaboradores] = useState(BaseColaboradores);
  const [alert, setAlert] = useState(0);
  const [colaboradoresFiltro, setColaboradoresFiltro] = useState(colaboradores);

  return (
    <div>
      <div>
        <h1 className=" text-start ">Lista de colaboradores</h1>

        <Buscador
          listaConjunto={colaboradores}
          setColaboradoresFiltro={setColaboradoresFiltro}
        />
      </div>
      <div className=" d-lg-flex  gap-5  ">
        <Listado listaConjunto={colaboradoresFiltro} />

        <div>
          <h2>Agregar colaborador</h2>

          <Formulario
            listaConjunto={colaboradores}
            setColaboradores={setColaboradores}
            setAlert={setAlert}
          />
          <Alerta
            textoSuccess="Colaborador agregado exitosamente"
            textoError="Debes completar todos los campos"
            colorSuccess="success"
            colorError="danger"
            alert={alert}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
