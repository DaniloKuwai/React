import React from "react";

import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'
import Fragmento from './components/basicos/Fragmento'
import Aleatorio from "./components/basicos/Aleatorio";
import Card from "./components/layout/Card";

export default function App() {
    return(
    <div id="app">
        <h1>Fundamentos React</h1>
        <Card titulo="#04 - Valor Aleatório">
        <Aleatorio min={1} max={60}></Aleatorio>
        </Card>

        <Card titulo="#03 - Fragmento">
        <Fragmento></Fragmento>
        </Card>

        <Card titulo="#02 - ComParametro">
        <ComParametro titulo="Situação do Aluno" aluno="Pedro" nota={9.3}></ComParametro>
        <ComParametro titulo="Situação do Aluno" aluno="Ana" nota={9.8}></ComParametro>
        </Card>
        
        <Card titulo="#01 - Primeiro Componente">
        <Primeiro></Primeiro>
        </Card>
    </div>
    )
}
