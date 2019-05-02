import React, { Component } from 'react'

class SignUpForm extends Component {
    constructor() {
        super()
        this.state = {
            email:'',
            password: ''
        }
    }

    updateEmail = (e) =>{
        this.setState({
            email: e.target.value
        })
        console.log(this.state);
    }
    updatePassword = (e) =>{
        this.setState({
            password: e.target.value
        })
    }
    onSubmit = (e) =>{
        e.preventDefault();
        this.props.onSignUp(this.state);
        this.setState({
            email: '',
            password: ''

        });
    }
    render(){
        return (
            <div className='box column is-half'>
            <h1 className='title'>Sign Up!</h1>
            <form onSubmit={this.onSubmit}>
              <div className='field'>
                <div className='control'>
                  <input type='text'
                    placeholder='Email'
                    value={this.state.email}
                    onChange={this.updateEmail}
                  className='input'/>
                </div>
              </div>
    
              <div className='field'>
                <div className='control'>
                  <input type='password'
                    placeholder='Password'
                    value={this.state.password}
                    onChange={this.updatePassword}
                  className='input'/>
                </div>
              </div>
    
              <button type='submit'
              className='button is-fullwidth has-background-link has-text-black'>Sign Up</button>
            </form>
            <button type='submit'  onClick={this.props.goToLogin}
              className='button is-fullwidth has-background-link has-text-black'>go to Login Up</button>
            <a role='button' onClick={this.props.goToLogin}>
              Already have an account? Go login!
            </a>
          </div>
        )
    }
}

export default SignUpForm;