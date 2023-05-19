import React from 'react'
import "./footer.scss"

const index = () => {
  return (
    <footer className='footer' style={{backgroundImage: "url(/Rectangle1.png)"}}>
        <div className='redes'>
            <a href="">
                <img src="/src/assets/icons/facebook.png" alt="" />
            </a>
            <a href="">
                <img src="/src/assets/icons/instagram.png" alt="" />
            </a>
            <a href="">
                <img src="/src/assets/icons/twitter.png" alt="" />
            </a>
        </div>
        <img src="/src/assets/icons/Logo.png" alt="" />
        <strong>Desarrollado por Telmo</strong>
    </footer>
  )
}

export default index