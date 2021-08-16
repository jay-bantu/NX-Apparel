import React, { Component } from 'react'
import { createUserProfileDocument, auth } from '../../firebase/firebase.utils'
import CustomButton from '../custom-button/custom-button'
import FormInput from '../form-input/form-input'


import './sign-up.scss'


class SignUp extends Component{
    constructor(){
        super();
        this.state ={
            displayName:'',
            email:'',
            password:'',
            confirmPassword:''
        }
    }

    handleSubmit = async (event)=>{
        event.preventDefault()

        const {displayName, email, password, confirmPassword} = this.state

        if(password !== confirmPassword){
            alert("passwords don't match")
            return
        }
        try {
            
            const {user} = await auth.createUserWithEmailAndPassword(email, password)

            await createUserProfileDocument(user, {displayName});
            this.setState({
                displayName:'',
                email:'',
                password:'',
                confirmPassword:''
            })
            
        } catch (error) {
            console.error(error);
            
        }
    }

    handleChange = event =>{
        const {name,value}=event.target

        this.setState({[name]:value});
    }


    render(){

        const {displayName, email, password, confirmPassword} = this.state
        return(
            <div>
                <h2 className='title'>
                    I do not have an Account
                </h2>
                <span> Sign up with Email and Password</span>
                <form className='sign-up-form' onSubmit={this.handleSubmit}>
                    <FormInput
                    type ='text'
                    name ='displayName'
                    value ={displayName}
                    onChange={this.handleChange}
                    label='Username'
                    required
                    >

                    </FormInput>
                    <FormInput
                    type ='email'
                    name ='email'
                    value ={email}
                    onChange={this.handleChange}
                    label='Email'
                    required
                    >

                    </FormInput>
                    <FormInput
                    type ='password'
                    name ='password'
                    value ={password}
                    onChange={this.handleChange}
                    label='Password'
                    required
                    >

                    </FormInput>
                    <FormInput
                    type ='password'
                    name ='confirmPassword'
                    value ={confirmPassword}
                    onChange={this.handleChange}
                    label='Confirm Password'
                    required
                    >

                    </FormInput>

                    <CustomButton type='submit'>Sign Up</CustomButton>
                </form>
                
                
                   
            </div>
        );
    }
}

export default SignUp;