import React, { Component } from 'react';
import SignUpForm from './components/SignUpForm'
import LoginForm from './components/LogInForm';
import { auth } from './fire';


class App extends Component {
  constructor() {
    super()
    this.state = {
        isLoggedIn: false,
        email:''
    }
}
  handleSignUp = ({email, password}) =>{
    auth.createUserWithEmailAndPassword(email, password)
    .catch(err => console.log(err));
  }

  handleLogin = (email) => {
    this.setState({
      isLoggedIn: true,
      email
    })
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
