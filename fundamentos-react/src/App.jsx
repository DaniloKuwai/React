import React from "react";
import './App.css';

import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'
import Fragmento from './components/basicos/Fragmento'
import Aleatorio from "./components/basicos/Aleatorio";
import Card from "./components/layout/Card";
import Familia from "./components/basicos/Familia"
import FamiliaMembro from "./components/basicos/FamiliaMembro"
import TabelaProdutos from "./components/repeticao/TabelaProdutos";
import ParOuImpar from "./components/condicional/ParOuImpar";
import Usuarioinfo from "./components/condicional/Usuarioinfo";
import DiretaPai from "./components/comunicacao/DiretaPai";

import ListaAlunos from "./components/repeticao/ListaAlunos";

export default function App() {
    return(
    <div className="App">
        <h1>Fundamentos React</h1>

        <div className="Cards">
        <Card titulo="#10 - Comunicação Direta" color="#59323C">
        <DiretaPai></DiretaPai>
        </Card>     

        <Card titulo="#09 - Renderização Condicional 02" color="#982395">
        <Usuarioinfo usuario={{nome: 'Fernando'}}></Usuarioinfo>
        </Card>   

        <Card titulo="#08 - Renderização Condicional 01" color="#982395">
        <ParOuImpar numero={21}></ParOuImpar>
        </Card>     

        <Card titulo="#07 -Desafio Repeticao" color="#FF432E">
        <TabelaProdutos></TabelaProdutos>
        </Card>    

        <Card titulo="#06 - Repeticao" color="#FF4C65">
        <ListaAlunos></ListaAlunos>
        </Card>    

        <Card titulo="#05 - Componente com Filhos" color="#00C8F8">
        <Familia sobrenome="Ferreira">
        <FamiliaMembro nome="Pedro" ></FamiliaMembro>
        <FamiliaMembro nome="Ana"></FamiliaMembro>
        <FamiliaMembro nome="Gustavo"></FamiliaMembro>
        </Familia>
        </Card>

        <Card titulo="#04 - Valor Aleatório" color="#FA6900">
        <Aleatorio min={1} max={60}></Aleatorio>
        </Card>

        <Card titulo="#03 - Fragmento" color="#E94C6F">
        <Fragmento></Fragmento>
        </Card>

        <Card titulo="#02 - ComParametro" color="#E8B71A">
        <ComParametro titulo="Situação do Aluno" aluno="Pedro" nota={9.3}></ComParametro>
        <ComParametro titulo="Situação do Aluno" aluno="Ana" nota={9.8}></ComParametro>
        </Card>
        
        <Card titulo="#01 - Primeiro Componente" color="#588C73">
        <Primeiro></Primeiro>
        </Card>
        </div>
        
    </div>
    )
}
