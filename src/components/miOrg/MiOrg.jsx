import React from 'react'
import './miOrg.scss'
import add from '../../assets/icons/add.png'
const MiOrg = (props) => {

  return (
    <section className="orgSection">
        <h3 className='title'>Mi Organizacion</h3>
        <img src={add} alt="add" onClick={props.cambiarMostrar}/>
    </section>
  )
}

export default MiOrg