import React from "react";
import produto from '../../data/produto'
import './TabelaProdutos.css'

export default function TabelaProdutos(){
    const listagem = produto.map(produto =>{
        return(
            <table className="TabelaProdutos" border="1" key={produto.key}>
                <thead>
                <tr>
                    <th>id</th>
                    <th>produto</th>
                    <th>valor</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <th>{produto.id}</th>
                    <th>{produto.produto}</th>
                    <th>R${produto.valor}</th>
                </tr>
                </tbody>
            </table>
        )
    })
    
    return(
        <div>{listagem}</div>
    )
}