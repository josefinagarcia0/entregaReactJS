import React from "react";
import './Navbar.css'
import logo from '../../Assets/logo.png'
import { CartWidget } from "../Cart/CartWidget"
import { styles } from './Navbar.style'
import { Link, NavLink } from "react-router-dom"

const Navbar = () => {

    const opciones = [
        {titulo: "Categorias", id: 0, ruta:"/categorias"},
        {titulo: "Informacion", id: 1, ruta:"/informacion"},
        {titulo: "Contacto", id: 2, ruta:"/contacto"}
    ]

    return (
        <header style={styles.container}>
            <nav>
                <Link to="/"><img src={logo} alt="Logo Tienda" /></Link>
                <ul>
                    {
                        //para no generar un li por cada opcion, hago un map
                        opciones.map((opcion, id) => {
                            //<a key={opcion.id} href={opcion.ruta}>{opcion.titulo}</a>
                            return <li><Link key={id} to={opcion.ruta}>{opcion.titulo}</Link></li>
                        })
                    }
                </ul>
                <Link to="/cart"><CartWidget /></Link>
            </nav>
        </header>
    )
}

export default Navbar