import React from 'react'
import { Component } from 'react'
import { auth, signInWithGoogle } from '../../firebase/firebase.utils'
import CustomButton from '../custom-button/custom-button'
import FormInput from '../form-input/form-input'

import './sign-in.scss'

class SignIn extends Component{
    constructor(){
        super()

        this.state = {
            email: '',
            password: ''
        }
    }


    handleSubmit = async e =>{
        e.preventDefault()

        const {email, password}= this.state;

        try {

            await auth.signInWithEmailAndPassword(email, password);
            this.setState({email: "", password: ""});

            
        } catch (error) {
            
        }
    }

    handleChange = e =>{
        e.preventDefault()
        const {name,value }= e.target   

        this.setState({[name]: value});

    }

    render(){
        return(
            <div className ='sign-in'>
                <h1>I Already have an Account</h1>
                <span>Sign in with Email and Password</span>

                <form onSubmit ={this.handleSubmit}>
                    <FormInput type ="email" name ="email" value ={this.state.email} onChange ={this.handleChange} label ='email' required />
                    <FormInput type ="password" name ="password" value ={this.state.password} onChange={this.handleChange} label ='password' required />
                    <div className = 'buttons'>
                    <CustomButton type ="submit" value ='submit form'>Sign in</CustomButton>
                    <CustomButton onClick ={signInWithGoogle}  value ='submit form' isGoogleSignIn>Sign in with Google</CustomButton>
                    </div>
                </form>
                



            </div>
        )
    }
}

export default SignIn;