import React from "react";

export default function Header(props) {
    return (
        <header>
            <h1>Header</h1>
            <p>Meu nome é:{props.nome}</p>
        </header>
    )
}