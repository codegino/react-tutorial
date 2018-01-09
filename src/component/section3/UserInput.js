import React from 'react'
import './UserInput.css'

const userInput = (props) => {
    return <input className="UserInput" sonChange={props.changed} type="text" value={props.value}/>
}

export default userInput