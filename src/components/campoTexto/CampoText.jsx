import React from "react";
import "./campoText.scss";

const CampoText = (props) => {

    const manejarCambio =(e) =>{
        //actualiza cada letra que ingrese al input el e.target..
        props.setValor(e.target.value);
    }

    return (
        <div className="campo-texto">
            <label htmlFor="">{props.nombre}</label>
            {/** required es para que si o si tengas que ingresar datos a los inputs */}
            <input
                type="text"
                placeholder={`Ingresar ${props.tipo}`}
                required={props.required}
                value={props.valor}
                onChange={manejarCambio}
            />
        </div>
    );
};

export default CampoText;
