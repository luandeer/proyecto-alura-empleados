import { useState } from "react";
import Header from "./components/header/Header";
import Form from "./components/formulario/Form";
import MiOrg from "./components/miOrg/MiOrg";
import Equipo from "./components/equipo/Equipo";
import "./App.css";

import Footer from "./components/footer/index"

function App() {
  const [mostrarForm, setMostrarForm] = useState(false);
  const [colaboradores, setColaboradores] = useState([{
    equipo: "Front End",
    foto: "https://avatars.githubusercontent.com/u/68311369?v=4",
    nombre: "telmo",
    puesto: "front"
  }]);

  const [equipos, setEquipos] = useState([
   
      {
        titulo: "Programación",
        colorPrimario: "#57C278",
        colorSecundario: "#D9F7E9",
      },
      {
        titulo: "Front End",
        colorPrimario: "#82CFFA",
        colorSecundario: "#E8F8FF",
      },
      {
        titulo: "Data Science",
        colorPrimario: "#A6D157",
        colorSecundario: "#F0F8E2",
      },
      {
        titulo: "Devops",
        colorPrimario: "#E06B69",
        colorSecundario: "#FDE7E8",
      },
      {
        titulo: "UX y Diseño",
        colorPrimario: "#DB6EBF",
        colorSecundario: "#FAE9F5",
      }
  ])

  const cambiarMostrar = () => {
    setMostrarForm(!mostrarForm);
  };

  //Registrar colaborador
  const registrarColaborador = (colaborador) => {
    //spread operator
    setColaboradores([...colaboradores, colaborador]);
  };

//Eliminar colaborador
const eliminarColaborador = () =>{

}

//Actualizar color de equipo
const actualizarColor = (color, titulo) =>{
  const equipoActualizado = equipos.map((equipo)=>{
    if(equipo.titulo === titulo){
      equipo.colorPrimario =color
    }
    return equipo
  })

  setEquipos(equipoActualizado)
}

  //Lista de equipos
  /**
   const equipos = [
    {
      titulo: "Programación",
      colorPrimario: "#57C278",
      colorSecundario: "#D9F7E9",
    },
    {
      titulo: "Front End",
      colorPrimario: "#82CFFA",
      colorSecundario: "#E8F8FF",
    },
    {
      titulo: "Data Science",
      colorPrimario: "#A6D157",
      colorSecundario: "#F0F8E2",
    },
    {
      titulo: "Devops",
      colorPrimario: "#E06B69",
      colorSecundario: "#FDE7E8",
    },
    {
      titulo: "UX y Diseño",
      colorPrimario: "#DB6EBF",
      colorSecundario: "#FAE9F5",
    },
  ];
   */

  return (
    <>
      <Header />
      {/* condicion ?(entonces) cumplir esto :(caso contrario) cumplir otro*/}
      {mostrarForm === true ? (
        <Form
          registrarColaborador={registrarColaborador}
          equipos={equipos.map((equipo) => equipo.titulo)}
        />
      ) : (
        <></>
      )}

      <MiOrg cambiarMostrar={cambiarMostrar} />

      {equipos.map((equipo) => {
        return <Equipo
          datos={equipo}
          key={equipo.titulo} 
          //esto es para que cuando se agregue a un colaborador se muestre en el campo elegido
          colaboradores={colaboradores.filter(colaborador => colaborador.equipo === equipo.titulo)}
          eliminar ={eliminarColaborador}
          actualizarColor={actualizarColor}
          />;
      })}

      <Footer/>

    </>
  );
}

export default App;
