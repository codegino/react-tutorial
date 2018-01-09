import React, { Component } from 'react';
import './App.css';
import UserInput from './component/section3/UserInput'
import UserOutput from './component/section3/UserOutput'

class App extends Component {
  state = {
    userName: 'carlo'
  }

  changeUsernameHandler = (event) => {
      this.setState({
          userName: event.target.value
      })
  }

  render() {
    return (
      <div className="App">
        <UserInput changed={this.changeUsernameHandler} value={this.state.userName}/>
        <UserOutput userName={this.state.userName}/>
        <UserOutput userName={this.state.userName}/>
      </div>
    );
  }
}

export default App;
