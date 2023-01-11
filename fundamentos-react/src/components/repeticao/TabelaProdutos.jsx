import React from "react";
import produto from '../../data/produto'

export default function TabelaProdutos(){
    const listagem = produto.map(produto =>{
        return(
            <table style={{border:"1px solid black"}} key={produto.key}>
                <tr>
                    <td><span>id</span></td>
                    <td><span>produto</span></td>
                    <td><span>valor</span></td>
                </tr>
                <tr>
                    <td>{produto.id}</td>
                    <td>{produto.produto}</td>
                    <td>{produto.valor}</td>
                </tr>
                <tr>
                    
                </tr>
            </table>
        )
    })
    
    return(
        <div>{listagem}</div>
    )
}