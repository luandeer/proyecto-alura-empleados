import React from "react";
import "./equipo.scss";
import Colaborador from "../colaborador/Colaborador";

const Equipo = (props) => {
    //destructuracion
    //ej: colorPrimario = props.datos.colorPrimario
    const { colorPrimario, colorSecundario, titulo } = props.datos;
    //destructurando solo con la propiedad props
    const { colaboradores, eliminarColaborador } = props;

    const obj = {
        colorFondoEquipo: colorSecundario,
        colorLineaEquipo: colorPrimario,
    };

    return (
        <>
            {
                //si la condicion es verdadera &&(cumplir) la etiqueta
                colaboradores.length > 0 && (
                    <section
                        className="equipo"
                        style={{ backgroundColor: obj.colorFondoEquipo }}
                    >
                        <h3 style={{ borderColor: obj.colorLineaEquipo }}>{titulo}</h3>
                        <div className="colaboradores">
                            {colaboradores.map((colaborador, index) => (
                                <Colaborador
                                    datos={colaborador}
                                    key={index}
                                    colorPrimario={colorPrimario}
                                    eliminarColaborador={eliminarColaborador}
                                />
                            ))}
                        </div>
                    </section>
                )
            }
        </>
    );
};

export default Equipo;
