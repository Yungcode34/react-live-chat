import React, { Component } from 'react';
import SignUpForm from './components/SignUpForm'
import LoginForm from './components/LogInForm';
import { auth } from './fire';
import SideBar from './components/SideBar';
import 'bulma/css/bulma.css';

const MainPanel = ({ children }) =>{
        return (
      <div className='column hero'>
        <div className='hero-body'>
          <div className='columns is-centered'>
            <div className='column is-half'>
            {children}
            </div>
          </div>
        </div>
      </div>
        )
};

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
  console.log(this.state);
    })
    .catch(err => console.log(err));

  }

  logout = (e) =>{
    auth.signOut()
    .then(()=>{
      this.setState({
        isLoggedIn: false,
        email:'',
        uid: null,
        //isLoggedIn: false
      });
      console.log(this.state);
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
      <SideBar logout={this.logout} />
      <MainPanel>
      <SignUpForm onSignUp={this.handleSignUp}/>
      <LoginForm onLogin={this.handleLogin}/>
      </MainPanel>
      </div>
    );
  }
}

export default App;
