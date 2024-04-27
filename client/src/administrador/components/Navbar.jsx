import { Link } from "react-router-dom"
import ADULogo from '../img/ADU.png'
import '../styles/Navbar.css'


const Nav = () => {
    return (
        <>
            <div>
                <nav>
                    <div class="container">
                        <div class="logo">
                            <Link className="nav-link text-body" to="/adminInicio">
                                <img src={ADULogo} alt="ADU Logo" />
                            </Link>
                        </div>
                    </div>

                    <div class="links">
                        <Link className="nav-link text-body" to="/adminInicio"><a>Inicio</a></Link>
                        <Link className="nav-link text-body" to="/administradorAutobus"><a>Autobuses</a></Link>
                        <Link className="nav-link text-body" to="/newViaje"><a>Viajes</a></Link>
                        <Link className="nav-link text-body" to="/administradorCuidad"><a>Ciudades</a></Link>
                        <Link className="nav-link text-body" to="/newUsuario"><a>Usuarios</a></Link>
                        <Link className="nav-link text-body" to="/newCompra"><a>Compras</a></Link>
                    </div>
                </nav>
            </div>
        </>
    )
}

export default Nav