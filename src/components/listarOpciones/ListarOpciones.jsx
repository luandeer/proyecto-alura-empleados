import React from "react";
import "./listarOpciones.scss";

const page = (props) => {
  //Metodo map -> arreglo.map((equipo, position)=>{return <option></option>})
  /*
  const equipos = [
    "Programación",
    "Front End",
    "Data Science",
    "Devops",
    "UX y Diseño",
    "Móvil",
    "Innovación y Gestión",
  ];
   */

  const manejarCambio = (e) =>{
    console.log("cambio",e.target.value)
    props.setValor(e.target.value)
  }

  return (
    <div className="campo-equipo">
      <label htmlFor="">Equipos</label>
      <select name="areas" id="" value={props.valor} onChange={manejarCambio}>
        <option value="" disabled defaultValue="" hidden>Seleccionar equipo</option>
        {props.equipos.map((equipo, position) => {
          return <option key={position} value={equipo}>{equipo}</option>;
        })}
      </select>
    </div>
  );
};

export default page;
