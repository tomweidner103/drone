import React from 'react'
import ReactDOM from 'react-dom'

class Main extends React.Component {
    constructor(){
        super()
    }
    render(){
        return(
            <div>Hello</div>
        )
    }
}

ReactDOM.render(
        <Main />,
    document.getElementById('app')
)