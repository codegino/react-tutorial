import React from 'react'

const validator = (props) => {
  let message = <p>Text long enough.</p>;

  if (props.length < 5){
      return <p>Text too short.</p>;
  }
  return <div>
          <h1>Number of characters is {props.length}</h1>
          {message}
        </div>
}

export default validator