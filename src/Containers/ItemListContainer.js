import React from "react";
import ItemCount from "../Components/ItemCount/ItemCount";

export const ItemListContainer = ({ greeting }) => {

    // declaro esta funcion y se la paso al comp hijo (ItemCount)
    const onAdd = (count) => {
        console.log(`El usuario quiere agregar ${count} productos`)
    }

    return (
        <>
            <h1>{greeting}</h1>
            <ItemCount stock={5} initial={1} onAdd={onAdd}/>
        </>
    );
};