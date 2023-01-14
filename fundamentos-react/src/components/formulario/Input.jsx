import './Input.css'
import React from "react";
import { useState } from "react";

export default function Input(props){

    const [valor, setValor] = useState('Inicial')

    function quandoMudar(e){
        setValor(e.target.value)
    }


    return(
        <div className="Input">
            <h2>{valor}</h2>
            <input value={valor} onChange={quandoMudar}></input>{/*Aqui é para conseguirmos alterar um componente controlado*/}
            <input value={undefined}></input>{/*Aqui deixamos o input como um componente não controlado no caso, vai deixar digitar sem precisar colocar o onChange*/}
        </div>
    )
}