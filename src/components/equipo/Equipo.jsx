import React from "react";
import "./equipo.scss";
import Colaborador from "../colaborador/Colaborador";
//dependencia para bajar la opacidad de un solido
import hexToRgba from "hex-to-rgba";

const Equipo = (props) => {
    //destructuracion
    //ej: colorPrimario = props.datos.colorPrimario
    const { colorPrimario, colorSecundario, titulo } = props.datos;
    //destructurando solo con la propiedad props
    const { colaboradores, eliminarColaborador, actualizarColor } = props;

    const obj = {
        colorFondoEquipo: hexToRgba(colorPrimario, 0.6),
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
                        <input type="color" className="input-color"
                        value={colorPrimario}
                        //para evitar la adventencia
                        onChange={(evento)=>{actualizarColor(evento.target.value, titulo)}}
                        />
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
