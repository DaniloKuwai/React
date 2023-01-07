import React from "react";

import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'
import Fragmento from './components/basicos/Fragmento'

export default _ =>
    <div id="app">
        <h1>Fundamentos React 2</h1>
        <Primeiro></Primeiro>
        <ComParametro titulo="Situação do Aluno" aluno="Pedro" nota={9.3}></ComParametro>
        <ComParametro titulo="Situação do Aluno" aluno="Ana" nota={9.8}></ComParametro>
        <Fragmento></Fragmento>
    </div>

