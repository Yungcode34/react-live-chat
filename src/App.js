import React, { Component } from 'react';
import SignUpForm from './components/SignUpForm'
import LoginForm from './components/LogInForm';
import { auth } from './fire';
import 'bulma/css/bulma.css';


class App extends Component {
  constructor() {
    super()
    this.state = {
        isLoggedIn: false,
        email:'',
        uid: null
    }
}
  handleSignUp = ({email, password}) =>{
    auth.createUserWithEmailAndPassword(email, password)
    .catch(err => console.log(err));
  }

  handleLogin = ({email, password}) => {
    auth.signInWithEmailAndPassword(email, password)
    .then(user => {
      console.log(user.user)
        const { email, uid }  = user.user;
        this.setState({
        isLoggedIn: true,
        email,
        uid
  });
    })
    .catch(err => console.log(err));

  }

  logout = (e) =>{
    auth.signOut()
    .then(()=>{
      this.setState({
        email:'',
        uid: null,
        //isLoggedIn: false
      });
    });
  }
      // <div className="App">
      //<SignUpForm onSignUp={this.handleSignUp}/>
      //<LoginForm onLogin={this.handleLogin}/>
      //<button onClick={this.logout} className='button'>LOG OUT</button>
      //<pre>{JSON.stringify(this.state, null, 2)}</pre>

      //</div>
  render(){
    return (
      <div className='columns vh-100'>
        <div className='column is-3 hero has-background-link'>
          <h1>side bar</h1>
          <div className='control'>
          <button onClick={this.logout} className='button is-fullwidth'>LOG OUT</button>
          </div>
        </div>
        <div className='column hero'>
          <div className='hero-body'>
            <div className='columns is-centered'>
              <div className='column is-half'>
              <SignUpForm onSignUp={this.handleSignUp}/>
              <LoginForm onLogin={this.handleLogin}/>
              <pre>{JSON.stringify(this.state, null, 2)}</pre>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
