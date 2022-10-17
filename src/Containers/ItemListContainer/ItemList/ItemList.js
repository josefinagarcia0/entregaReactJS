import React from "react";
import { styles } from "../../../Components/Navbar/Navbar.style";
import Item from "../Item/Item"

const ItemList = ({ products }) => {
    return (
        <div style={styles.container}>
            {products.map((product) => 
                <Item key={product.id} product={product} />
            )}
        </div>
    )
}

const styles = {
    container:{}
}

export default ItemList