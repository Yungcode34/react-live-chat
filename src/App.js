import React, { Component } from 'react';
import SignUpForm from './components/SignUpForm'

class App extends Component {
  constructor() {
    super()
    this.state = {
        hasSignedUp: false
    }
}
  handleSignUp = (e) =>{
    e.preventDefault()
    console.log('app component', this.state)
  }
  render(){
    return (
      <div className="App">
      <SignUpForm onSingUp={this.handleSignUp}/>
      <pre>{JSON.stringify(this.state, null, 2)}</pre>
      </div>
    );
  }

}

export default App;
