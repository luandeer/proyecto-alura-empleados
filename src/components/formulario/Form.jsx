import React, { useState } from "react";
import "./form.scss";
import CampoTexto from "../campoTexto/CampoText";
import ListarOpciones from "../listarOpciones/ListarOpciones";

const Form = (props) => {
    const [nombre, setNombre] = useState("");
    const [puesto, setPuesto] = useState("");
    const [foto, setFoto] = useState("");
    const [equipo, setEquipo] = useState("");
    
    //destructurando
    const {registrarColaborador} = props;

    const manejarEnvio = (event) => {
        //interrumpe la acción por defecto o la ejecucion
        event.preventDefault();
        console.log("Manejar envio");
        let datosAEnviar = {
            nombre:nombre,
            puesto:puesto,
            foto:foto,
            equipo:equipo
        }
        registrarColaborador(datosAEnviar)
    };

    return (
        <section className="formulario">
            <form onSubmit={manejarEnvio}>
                <h2>Rellena el formulario para crear el colaborador.</h2>
                <CampoTexto
                    nombre="Nombre"
                    tipo="nombre"
                    required
                    valor={nombre}
                    setValor={setNombre}
                />
                <CampoTexto
                    nombre="Puesto"
                    tipo="puesto"
                    required
                    valor={puesto}
                    setValor={setPuesto}
                />
                <CampoTexto
                    nombre="Foto"
                    tipo="enlace de foto"
                    required
                    valor={foto}
                    setValor={setFoto}
                />
                <ListarOpciones  valor={equipo} setValor={setEquipo} equipos={props.equipos}/>
                <button>Crear</button>
            </form>
        </section>
    );
};

export default Form;
