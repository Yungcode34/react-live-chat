import React, { Component } from 'react';
import SignUpForm from './components/SignUpForm'
import LoginForm from './components/LogInForm';
class App extends Component {
  constructor() {
    super()
    this.state = {
        hasSignedUp: false
    }
}
  handleSignUp = (e) =>{
    e.preventDefault();
    this.setState(state => {
      const newState = Object.assign({}, state);
      newState.hasSignedUp = !newState.hasSignedUp;
      return newState;
    })
  }

  handleLogin = (e) => {
    e.preventDefault();
    console.log('App', this.state)
  }
  render(){
    return (
      <div className="App">
      <SignUpForm onSignUp={this.handleSignUp}/>
      <LoginForm onLogin={this.handleLogin}/>
      <pre>{JSON.stringify(this.state, null, 2)}</pre>
      </div>
    );
  }

}

export default App;
