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
    render(){
        return (
<div>
            <h1>Hello there! sign up here!</h1>
            <form onSubmit={this.props.onSignUp}>

                <input type="text"
                placeholder='Email'
                value={this.state.email}
                onChange={this.updateEmail}
                />

                <input type='password'
                placeholder='Password'
                value={this.state.password}
                onChange={this.updatePassword}
                />

                <button type='submit'>sign up!</button>
            </form>
</div>
        )
    }
}

export default SignUpForm;