import React from "react"

export default function ComParametro(props){
    console.log(props)//esse console é só para mostrar que o props já está pegando o título e o subtitulo passados no componente
    return (
    <div>
        <h2>{props.titulo}</h2>
        <h3>{props.subtitulo}</h3>
        <h4> {props.nota}</h4>
    </div>
    )
}