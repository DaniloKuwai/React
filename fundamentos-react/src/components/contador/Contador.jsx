import React from "react";

export default class Contador extends React.Component{//aqui estou extendendo a classe de React.Component

    //inicialização de estado
    state = {
        numero: this.props.numeroInicial || 0,
        passo: this.props.passoInicial || 5,
    }

    //agora vamos criar uma função que vai iniciar o nosso contador

    inc = () =>{
        this.setState({
            numero: this.state.numero + this.state.passo,
        })
    }

    dec = () =>{
        this.setState({
            numero: this.state.numero - this.state.passo
        })
    }

    setPasso = (event) => {
        this.setState({
            passo: +event.target.value,
        })
    }


    render(){
        return(
            <div>
                <h2>Contador</h2>
                <h3>{this.state.numero}</h3>
                <div>
                    <label htmlFor="passoInput">Passo: </label>
                        <input id="passoInput" type="number" value={this.state.passo} onChange={this.setPasso}/>
                    
                </div>
                <button onClick={this.inc}>+</button>
                <button onClick={this.dec}>-</button>
            </div>
        )
    }
}