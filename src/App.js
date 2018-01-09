import React, {Component} from 'react';
import Validator from './component/section4/Validator'
import './App.css';

class App extends Component {
  state = {
    length: 0
  }
  changeTextHandler = (event) => {
    const length = event.target.value.length;
    this.setState({
      length
    })
  }

  render() {
    return (
      <div className="App">
        <input type="text" onChange={this.changeTextHandler}/>
        <Validator length={this.state.length}/>
      </div>
    );
  }
}

export default App;
