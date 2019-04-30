import React, { Component } from 'react'

class SignUpForm extends Component {
    render(){
        return (
<div>
    <h1>Hello there! sign up here!</h1>
            <form onSubmit={this.props.hasSignedUp}>
                <input type="text" placeholder='Email' />
                <input type='password' placeholder='Password'/>
                <button type='submit'>sign up!</button>
            </form>
</div>
        )
    }
}

export default SignUpForm;