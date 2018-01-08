import React from 'react'

const userOutput = (props) => {
    const style = {
        border: '2px solid red',
        color: 'blue',
        width: '60%'
    }

    return <div style={style}>
        <p>paragraph {props.userName}</p>
        <p>paragraph 2</p>
    </div>
}

export default userOutput