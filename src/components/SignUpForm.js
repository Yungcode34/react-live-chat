import React, { Component } from 'react'

class SignUpForm extends Component {
    render(){
        return (

            <form onSubmit={this.props.hasSignedUp}>
                <input type="text" placeholder='Email' />
                <input type='password' placeholder='Password'/>
                <button type='submit'>sign up!</button>
            </form>

        )
    }
}

export default SignUpForm;