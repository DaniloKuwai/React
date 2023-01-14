import React from "react";

export default function IndiretaPai(props){
    return(
        <div>
            <div>
                Filho
            </div>
            <button onClick={
                function(e){
                    props.quandoClicar('João',30,true)
                }
            }>
                Fornecer Informações</button>
        </div>
    )
}