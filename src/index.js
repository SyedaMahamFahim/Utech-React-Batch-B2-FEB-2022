import React from 'react'
import ReactDOM  from 'react-dom'

const element=React.createElement('h1',null,"Hello World")

const element2=React.createElement('p',null,"My name is maham")

const element3=React.createElement('ul',null,React.createElement('li',null,"Ameen"))


ReactDOM.render(element,document.getElementById('root'))

ReactDOM.render(element2,document.getElementById('root2'))

ReactDOM.render(element3,document.getElementById('root3'))