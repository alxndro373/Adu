import React from 'react';
import '../styles/Inicio.css';
import '@fortawesome/fontawesome-free/css/all.css';
import ADUBusImage from '../img/adu_bus.png';
import Nav from '../components/Navbar.jsx';

export const Inicio = () => {
  return (
    <>
        <Nav />
            <body>
                <section>
                    <div class="content">
                        <div class="main-content">
                            <h1>Central de Autobuses</h1>
                            <h2>ADU</h2>
                            <h3>Bienvenido Administrador</h3>
                        </div>
                        <div class="image">
                            <img src={ADUBusImage} alt="ADU bus" />
                        </div>
                    </div>
                </section>
            </body>    
    </>
    
  )
}
