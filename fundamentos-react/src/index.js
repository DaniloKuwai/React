import ReactDOM from 'react-dom'
import React from 'react'

const tag = <strong>Olá React!</strong>
const el = document.getElementById('root')
ReactDOM.render(
    <div>{tag}</div>,
    el
    )