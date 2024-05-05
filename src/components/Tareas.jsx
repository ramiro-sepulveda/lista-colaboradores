import { useState } from "react";
import { BaseColaboradores } from "../BaseColaboradores";

const Tareas = () => {
  const [nombreTarea, setNombreTarea] = useState("");
  const [listaTareas, setListaTareas] = useState(tareasIniciales);

  // Función al enviar el formulario
  const enviarFormulario = (e) => {
    e.preventDefault();
    setListaTareas([
      ...listaTareas,
      { nombre: nombreTarea, completada: false },
    ]);
    setNombreTarea("");
  };

  //Función al escribir sobre el input del formulario
  const capturaInput = (e) => {
    setNombreTarea(e.target.value);
  };

  const completarTarea = (tarea) => {
    const nuevasTareas = [...listaTareas];
    const index = nuevasTareas.findIndex((el) => el.nombre === tarea.nombre);
    nuevasTareas[index].completada = true;
    setListaTareas(nuevasTareas);
  };

  const eliminarTarea = (tarea) => {
    const nuevasTareas = [...listaTareas];
    const index = nuevasTareas.findIndex((el) => el.nombre === tarea.nombre);
    nuevasTareas.splice(index, 1);
    setListaTareas(nuevasTareas);
  };

  return (
    <>
      <div>
        <form onSubmit={enviarFormulario}>
          <input
            name="nombreTarea"
            onChange={capturaInput}
            value={nombreTarea}
          />
          <button> Agregar Tarea </button>
        </form>
        <ul>
          {listaTareas.map((tarea) => (
            <li
              key={tarea.nombre}
              onClick={() => console.log(tarea)}
              style={
                tarea.completada === true
                  ? { textDecoration: "line-through" }
                  : {}
              }
            >
              {tarea.nombre}{" "}
              {tarea.completada === false ? (
                <button onClick={() => completarTarea(tarea)}>Completar</button>
              ) : (
                ""
              )}
              <button onClick={() => eliminarTarea(tarea)}>Borrar</button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Tareas;
