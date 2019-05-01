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
    render(){
        return (
            <form onSubmit={this.props.onLogin}>
                <input type='email'
            placeholder='Email...' 
            value={this.state.email} 
            onChange={this.updateEmail}/>
                <input type='password'
            placeholder='Password...' 
            value={this.state.password} 
            onChange={this.updatePassword}/>
            <button typw='submit'>Login</button>
            </form>
        )
    }
}

export default LoginForm;