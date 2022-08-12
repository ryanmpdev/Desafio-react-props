import React from "react";

export default function Footer(props) {
    return(
        <footer>
            <h1>Footer</h1>
            <p>Estou estudando:{props.estudo}</p>
        </footer>
    )
}