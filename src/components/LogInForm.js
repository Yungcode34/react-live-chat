import React, { Component } from 'react';


class LoginForm extends Component {
    constructor() {
        super()
        this.state = {
            email:'',
            password:''
        }
    }
    updateEmail = (e) =>{
        this.setState({
           email: e.target.value
        })
    }
    updatePassword = (e) =>{
        this.setState({
            password: e.target.value
        })
    }

    login = (e) => {
        e.preventDefault();
        this.props.onLogin(this.state);
        this.setState({
            email: '',
            password:''
        })
    }

    render(){
        return (
            <div className='box'>
            <h1 className='title'>Login</h1>
            <form onSubmit={this.login}>
            <div className='field'>
                <div className='control'>
                <input type='email'
            placeholder='Email...' 
            value={this.state.email} 
            onChange={this.updateEmail}
            className='input'/>
                </div>
            </div>
            <div className='field'>
                <div className='control'>
                <input type='password'
            placeholder='Password...' 
            value={this.state.password} 
            onChange={this.updatePassword}
            className='input'/>
                </div>
            </div>
            <button typw='submit' className='button is-fullwidth has-background-link has-text-black'>Login</button>
            </form>
            </div>
        )
    }
}

export default LoginForm;