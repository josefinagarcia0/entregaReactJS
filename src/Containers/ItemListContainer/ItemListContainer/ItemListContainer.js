import React, {useEffect, useState} from "react";
import ItemList from "./ItemList/ItemList"
import { useParams } from "react-router-dom";

export const ItemListContainer = ({ greeting }) => {
    // clase promsesas
    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)

    // id es el que puse en Route-path en app.js 
    const { id } = useParams()

    // esto es segun la doc de la api
    const URL_BASE = "https://fakestoreapi.com/products"
    const URL_CAT = `${URL_BASE}/category/${id}` 

    

    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
        .then((res) => res.json(id ? URL_CAT : URL_BASE)) // recibo el res y lo parceo para poder leerlo
        .then((dato) => setProductos(dato)) // lo guardo en el setProducts
        .catch((error) => {console.log(error);}) 
        .finally(setLoading(false)) // se ejecuta siempre
    }, [id]) //agrego id para que el useEffect se ejecute siempre (no solo en el montaje)

    /* const getProducts = async () => {
        try {
            const res = await fetch("https://fakestoreapi.com/products")
            const data = await res.json()
            setProducts(data)
        } catch {
            console.log("error")
        } finally {
            setLoading(false)
        }
    } 
    getProducts() */


    // declaro esta funcion y se la paso al comp hijo (ItemCount)
    const onAdd = (count) => {
        console.log(`El usuario quiere agregar ${count} productos`)
    }

    return (
        <>
            <h1>{greeting}</h1>
            {
                <>
                    {loading ? <h1>Cargando...</h1> : < ItemList productos={productos} />}
                </>
            }
        </>
    );
};