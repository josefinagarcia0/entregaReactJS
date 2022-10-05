import React, {useState} from "react";

const ItemCount = ({stock, initial, onAdd}) => {
    const [count, setCount] = useState(initial)

    const subtract = () => {
        // no me permite restar menos que el valor inicial
        if (count > initial){
            setCount(count - 1)
        }
    }

    const add = () => {
        // no me permite sumar mas que el stock
        if(count < stock){
            setCount(count + 1)
        }
    }

    // en este componente (ItemCount) no deberia ocuparme de agregar productos al carrito.
    // solo de pasar la info de cuantos productos se quieren agregar
    // la funcion onAdd se encuentra fuera del componente
    // en onClick={addToCart} pero --> onClick={()=>onAdd(count)} reemplaza crear la func addToCart
    const addToCart = () => {
        onAdd(count)
    }

    return (
        <>
            <button onClick={subtract}>-</button>
            <p>{count}</p>
            <button onClick={add}>+</button>
            {/* Si no hay stock --> deshabilita el boton */}
            <button disabled={stock === 0} onClick={()=>onAdd(count)}>
                {/* operador ternario */}
                <span>{stock === 0 ? 'No hay stock' : 'Agregar al carrito'}</span>
            </button>
        </>
    )
}

export default ItemCount