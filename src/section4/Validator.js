import React from 'react'

const validator = (props) => {
  const message = () => {
    console.log(props.length);
    if (props.length < 5){
      return <p>Text too short.</p>;
    }else if (props.length > 10){
      return <p>Text too long.</p>;
    }else{
      return null
    }
  }
  return <div>
          <h1>Number of characters is {props.length}</h1>
          {message()}
        </div>
}

export default validator