import React from "react";

import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'
import Fragmento from './components/basicos/Fragmento'
import Aleatorio from "./components/basicos/Aleatorio";

export default function App() {
    return(
    <div id="app">
        <h1>Fundamentos React 2</h1>
        <Primeiro></Primeiro>
        <ComParametro titulo="Situação do Aluno" aluno="Pedro" nota={9.3}></ComParametro>
        <ComParametro titulo="Situação do Aluno" aluno="Ana" nota={9.8}></ComParametro>
        <Fragmento></Fragmento>
        <h1>Desafio Número Aleatório</h1>
        <Aleatorio min={1} max={60}></Aleatorio>
    </div>
    )
}
