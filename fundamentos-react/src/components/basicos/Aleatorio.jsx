import React from "react";

export default function Aleatorio(props) {
    const min = props.min
    const max = props.max
    //Aqui vai a fórmula para o numero aletorio
    const aleatorio = parseInt(Math.random() * (max -min)) + min
    return (
        <div>
            <p>Digite um número</p>
            <p><strong>O valor mínimo é:{min}</strong></p>
            <p><strong>O valor máximo é:{max}</strong></p>
            <p><strong>O valor escolhido é:{aleatorio}</strong></p>
        </div>
    )
}