import React from "react";
import './Navbar.css'
import logo from '../../Assets/logo.png'
import { CartWidget } from "../Cart/CartWidget"
import { styles } from './Navbar.style'

const Navbar = () => {

    const opciones = [
        {titulo: "Categorias", id: 0, ruta:"#"},
        {titulo: "Informacion", id: 1, ruta:"#"},
        {titulo: "Contacto", id: 2, ruta:"#"}
    ]

    return (
        <header style={styles.container}>
            <nav>
                <img src={logo} alt="Logo Tienda" />
                <ul>
                    {
                        //para no generar un li por cada opcion, hago un map
                        opciones.map((opcion, id) => {
                            //<a key={opcion.id} href={opcion.ruta}>{opcion.titulo}</a>
                            return <li><a key={id} href={opcion.ruta}>{opcion.titulo}</a></li>
                        })
                    }
                </ul>
                <CartWidget />
            </nav>
        </header>
    )
}

export default Navbar