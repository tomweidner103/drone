import React from 'react'
import ReactDOM from 'react-dom'

export default class Main extends React.Component {
    constructor(){
        super()
    }
    render(){
        return(
            <div>
            <div>Hello</div>
            </div>

        )
    }
}

ReactDOM.render(
        <Main />,
    document.getElementById('app')
)