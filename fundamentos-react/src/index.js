import './index.css'
import ReactDOM from 'react-dom'
import React from 'react'

import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'
import Fragmento from './components/basicos/Fragmento'


const el = document.getElementById('root')
ReactDOM.render(
    <div>
        <Primeiro></Primeiro>
        <ComParametro titulo="Situação do Aluno" aluno="Pedro" nota ={9.3}></ComParametro>
        <ComParametro titulo="Situação do Aluno" aluno="Ana" nota ={9.8}></ComParametro>
        <Fragmento></Fragmento>
    </div>,
    el
)